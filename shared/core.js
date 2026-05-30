// shared/core.js
// This file handles global states, local storage, flashcards, focus mode, and generic UI logic.

const STATE = {
    completedQuestions: new Set(JSON.parse(localStorage.getItem('completedQuestions') || '[]')),
    sessionCompleted: parseInt(sessionStorage.getItem('sessionCompleted') || '0', 10),
    filters: {
        types: new Set(),
        topics: new Set(),
        search: '',
        initialized: false
    },
    showAllAnswers: false,
    focusMode: false,
    showIncompleteOnly: false
};

const typeLabels = {
    'definition': 'Definition',
    'mcq': 'Multiple Choice',
    'tf': 'True/False',
    'comparison': 'Comparison'
};

// ═══════════════════ TYPE NORMALIZATION ═══════════════════
// Normalizes varied type strings from different data sources to canonical lowercase keys.
window.normalizeType = function(t) {
    if (!t) return 'definition';
    var lower = t.toLowerCase().trim();
    if (lower === 'mcq' || lower === 'multiple choice' || lower === 'multiple-choice') return 'mcq';
    if (lower === 'tf' || lower === 'true/false' || lower === 'true or false' || lower === 'true-false') return 'tf';
    if (lower.includes('comparison')) return 'comparison';
    if (lower.includes('definition') || lower.includes('explanation') || lower === 'matching') return 'definition';
    return 'definition';
};

// ═══════════════════ MINI MARKDOWN RENDERER ═══════════════════
// Converts basic Markdown (tables, bold, headings, line breaks) in answer text to HTML.
window.renderBasicMarkdown = function(text) {
    if (!text || typeof text !== 'string') return text || '';
    if (/<[a-z][\s\S]*>/i.test(text)) return text;

    var lines = text.split('\n');
    var html = '';
    var inTable = false;
    var tableHtml = '';
    var isHeaderRow = true;
    var inUl = false;
    var inOl = false;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

        if (line.startsWith('|') && line.endsWith('|')) {
            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }
            if (/^\|[\s:\-|]+\|$/.test(line)) continue;

            var cells = line.split('|').filter(function(c) { return c.trim() !== ''; });

            if (!inTable) {
                inTable = true;
                isHeaderRow = true;
                tableHtml = '<div class="table-container"><table>';
            }

            if (isHeaderRow) {
                tableHtml += '<thead><tr>' + cells.map(function(c) { return '<th>' + renderInlineMarkdown(c.trim()) + '</th>'; }).join('') + '</tr></thead><tbody>';
                isHeaderRow = false;
            } else {
                tableHtml += '<tr>' + cells.map(function(c) { return '<td>' + renderInlineMarkdown(c.trim()) + '</td>'; }).join('') + '</tr>';
            }
            continue;
        }

        if (inTable) {
            tableHtml += '</tbody></table></div>';
            html += tableHtml;
            inTable = false;
            tableHtml = '';
        }

        if (line.startsWith('### ')) { 
            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }
            html += '<h4>' + renderInlineMarkdown(line.slice(4)) + '</h4>'; continue; 
        }
        if (line.startsWith('## ')) { 
            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }
            html += '<h3>' + renderInlineMarkdown(line.slice(3)) + '</h3>'; continue; 
        }
        if (line.startsWith('# ')) { 
            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }
            html += '<h2>' + renderInlineMarkdown(line.slice(2)) + '</h2>'; continue; 
        }

        var ulMatch = line.match(/^[-*]\s+(.*)/);
        if (ulMatch) {
            if (inOl) { html += '</ol>'; inOl = false; }
            if (!inUl) { html += '<ul>'; inUl = true; }
            html += '<li>' + renderInlineMarkdown(ulMatch[1]) + '</li>';
            continue;
        }

        var olMatch = line.match(/^\d+\.\s+(.*)/);
        if (olMatch) {
            if (inUl) { html += '</ul>'; inUl = false; }
            if (!inOl) { html += '<ol>'; inOl = true; }
            html += '<li>' + renderInlineMarkdown(olMatch[1]) + '</li>';
            continue;
        }

        if (line === '') { 
            if (inUl) { html += '</ul>'; inUl = false; }
            if (inOl) { html += '</ol>'; inOl = false; }
            html += '<br>'; continue; 
        }

        if (inUl) { html += '</ul>'; inUl = false; }
        if (inOl) { html += '</ol>'; inOl = false; }

        html += '<p>' + renderInlineMarkdown(line) + '</p>';
    }

    if (inUl) html += '</ul>';
    if (inOl) html += '</ol>';
    if (inTable) {
        tableHtml += '</tbody></table></div>';
        html += tableHtml;
    }

    return html;
};

