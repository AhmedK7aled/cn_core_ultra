
// Quiz Logic (Markdown Parser)
const parsedQuizData = [];

function parseQuizMarkdown() {
    parsedQuizData.length = 0; // Clear array
    let idCounter = 0;

    // Parse MCQs
    if (typeof rawMcqMd !== 'undefined' && rawMcqMd) {
        const mcqBlocks = rawMcqMd.split('---');
        mcqBlocks.forEach(block => {
            block = block.trim();
            if (!block) return;
            
            // Extract Question
            const qMatch = block.match(/\*\*Question\s+\d+:\s*(.*?)\*\*/);
            if (!qMatch) return;
            const question = qMatch[1].trim();
            
            // Extract Options
            const options = [];
            const optRegex = /([A-D]\)\s+[\s\S]*?)(?=\n[A-D]\)|\n\n\*\*Correct Answer:|$)/g;
            let oMatch;
            while ((oMatch = optRegex.exec(block)) !== null) {
                options.push(oMatch[1].trim());
            }
            
            // Extract Answer
            const ansMatch = block.match(/\*\*Correct Answer:\s*([A-D])\*\*\s*[-–—\u2013]?\s*([\s\S]*)/);
            let answerStr = '';
            if (ansMatch) {
                answerStr = `Option ${ansMatch[1]} - ${ansMatch[2].trim()}`;
            }
            
            parsedQuizData.push({
                id: 'quiz-mcq-' + (idCounter++),
                type: 'mcq',
                question: question,
                options: options,
                answer: answerStr,
                topic: 'Final Quiz MCQ'
            });
        });
    }

    // Parse True/False
    if (typeof rawTfMd !== 'undefined' && rawTfMd) {
        const tfBlocks = rawTfMd.split(/## \*\*\d+\\\.\s+/);
        tfBlocks.forEach(block => {
            block = block.trim();
            if (!block || block.startsWith('# ')) return; // Skip headers
            
            // The question is the first line up to **
            const qMatch = block.match(/^(.*?)\*\*/);
            if (!qMatch) return;
            const question = qMatch[1].trim();
            
            const ansMatch = block.match(/\*\*Answer:\*\*\s*(True|False)/i);
            const tfVal = ansMatch ? (ansMatch[1].toLowerCase() === 'true' ? 'True' : 'False') : 'True';
            
            const correctionMatch = block.match(/\*\*Correction:\*\*\s*([\s\S]*)/);
            const explanation = correctionMatch ? correctionMatch[1].trim() : '';
            
            parsedQuizData.push({
                id: 'quiz-tf-' + (idCounter++),
                type: 'tf',
                question: question,
                answer: `${tfVal}${explanation ? ' - ' + explanation : ''}`,
                topic: 'Final Quiz TF'
            });
        });
    }
    
    if (parsedQuizData.length === 0) {
        if (typeof window.showToast === 'function') {
            window.showToast('Warning: No quiz questions were parsed. Check markdown format.', { error: true, duration: 6000 });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    parseQuizMarkdown();
    document.getElementById('sidebar-filters-container').innerHTML = ''; // No filters needed for final quiz
    renderCards();
});

window.getFilteredItems = function() {
    let items = parsedQuizData;
    if (STATE.filters.search) {
        const searchStr = STATE.filters.search.toLowerCase();
        items = items.filter(q => {
            const s = (q.question || q.title || '').toLowerCase() + ' ' + (q.answer || '').toLowerCase() + ' ' + (q.topic || '').toLowerCase();
            return s.includes(searchStr);
        });
    }
    if (STATE.showIncompleteOnly) items = items.filter(q => !STATE.completedQuestions.has(q.id));
    return items;
};

window.renderCards = function() {
    const items = getFilteredItems();
    var statsEl = document.getElementById('results-stats');
    if (statsEl) statsEl.innerText = 'Showing ' + items.length + ' results';

    var container = document.getElementById('quiz-content');
    var html = '';
    ['mcq', 'tf'].forEach(type => {
        const typeItems = items.filter(i => i.type === type);
        if (typeItems.length === 0) return;
        html += '<div class="section-header"><h3>' + (type === 'mcq' ? 'Multiple Choice Questions' : 'True/False') + '</h3></div>';
        typeItems.forEach((item, idx) => {
            const numberedItem = {...item, question: `**Q${idx+1}:** ` + item.question.replace(/^\*\*Question \d+:\*\*\s*/, '')};
            html += generateCardHtml(numberedItem);
        });
    });
    if (items.length === 0) html = '<div style="text-align:center; padding: 3rem; color: var(--text-muted);">' + (STATE.showIncompleteOnly ? '🎉 All questions completed!' : 'No results found.') + '</div>';
    container.innerHTML = html;
    updateLocalProgress();
};

window.updateLocalProgress = function() {
    var completed = parsedQuizData.filter(q => STATE.completedQuestions.has(q.id)).length;
    var pct = parsedQuizData.length > 0 ? Math.round((completed / parsedQuizData.length) * 100) : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').innerText = completed + ' / ' + parsedQuizData.length + ' (' + pct + '%)';
};
