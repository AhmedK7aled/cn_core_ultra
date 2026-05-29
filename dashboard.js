// dashboard.js

const parsedQuizData = [];

function parseQuizMarkdown() {
    const mcqRegex = /\*\*Question\s+\d+:\*\*\s*(.*?)\n\n((?:[A-D]\).*?\n)+)\n\*\*Correct Answer:\s*(.*?)\*\*\s*-\s*(.*)/g;
    let match;
    let idCounter = 0;
    while ((match = mcqRegex.exec(rawMcqMd)) !== null) {
        parsedQuizData.push({
            id: 'quiz-mcq-' + (idCounter++), type: 'mcq',
            question: match[1].trim(), options: match[2].trim().split('\n').map(o => o.trim()),
            answer: `Option ${match[3].trim()} - ${match[4].trim()}`, topic: 'Final Quiz MCQ'
        });
    }

    const tfRegex = /\*\*Question\s+\d+:\*\*\s*(.*?)\n\n\*\*Correct Answer:\s*(True|False)\*\*\s*-\s*(.*)/g;
    while ((match = tfRegex.exec(rawTfMd)) !== null) {
        parsedQuizData.push({
            id: 'quiz-tf-' + (idCounter++), type: 'tf',
            question: match[1].trim(), answer: `${match[2].trim()} - ${match[3].trim()}`, topic: 'Final Quiz TF'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    parseQuizMarkdown();
    renderDashboard();
});

window.updateLocalProgress = function() {
    renderDashboard();
};

function countTypes(items) {
    let mcq = 0, tf = 0, comp = 0, df = 0;
    items.forEach(q => {
        let t = window.normalizeType ? window.normalizeType(q.type) : (q.type || '').toLowerCase();
        if (t === 'mcq' || t.includes('mcq')) mcq++;
        else if (t === 'tf' || t.includes('tf') || t.includes('true')) tf++;
        else if (t === 'comparison' || t.includes('comparison')) comp++;
        else df++;
    });
    return { mcq, tf, comp, df };
}

function renderDashboard() {
    const container = document.getElementById('dashboard-container');
    if (!container) return;

    // Normalizing Q-Bank and Exams Data IDs
    const qbItems = questionBank.map(q => ({ ...q, id: 'qb-' + q.id }));
    const examItems = questionData.map((q, idx) => ({ ...q, id: 'exam-' + idx }));
    const exercisesItems = globalDatabase;
    const quizItems = parsedQuizData;

    const modules = [
        { title: '📚 Exercises', link: 'exercises/index.html', items: exercisesItems },
        { title: '🏦 Questions Bank', link: 'questions_bank/index.html', items: qbItems },
        { title: '📝 Exams', link: 'exams/index.html', items: examItems },
        { title: '🎓 Final Quiz', link: 'quiz/index.html', items: quizItems }
    ];

    let totalQs = 0;
    let totalComp = 0;

    let html = '';

    modules.forEach(mod => {
        const total = mod.items.length;
        const comp = mod.items.filter(q => STATE.completedQuestions.has(q.id)).length;
        totalQs += total;
        totalComp += comp;
        
        const pct = total > 0 ? Math.round((comp / total) * 100) : 0;
        const types = countTypes(mod.items);

        html += `
            <div class="dash-card">
                <h3>${mod.title}</h3>
                <div class="stat">${pct}%</div>
                <p>${comp} / ${total} questions completed</p>
                <div class="progress-bar" style="margin-top: 1rem;"><div class="progress-fill" style="width: ${pct}%"></div></div>
                
                <div class="dash-type-breakdown">
                    <div class="type-pill"><span>◉ MCQ</span> <strong>${types.mcq}</strong></div>
                    <div class="type-pill"><span>✓✗ T/F</span> <strong>${types.tf}</strong></div>
                    <div class="type-pill"><span>⇄ Comp</span> <strong>${types.comp}</strong></div>
                    <div class="type-pill"><span>📖 Def</span> <strong>${types.df}</strong></div>
                </div>

                <a href="${mod.link}" class="btn-jump">Open Module</a>
            </div>
        `;
    });

    container.innerHTML = html;

    // Update global progress sidebar
    const globalPct = totalQs > 0 ? Math.round((totalComp / totalQs) * 100) : 0;
    document.getElementById('progress-fill').style.width = globalPct + '%';
    document.getElementById('progress-text').innerText = `${totalComp} / ${totalQs} (${globalPct}%)`;
}