function renderInlineMarkdown(text) {
    // Bold: **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic: *text*
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return text;
}

// ═══════════════════ TOAST NOTIFICATIONS ═══════════════════
let _toastTimer = null;
window.showToast = function(message, options) {
    options = options || {};
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'toast';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        document.body.appendChild(toast);
    }
    clearTimeout(_toastTimer);

    const isError = options.error || false;
    const undoCallback = options.onUndo || null;

    toast.className = 'toast' + (isError ? ' toast-error' : '');
    toast.innerHTML =
        (isError ? '<span class="toast-icon">⚠</span>' : '<span class="toast-icon">✓</span>') +
        '<span>' + message + '</span>' +
        (undoCallback ? '<button class="toast-undo" id="toast-undo-btn">Undo</button>' : '');

    toast.offsetHeight;
    toast.classList.add('toast-visible');

    if (undoCallback) {
        document.getElementById('toast-undo-btn').onclick = function() {
            undoCallback();
            toast.classList.remove('toast-visible');
            clearTimeout(_toastTimer);
        };
    }

    _toastTimer = setTimeout(function() {
        toast.classList.remove('toast-visible');
    }, options.duration || 4000);
};

// ═══════════════════ COMMON INITIALIZATION ═══════════════════
document.addEventListener('DOMContentLoaded', function() {
    updateSessionCounter();
});

function updateSessionCounter() {
    var el = document.getElementById('session-count');
    if (el) el.innerText = STATE.sessionCompleted;
}

// ═══════════════════ PROGRESS AND LOCAL STORAGE ═══════════════════
window.saveCompleted = function() {
    try {
        localStorage.setItem('completedQuestions', JSON.stringify(Array.from(STATE.completedQuestions)));
    } catch (err) {
        showToast('Unable to save progress — storage full.', { error: true });
    }
    if (typeof updateLocalProgress === 'function') updateLocalProgress();
};

window.toggleCompleted = function(id) {
    if (STATE.completedQuestions.has(id)) {
        STATE.completedQuestions.delete(id);
        saveCompleted();
        if (STATE.showIncompleteOnly && typeof window.renderCards === 'function') window.renderCards();
    } else {
        STATE.completedQuestions.add(id);
        STATE.sessionCompleted++;
        sessionStorage.setItem('sessionCompleted', STATE.sessionCompleted);
        updateSessionCounter();
        saveCompleted();

        showToast('Marked as done', {
            duration: 4000,
            onUndo: function() {
                STATE.completedQuestions.delete(id);
                STATE.sessionCompleted = Math.max(0, STATE.sessionCompleted - 1);
                sessionStorage.setItem('sessionCompleted', STATE.sessionCompleted);
                updateSessionCounter();
                saveCompleted();
                if (typeof window.renderCards === 'function') window.renderCards();
            }
        });
        if (STATE.showIncompleteOnly && typeof window.renderCards === 'function') window.renderCards();
    }
};

window.exportProgress = function() {
    var data = { exportedAt: new Date().toISOString(), completedQuestions: Array.from(STATE.completedQuestions) };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a'); a.href = url; a.download = 'platform-progress.json'; a.click();
    URL.revokeObjectURL(url);
};

