
// Exams Logic
const examItems = questionData.map((q, idx) => ({ 
    id: 'exam-' + idx, 
    type: window.normalizeType ? window.normalizeType(q.type) : (q.type || '').toLowerCase(), 
    topic: q.exam, 
    question: q.question, 
    options: q.options, 
    answer: q.answer || q.explanation, 
    table_html: q.table_html 
}));
let currentPage = 1;
const itemsPerPage = 10;

window.resetPagination = function() { currentPage = 1; };

document.addEventListener('DOMContentLoaded', () => { updateFiltersUI(); renderCards(); });

window.getFilteredItems = function() {
    let items = examItems;
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
};

window.renderCards = function() {
    const items = getFilteredItems();
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    var statsEl = document.getElementById('results-stats');
    if (statsEl) statsEl.innerText = 'Showing ' + paginatedItems.length + ' of ' + items.length + ' results';

    var container = document.getElementById('exams-content');
    var html = '<div class="cards-container-grid">';
    paginatedItems.forEach((item, idx) => {
        const numberedItem = {...item, question: `<span style="color:var(--primary); font-weight:bold;">#${startIndex + idx + 1}</span> ${item.question}`};
        html += generateCardHtml(numberedItem);
    });
    html += '</div>';
    if (items.length === 0) html = '<div style="text-align:center; padding: 3rem; color: var(--text-muted);">' + (STATE.showIncompleteOnly ? '🎉 All questions completed!' : 'No results found.') + '</div>';
    container.innerHTML = html;

    const pagContainer = document.getElementById('exams-pagination');
    pagContainer.innerHTML = '';
    for(let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `btn-page ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => { currentPage = i; renderCards(); };
        pagContainer.appendChild(btn);
    }
    updateLocalProgress();
};

window.updateLocalProgress = function() {
    var completed = examItems.filter(q => STATE.completedQuestions.has(q.id)).length;
    var pct = examItems.length > 0 ? Math.round((completed / examItems.length) * 100) : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').innerText = completed + ' / ' + examItems.length + ' (' + pct + '%)';
};

function updateFiltersUI() {
    let types = [...new Set(examItems.map(i => i.type))];
    let topics = [...new Set(examItems.map(i => i.topic || 'General'))].filter(Boolean);
    STATE.filters.types = new Set(types);
    STATE.filters.topics = new Set(topics);
    STATE.filters.initialized = true;
    document.getElementById('sidebar-filters-container').innerHTML = `
        <div class="filters-section"><h3>Question Types</h3><div class="checkbox-group">
        ${types.map(t => `<label class="checkbox-label"><input type="checkbox" value="${t}" checked onchange="handleTypeFilter(this)">${typeLabels[t] || t}</label>`).join('')}
        </div></div>
        <div class="filters-section" style="margin-top: 1rem;"><h3>Exams</h3><div class="checkbox-group topic-scroll">
        ${topics.map(t => `<label class="checkbox-label"><input type="checkbox" value="${t}" checked onchange="handleTopicFilter(this)">${t}</label>`).join('')}
        </div></div>`;
}
