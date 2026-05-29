
// Exercises Logic
let currentLectureId = null;
let currentPage = 1;
const itemsPerPage = 10;

window.resetPagination = function() { currentPage = 1; };

document.addEventListener('DOMContentLoaded', () => {
    updateFiltersUI();
    renderPage();
});

window.getFilteredItems = function() {
    let items = currentLectureId ? globalDatabase.filter(q => q.lectureId === currentLectureId) : globalDatabase;
    if (STATE.filters.initialized) {
        items = items.filter(q => {
            if (STATE.filters.types.size > 0 && !STATE.filters.types.has(q.type)) return false;
            if (q.topic && STATE.filters.topics.size > 0 && !STATE.filters.topics.has(q.topic)) return false;
            return true;
        });
    }
    if (STATE.filters.search) {
        const searchStr = STATE.filters.search.toLowerCase();
        items = items.filter(q => {
            const s = (q.question || q.title || '').toLowerCase() + ' ' + (q.answer || '').toLowerCase() + ' ' + (q.topic || '').toLowerCase();
            return s.includes(searchStr);
        });
    }
    if (STATE.showIncompleteOnly) items = items.filter(q => !STATE.completedQuestions.has(q.id));
    return items;
}

window.renderCards = function() {
    if(!currentLectureId) { renderPage(); return; }
    const items = getFilteredItems();
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    var statsEl = document.getElementById('results-stats');
    if (statsEl) statsEl.innerText = 'Showing ' + paginatedItems.length + ' of ' + items.length + ' results' + (STATE.showIncompleteOnly ? ' (incomplete only)' : '');

    var container = document.getElementById('exercises-content');
    var html = '';
    var typesOrder = ['definition', 'mcq', 'tf', 'comparison'];
    typesOrder.forEach(function(type) {
        var typeItems = paginatedItems.filter(function(i) {
            let t = window.normalizeType ? window.normalizeType(i.type) : (i.type || '').toLowerCase();
            return t === type || t.includes(type);
        });
        if (typeItems.length === 0) return;
        html += '<div class="section-header"><h3>' + (typeLabels[type] || type) + '</h3></div><div class="cards-container-grid">';
        typeItems.forEach(function(item) { html += generateCardHtml(item); });
        html += '</div>';
    });
    if (items.length === 0) html = '<div style="text-align:center; padding: 3rem; color: var(--text-muted);">' + (STATE.showIncompleteOnly ? '🎉 All questions completed!' : 'No results found.') + '</div>';
    container.innerHTML = html;

    const pagContainer = document.getElementById('exercises-pagination');
    if (pagContainer) {
        pagContainer.innerHTML = '';
        for(let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `btn-page ${i === currentPage ? 'active' : ''}`;
            btn.innerText = i;
            btn.onclick = () => { currentPage = i; renderCards(); };
            pagContainer.appendChild(btn);
        }
    }

    updateLocalProgress();
};

window.renderPage = function() {
    const pageTitle = document.getElementById('page-title');
    if (currentLectureId) {
        pageTitle.innerText = "Lecture " + currentLectureId.replace('lecture', '');
        document.getElementById('lecture-tiles').style.display = 'none';
        document.getElementById('exercises-content').style.display = 'flex';
        var pag = document.getElementById('exercises-pagination');
        if (pag) pag.style.display = 'flex';
        document.getElementById('exercises-back-btn').style.display = 'inline-block';
        renderCards();
    } else {
        pageTitle.innerText = "Exercises Dashboard";
        document.getElementById('lecture-tiles').style.display = 'grid';
        document.getElementById('exercises-content').style.display = 'none';
        var pag = document.getElementById('exercises-pagination');
        if (pag) pag.style.display = 'none';
        document.getElementById('exercises-back-btn').style.display = 'none';
        var container = document.getElementById('lecture-tiles');
        container.innerHTML = lectures.map(function(l) {
            var total = globalDatabase.filter(function(q) { return q.lectureId === l.id; }).length;
            var completed = globalDatabase.filter(function(q) { return q.lectureId === l.id && STATE.completedQuestions.has(q.id); }).length;
            var pct = total > 0 ? Math.round((completed / total) * 100) : 0;
            return '<div class="lecture-tile" style="cursor:pointer;" onclick="openLecture(\'' + l.id + '\')"><h4>' + l.title + '</h4><div class="progress-text">' + completed + ' / ' + total + ' completed (' + pct + '%)</div><div class="progress-bar" style="margin-top: 10px; height: 4px;"><div class="progress-fill" style="width: ' + pct + '%"></div></div></div>';
        }).join('');
        document.getElementById('results-stats').innerText = '';
    }
    updateLocalProgress();
};

window.openLecture = function(id) { currentLectureId = id; renderPage(); };
window.showExerciseIndex = function() { currentLectureId = null; renderPage(); };

window.updateLocalProgress = function() {
    var completed = globalDatabase.filter(q => STATE.completedQuestions.has(q.id)).length;
    var pct = globalDatabase.length > 0 ? Math.round((completed / globalDatabase.length) * 100) : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').innerText = completed + ' / ' + globalDatabase.length + ' (' + pct + '%)';
};

function updateFiltersUI() {
    let types = [...new Set(globalDatabase.map(i => i.type))];
    let topics = [...new Set(globalDatabase.map(i => i.topic || 'General'))].filter(Boolean);
    STATE.filters.types = new Set(types);
    STATE.filters.topics = new Set(topics);
    STATE.filters.initialized = true;
    document.getElementById('sidebar-filters-container').innerHTML = `
        <div class="filters-section"><h3>Question Types</h3><div class="checkbox-group">
        ${types.map(t => `<label class="checkbox-label"><input type="checkbox" value="${t}" checked onchange="handleTypeFilter(this)">${typeLabels[t] || t}</label>`).join('')}
        </div></div>
        <div class="filters-section" style="margin-top: 1rem;"><h3>Topics</h3><div class="checkbox-group topic-scroll">
        ${topics.map(t => `<label class="checkbox-label"><input type="checkbox" value="${t}" checked onchange="handleTopicFilter(this)">${t}</label>`).join('')}
        </div></div>`;
}