window.importProgress = function(input) {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var data = JSON.parse(e.target.result);
            var imported = Array.isArray(data) ? data : (data.completedQuestions || []);
            if (!Array.isArray(imported) || imported.length === 0) {
                showToast('No progress data found in file.', { error: true });
                input.value = '';
                return;
            }
            var beforeSize = STATE.completedQuestions.size;
            imported.forEach(function(id) { STATE.completedQuestions.add(id); });
            var added = STATE.completedQuestions.size - beforeSize;
            saveCompleted();
            if (typeof window.renderCards === 'function') window.renderCards();
            showToast('Merged ' + added + ' new completion' + (added !== 1 ? 's' : '') + ' (' + (imported.length - added) + ' already existed).');
        } catch (err) {
            showToast('Invalid progress file.', { error: true });
        }
        input.value = '';
    };
    reader.readAsText(file);
};

// ═══════════════════ COMMON INTERACTIVE LOGIC ═══════════════════
window.checkMcqAnswer = function(li) {
    var ul = li.closest('.mcq-options');
    if (ul.classList.contains('answered')) return;
    ul.classList.add('answered');
    var isCorrect = li.dataset.correct === 'true';
    li.classList.add(isCorrect ? 'mcq-selected-correct' : 'mcq-selected-wrong');
    if (!isCorrect) {
        ul.querySelectorAll('.mcq-option[data-correct="true"]').forEach(function(opt) {
            opt.classList.add('mcq-show-correct');
        });
    }
};

window.handleMcqKeydown = function(event, li) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        checkMcqAnswer(li);
    }
};

window.checkTfAnswer = function(btn) {
    var container = btn.closest('.tf-buttons');
    if (container.classList.contains('answered')) return;
    container.classList.add('answered');
    var correctVal = container.dataset.answer;
    var isCorrect = btn.dataset.value === correctVal;
    btn.classList.add(isCorrect ? 'tf-correct' : 'tf-wrong');
    if (!isCorrect) {
        container.querySelectorAll('.tf-btn').forEach(function(b) {
            if (b.dataset.value === correctVal) b.classList.add('tf-correct');
        });
    }
    container.querySelectorAll('.tf-btn').forEach(function(b) { b.disabled = true; });
};

window.toggleAnswer = function(btn) {
    var content = btn.parentElement.nextElementSibling;
    var span = btn.querySelector('span');
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        span.innerText = '👁️ Show Answer';
    } else {
        content.classList.add('show');
        span.innerText = '👁️ Hide Answer';
    }
};

window.toggleAllAnswers = function() {
    STATE.showAllAnswers = !STATE.showAllAnswers;
    var btn = document.getElementById('toggle-all-answers');
    if (btn) btn.innerText = STATE.showAllAnswers ? "👁️ Hide All Answers" : "👁️ Show All Answers";
    if (typeof window.renderCards === 'function') window.renderCards();
};

window.toggleIncompleteFilter = function() {
    STATE.showIncompleteOnly = !STATE.showIncompleteOnly;
    var btn = document.getElementById('incomplete-filter-btn');
    if (btn) {
        btn.innerText = STATE.showIncompleteOnly ? '✅ Show All Questions' : '🔲 Show Incomplete Only';
        btn.style.background = STATE.showIncompleteOnly ? 'var(--accent)' : '';
        btn.style.color = STATE.showIncompleteOnly ? '#fff' : '';
    }
    if (typeof window.renderCards === 'function') window.renderCards();
};

window.toggleFocusMode = function() {
    STATE.focusMode = !STATE.focusMode;
    if (STATE.focusMode) {
        document.body.classList.add('focus-mode-active');
        var fab = document.getElementById('focus-exit-fab');
        if (!fab) {
            fab = document.createElement('button');
            fab.id = 'focus-exit-fab';
            fab.innerText = '✕ Exit Focus Mode';
            fab.onclick = toggleFocusMode;
            document.body.appendChild(fab);
        }
        fab.style.display = 'block';
    } else {
        document.body.classList.remove('focus-mode-active');
        var fab = document.getElementById('focus-exit-fab');
        if (fab) fab.style.display = 'none';
    }
};

window.toggleMobileSidebar = function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('sidebar-expanded');
};

var _searchTimeout;
window.handleSearch = function(input) {
    clearTimeout(_searchTimeout);
    _searchTimeout = setTimeout(function() {
        STATE.filters.search = input.value;
        if (window.resetPagination) window.resetPagination();
        if (typeof window.renderCards === 'function') window.renderCards();
    }, 250);
};

window.handleTypeFilter = function(checkbox) {
    if (checkbox.checked) STATE.filters.types.add(checkbox.value);
    else STATE.filters.types.delete(checkbox.value);
    if (typeof window.renderCards === 'function') window.renderCards();
};

window.handleTopicFilter = function(checkbox) {
    if (checkbox.checked) STATE.filters.topics.add(checkbox.value);
    else STATE.filters.topics.delete(checkbox.value);
    if (typeof window.renderCards === 'function') window.renderCards();
};

// ═══════════════════ SHARED CARD GENERATOR ═══════════════════
window.generateCardHtml = function(item) {
    var isCompleted = STATE.completedQuestions.has(item.id);
    var content = '';
    var isComparison = item.type && item.type.toLowerCase().includes('comparison');

    if (isComparison && item.headers && item.rows) {
        // Structured comparison data (exercises format)
        var thead = item.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('');
        var tbody = item.rows.map(function(row) { return '<tr>' + row.map(function(cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>'; }).join('');

        content =
            '<div class="question-text">' + renderBasicMarkdown(item.title || item.question) + '</div>' +
            '<div class="table-container">' +
                '<table>' +
                    '<thead><tr>' + thead + '</tr></thead>' +
                    '<tbody>' + tbody + '</tbody>' +
                '</table>' +
            '</div>' +
            '<div class="answer-container no-print" style="margin-top: 1rem; display: flex; justify-content: flex-end;">' +
                '<label class="mark-done-label">' +
                    '<input type="checkbox" ' + (isCompleted ? 'checked' : '') + ' onchange="toggleCompleted(\'' + item.id + '\')">' +
                    ' Mark as Done' +
                '</label>' +
            '</div>';
    } else if (isComparison && item.table_html) {
        // Raw HTML table data (exams format) — render table_html directly
        content =
            '<div class="question-text">' + renderBasicMarkdown(item.title || item.question) + '</div>' +
            '<div class="table-container">' + item.table_html + '</div>' +
            (item.answer ? '<div class="answer-container no-print"><button class="toggle-answer" onclick="toggleAnswer(this)"><span>👁️ ' + (STATE.showAllAnswers ? 'Hide Answer' : 'Show Answer') + '</span></button>' +
                '<label class="mark-done-label"><input type="checkbox" ' + (isCompleted ? 'checked' : '') + ' onchange="toggleCompleted(\'' + item.id + '\')"> Mark as Done</label></div>' +
                '<div class="answer-content ' + (STATE.showAllAnswers ? 'show' : '') + '"><strong>Explanation:</strong> ' + item.answer + '</div>' :
                '<div class="answer-container no-print" style="margin-top: 1rem; display: flex; justify-content: flex-end;"><label class="mark-done-label"><input type="checkbox" ' + (isCompleted ? 'checked' : '') + ' onchange="toggleCompleted(\'' + item.id + '\')"> Mark as Done</label></div>');
    } else {
        var optionsHtml = '';
        if (item.type === 'mcq' && item.options) {
            var ansStr = typeof item.answer === 'string' ? item.answer : '';
            // Strip markdown bold and HTML tags for cleaner matching
            var cleanAns = ansStr.replace(/\*\*/g, '').replace(/<[^>]*>/g, '').trim();
            var correctLetter = '';
            // Try multiple patterns to extract the correct answer letter:
            // 1. "Option B" or "Option B -..."
            var m = cleanAns.match(/Option\s+([A-D])/i);
            if (!m) {
                // 2. "Answer: A" or "Answer: A -..."
                m = cleanAns.match(/Answer:\s*([A-D])\b/i);
            }
            if (!m) {
                // 3. "A) text..." or "A) text" (letter-paren at start)
                m = cleanAns.match(/^([A-D])\)\s*/i);
            }
            if (!m) {
                // 4. "A - text" or "A -text" (letter-dash at start)
                m = cleanAns.match(/^([A-D])\s*[-–—]\s*/i);
            }
            if (!m) {
                // 5. Just a single letter "A" or "B"
                m = cleanAns.match(/^([A-D])$/i);
            }
            if (m) correctLetter = m[1].toUpperCase();
            
            optionsHtml = '<ul class="mcq-options" data-answer="' + correctLetter + '" role="listbox">' +
                item.options.map(function(opt) {
                    var optStr = String(opt).replace(/<[^>]*>/g, '').trim();
                    var letter = (optStr.match(/^([A-D])\)/) || [])[1] || '';
                    return '<li class="mcq-option" data-letter="' + letter + '" data-correct="' + (letter === correctLetter) + '" onclick="checkMcqAnswer(this)" onkeydown="handleMcqKeydown(event, this)" tabindex="0" role="option">' + opt + '</li>';
                }).join('') +
            '</ul>';
        } else if (item.type === 'tf') {
            var ansStr = typeof item.answer === 'string' ? item.answer : '';
            // Strip markdown bold and HTML tags for cleaner matching
            var cleanAns = ansStr.replace(/\*\*/g, '').replace(/<[^>]*>/g, '').trim().toLowerCase();
            var correctTf = 'True'; // default
            if (cleanAns.startsWith('true') || cleanAns.startsWith('(v)') || cleanAns.match(/answer:\s*v\b/i) || cleanAns === 'v') {
                correctTf = 'True';
            } else if (cleanAns.startsWith('false') || cleanAns.startsWith('(x)') || cleanAns.match(/answer:\s*x\b/i) || cleanAns === 'x') {
                correctTf = 'False';
            } else {
                // Fallback: search anywhere in the string
                if (/\b(false|incorrect)\b/i.test(cleanAns) || /\(x\)/i.test(cleanAns)) {
                    correctTf = 'False';
                }
            }
            optionsHtml = '<div class="tf-buttons" data-answer="' + correctTf + '" role="group" aria-label="True or False">' +
                '<button class="tf-btn" data-value="True" onclick="checkTfAnswer(this)">✓ True</button>' +
                '<button class="tf-btn" data-value="False" onclick="checkTfAnswer(this)">✗ False</button>' +
            '</div>';
        }

        // Render answer text through markdown renderer for rich content
        var renderedAnswer = renderBasicMarkdown(item.answer);

        content =
            '<div class="question-text">' + renderBasicMarkdown(item.question || item.title) + '</div>' +
            optionsHtml +
            '<div class="answer-container no-print">' +
                '<button class="toggle-answer" onclick="toggleAnswer(this)">' +
                    '<span>👁️ ' + (STATE.showAllAnswers ? 'Hide Answer' : 'Show Answer') + '</span>' +
                '</button>' +
                '<label class="mark-done-label">' +
                    '<input type="checkbox" ' + (isCompleted ? 'checked' : '') + ' onchange="toggleCompleted(\'' + item.id + '\')">' +
                    ' Mark as Done' +
                '</label>' +
            '</div>' +
            '<div class="answer-content ' + (STATE.showAllAnswers ? 'show' : '') + '">' +
                '<strong>Answer:</strong> ' + renderedAnswer +
            '</div>';
    }

    return '<div class="card ' + (isCompleted ? 'card-completed' : '') + '" data-type="' + item.type + '">' +
            '<div class="card-header">' +
                '<span class="topic-badge">' + (item.topic || 'General') + '</span>' +
                (isCompleted ? '<span style="color: var(--success); font-size: 0.85rem;">✓ Done</span>' : '') +
            '</div>' +
            content +
        '</div>';
};

// ═══════════════════ FLASHCARD MODE ═══════════════════
var FLASHCARD = { active: false, index: 0, items: [], showAnswer: false, triggerElement: null };

window.enterFlashcardMode = function() {
    if (typeof window.getFilteredItems !== 'function') return;
    FLASHCARD.items = window.getFilteredItems();
    if (FLASHCARD.items.length === 0) {
        showToast('No questions to show.', { error: true });
        return;
    }
    FLASHCARD.active = true;
    FLASHCARD.index = 0;
    FLASHCARD.showAnswer = false;
    FLASHCARD.triggerElement = document.activeElement;

    var overlay = document.getElementById('flashcard-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'flashcard-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Flashcard Mode');
        document.body.appendChild(overlay);
    }
    renderFlashcard(overlay);
    overlay.style.display = 'flex';

    // Set aria-hidden on background content
    document.querySelector('.layout').setAttribute('aria-hidden', 'true');

    document.addEventListener('keydown', handleFlashcardKey);

    // Focus the close button after render
    setTimeout(function() {
        var closeBtn = overlay.querySelector('.fc-close');
        if (closeBtn) closeBtn.focus();
    }, 50);
};

function renderFlashcard(overlay) {
    var item = FLASHCARD.items[FLASHCARD.index];
    var total = FLASHCARD.items.length;
    var current = FLASHCARD.index + 1;
    var isCompleted = STATE.completedQuestions.has(item.id);
    var isComparison = item.type && item.type.toLowerCase().includes('comparison');

    var bodyHtml = '';

    if (isComparison && item.headers && item.rows) {
        var thead = item.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('');
        var tbody = item.rows.map(function(row) { return '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('');
        bodyHtml =
            '<div class="fc-question">' + renderBasicMarkdown(item.title || item.question || '') + '</div>' +
            '<div class="fc-answer ' + (FLASHCARD.showAnswer ? 'show' : '') + '">' +
                '<div class="table-container">' +
                    '<table><thead><tr>' + thead + '</tr></thead><tbody>' + tbody + '</tbody></table>' +
                '</div>' +
            '</div>';
    } else if (isComparison && item.table_html) {
        bodyHtml =
            '<div class="fc-question">' + renderBasicMarkdown(item.title || item.question || '') + '</div>' +
            '<div class="fc-answer ' + (FLASHCARD.showAnswer ? 'show' : '') + '">' +
                '<div class="table-container">' + item.table_html + '</div>' +
            '</div>';
    } else {
        bodyHtml = '<div class="fc-question">' + renderBasicMarkdown(item.question || item.title || '') + '</div>';
        
        if (item.type === 'mcq' && item.options) {
            bodyHtml += '<ul style="margin-top:1rem; list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem;">' + 
                item.options.map(o => `<li style="padding:0.5rem; background:rgba(0,0,0,0.1); border-radius:4px; border:1px solid var(--border);">${o}</li>`).join('') +
            '</ul>';
        }

        bodyHtml += '<div class="fc-answer ' + (FLASHCARD.showAnswer ? 'show' : '') + '"><strong>Answer:</strong> ' + renderBasicMarkdown(item.answer || '') + '</div>';
    }

    var showAnswerBtn = !isComparison ? 
        '<button class="btn btn-outline" onclick="toggleFlashcardAnswer()">' + (FLASHCARD.showAnswer ? '👁️ Hide Answer' : '👁️ Show Answer') + '</button>' : '';

    overlay.innerHTML =
        '<div class="fc-container">' +
            '<div class="fc-header">' +
                '<span class="fc-counter">' + current + ' / ' + total + '</span>' +
                '<span class="topic-badge">' + (item.topic || 'General') + '</span>' +
                '<button class="fc-close" onclick="exitFlashcardMode()">✕ Exit</button>' +
            '</div>' +
            '<div class="fc-card">' +
                '<div class="fc-type-label">' + (typeLabels[item.type] || item.type) + '</div>' +
                bodyHtml +
                '<div class="fc-actions">' +
                    showAnswerBtn +
                    '<label class="mark-done-label"><input type="checkbox" ' + (isCompleted ? 'checked' : '') + ' onchange="toggleCompleted(\'' + item.id + '\'); refreshFlashcard()"> Mark as Done</label>' +
                '</div>' +
            '</div>' +
            '<div class="fc-nav">' +
                '<button class="fc-nav-btn" onclick="flashcardPrev()" ' + (FLASHCARD.index === 0 ? 'disabled' : '') + '>&#8592; Prev</button>' +
                '<div class="fc-progress-wrap"><div class="fc-progress-bar"><div class="fc-progress-fill" style="width:' + ((current / total) * 100) + '%"></div></div></div>' +
                '<button class="fc-nav-btn" onclick="flashcardNext()" ' + (FLASHCARD.index === total - 1 ? 'disabled' : '') + '>Next &#8594;</button>' +
            '</div>' +
            '<div class="fc-hint">Keyboard: &#8592; &#8594; navigate | Space to show answer | Esc to exit</div>' +
        '</div>';

    // Focus trap setup
    setupFocusTrap(overlay);
}

function setupFocusTrap(container) {
    var focusableEls = container.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableEls.length === 0) return;
    var firstEl = focusableEls[0];
    var lastEl = focusableEls[focusableEls.length - 1];

    container._focusTrapHandler = function(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            if (document.activeElement === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    };
    container.addEventListener('keydown', container._focusTrapHandler);
}

window.refreshFlashcard = function() {
    var overlay = document.getElementById('flashcard-overlay');
    if (overlay && FLASHCARD.active) renderFlashcard(overlay);
};
window.toggleFlashcardAnswer = function() { FLASHCARD.showAnswer = !FLASHCARD.showAnswer; refreshFlashcard(); };
window.flashcardNext = function() { if (FLASHCARD.index < FLASHCARD.items.length - 1) { FLASHCARD.index++; FLASHCARD.showAnswer = false; refreshFlashcard(); } };
window.flashcardPrev = function() { if (FLASHCARD.index > 0) { FLASHCARD.index--; FLASHCARD.showAnswer = false; refreshFlashcard(); } };

window.exitFlashcardMode = function() {
    FLASHCARD.active = false;
    var overlay = document.getElementById('flashcard-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        if (overlay._focusTrapHandler) {
            overlay.removeEventListener('keydown', overlay._focusTrapHandler);
        }
    }
    document.removeEventListener('keydown', handleFlashcardKey);

    // Restore aria-hidden
    var layout = document.querySelector('.layout');
    if (layout) layout.removeAttribute('aria-hidden');

    // Return focus to the element that triggered flashcard mode
    if (FLASHCARD.triggerElement && FLASHCARD.triggerElement.focus) {
        FLASHCARD.triggerElement.focus();
    }
};

function handleFlashcardKey(e) {
    if (!FLASHCARD.active) return;
    if (e.key === 'ArrowRight') flashcardNext();
    else if (e.key === 'ArrowLeft') flashcardPrev();
    else if (e.key === ' ') { 
        e.preventDefault(); 
        var it = FLASHCARD.items[FLASHCARD.index];
        if(it && !(it.type && it.type.toLowerCase().includes('comparison'))) {
            toggleFlashcardAnswer(); 
        }
    }
    else if (e.key === 'Escape') exitFlashcardMode();
}

// ═══════════════════ PRINT QUESTIONS ONLY ═══════════════════
window.printQuestionsOnly = function() {
    if (typeof window.getFilteredItems !== 'function') return;
    var items = window.getFilteredItems();
    
    var pageTitle = document.getElementById('page-title') ? document.getElementById('page-title').innerText : 'Print Sheet';

    var html = '<html><head><title>Print - ' + pageTitle + '</title>';
    html += '<link rel="stylesheet" href="../shared/styles.css">';
    html += '<style>@media print { @page { margin: 1cm; } body { background: #fff; color: #000; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; font-size: 11pt; line-height: 1.4; } .card { box-shadow: none; border: 1px solid #ddd; border-radius: 6px; break-inside: avoid; margin-bottom: 12px; padding: 12px; background: #fff !important; } .question-text { font-size: 12pt; font-weight: 600; margin-bottom: 8px; color: #000; } .question-text b { color: #333; } .answer-content { display: block !important; border-top: 1px solid #eee; padding-top: 8px; margin-top: 8px; font-size: 10.5pt; color: #222; background: #fff !important; } ul { margin: 4px 0; padding-left: 20px; } li { margin-bottom: 4px; } table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 10pt; } th, td { border: 1px solid #ccc; padding: 6px; text-align: left; } th { background-color: #f8f9fa !important; -webkit-print-color-adjust: exact; } .no-print { display: none !important; } h2 { text-align: center; font-size: 16pt; margin: 10px 0; border-bottom: 2px solid #000; padding-bottom: 5px; } hr { display: none; } } @media screen { body { background: #f0f2f5; font-family: system-ui; padding: 20px; } .card { background: #fff; border-radius: 8px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); } h2 { text-align: center; } }</style>';
    html += '</head><body>';
    html += '<h2>' + pageTitle + '</h2><hr/>';

    var num = 0;
    items.forEach(function(item) {
        num++;
        var isComparison = item.type && item.type.toLowerCase().includes('comparison');

        if (isComparison && item.headers && item.rows) {
            var excludeIdx = item.headers
                .map(function(h, i) { return h.trim().toUpperCase().includes('TEXTUAL EVIDENCE') ? i : -1; })
                .filter(function(i) { return i !== -1; });
            var printHeaders = item.headers.filter(function(_, i) { return !excludeIdx.includes(i); });
            var printRows = item.rows.map(function(row) { return row.filter(function(_, i) { return !excludeIdx.includes(i); }); });
            
            var thead = printHeaders.map(function(h) { return '<th>' + h + '</th>'; }).join('');
            var tbody = printRows.map(function(row) {
                return '<tr>' + row.map(function(cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>';
            }).join('');
            
            html += '<div class="card"><div class="question-text"><b>' + num + '.</b> ' + renderBasicMarkdown(item.title || item.question) + '</div>';
            html += '<div class="table-container"><table><thead><tr>' + thead + '</tr></thead><tbody>' + tbody + '</tbody></table></div></div>';
        } else if (isComparison && item.table_html) {
            html += '<div class="card"><div class="question-text"><b>' + num + '.</b> ' + renderBasicMarkdown(item.title || item.question) + '</div>';
            html += '<div class="table-container">' + item.table_html + '</div>';
            if (item.answer) html += '<div class="answer-content"><b>Explanation:</b> ' + item.answer + '</div>';
            html += '</div>';
        } else {
            var optionsHtml = '';
            if (item.type === 'mcq' && item.options) {
                optionsHtml = '<ul style="list-style:none; padding:0;">' + item.options.map(function(o) { return '<li>' + o + '</li>'; }).join('') + '</ul>';
            }
            html += '<div class="card"><div class="question-text"><b>' + num + '.</b> ' + renderBasicMarkdown(item.question || item.title) + '</div>';
            html += optionsHtml;
            html += '<div class="answer-content"><b>Answer:</b> ' + renderBasicMarkdown(item.answer || '') + '</div></div>';
        }
    });

    html += '<script>window.onload = function() { window.print(); };<\/script></body></html>';
    
    var printWin = window.open('', '_blank');
    printWin.document.write(html);
    printWin.document.close();
};
