// Grading Systems Configuration
const gradingSystems = {
    sciences: {
        name: 'Sciences',
        subjects: ['Khmer', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History0', 'English'],
        maxScores: {
            Khmer: 75,
            Mathematics: 125,
            Physics: 75,
            Chemistry: 75,
            Biology: 75,
            History0: 50,
            English: 50
        },
        subjectGrading: {
            Khmer: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Mathematics: [
                { grade: 'A', min: 112, max: 125 },
                { grade: 'B', min: 100, max: 111 },
                { grade: 'C', min: 87, max: 99 },
                { grade: 'D', min: 75, max: 86 },
                { grade: 'E', min: 62, max: 74 },
                { grade: 'F', min: 0, max: 61 }
            ],
            Physics: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Chemistry: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Biology: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            History0: [
                { grade: 'A', min: 45, max: 50 },
                { grade: 'B', min: 40, max: 44 },
                { grade: 'C', min: 35, max: 39 },
                { grade: 'D', min: 30, max: 34 },
                { grade: 'E', min: 25, max: 29 },
                { grade: 'F', min: 0, max: 24 }
            ],
            English: [
                { grade: 'A', min: 45, max: 50 },
                { grade: 'B', min: 40, max: 44 },
                { grade: 'C', min: 35, max: 39 },
                { grade: 'D', min: 30, max: 34 },
                { grade: 'E', min: 25, max: 29 },
                { grade: 'F', min: 0, max: 24 }
            ],
        },

        scale: [
            { grade: 'A', min: 427, max: 500 },
            { grade: 'B', min: 380, max: 426 },
            { grade: 'C', min: 332, max: 379 },
            { grade: 'D', min: 286, max: 331 },
            { grade: 'E', min: 237, max: 285 },
            { grade: 'F', min: 0, max: 236 }
        ]
    },
    socials: {
        name: 'Socials',
        subjects: ['Khmer', 'Mathematics', 'Geographic', 'History', 'Moral', 'Earth', 'English'],
        maxScores: {
            Khmer: 125,
            Mathematics: 75,
            Geographic: 75,
            History: 75,
            Moral: 75,
            Earth: 50,
            English: 50
        },
        subjectGrading: {
            Khmer: [
                { grade: 'A', min: 112, max: 125 },
                { grade: 'B', min: 100, max: 111 },
                { grade: 'C', min: 87, max: 99 },
                { grade: 'D', min: 75, max: 86 },
                { grade: 'E', min: 62, max: 74 },
                { grade: 'F', min: 0, max: 61 }
            ],
            Mathematics: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Geographic: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            History: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Moral: [
                { grade: 'A', min: 67, max: 75 },
                { grade: 'B', min: 60, max: 66 },
                { grade: 'C', min: 52, max: 59 },
                { grade: 'D', min: 45, max: 51 },
                { grade: 'E', min: 37, max: 44 },
                { grade: 'F', min: 0, max: 36 }
            ],
            Earth: [
                { grade: 'A', min: 45, max: 50 },
                { grade: 'B', min: 40, max: 44 },
                { grade: 'C', min: 35, max: 39 },
                { grade: 'D', min: 30, max: 34 },
                { grade: 'E', min: 25, max: 29 },
                { grade: 'F', min: 0, max: 24 }
            ],
            English: [
                { grade: 'A', min: 45, max: 50 },
                { grade: 'B', min: 40, max: 44 },
                { grade: 'C', min: 35, max: 39 },
                { grade: 'D', min: 30, max: 34 },
                { grade: 'E', min: 25, max: 29 },
                { grade: 'F', min: 0, max: 24 }
            ],
        },
        
        scale: [
            { grade: 'A', min: 427, max: 500 },
            { grade: 'B', min: 380, max: 226 },
            { grade: 'C', min: 332, max: 379 },
            { grade: 'D', min: 286, max: 331 },
            { grade: 'E', min: 237, max: 285 },
            { grade: 'F', min: 0, max: 236 }
        ]
    }
};

const subjectTranslations = {
    Mathematics: 'គណិតវិទ្យា',
    Khmer: 'អក្សរសាស្ត្រខ្មែរ',
    Physics: 'រូបវិទ្យា',
    Chemistry: 'គីមីវិទ្យា',
    Biology: 'ជីវៈវិទ្យា',
    English: 'ភាសាបរទេស',
    History0: 'ប្រវត្តិវិទ្យា (មុខវិទ្យាជម្រើស)',
    History: 'ប្រវត្តិវិទ្យា',
    Geographic: 'ភូមិវិទ្យា',
    Earth: 'ផែនដីវិទ្យា (មុខវិទ្យាជម្រើស)',
    Moral: 'សីលធម៍'
    // Add more as needed
};









// App State
let currentSystem = 'sciences';
let scores = {};

// DOM
const subjectGrid = document.getElementById('subjectGrid');
const totalScoreElement = document.getElementById('totalScore');
const finalGradeElement = document.getElementById('finalGrade');
const statusElement = document.getElementById('status');
const gradingScaleElement = document.getElementById('gradingScale');

// Helpers
function getSubjects() {
    return gradingSystems[currentSystem].subjects || [];
}

function getTotalMaxScore() {
    const maxScores = gradingSystems[currentSystem].maxScores;
    return getSubjects().reduce((sum, subject) => sum + (maxScores[subject] || 100), 0);
}

// INIT
function init() {
    createSubjectCards();
    renderGradingScale();
    setupSystemToggleListeners();
    calculateResults();
}

// Create Subject Cards
function createSubjectCards() {
    subjectGrid.innerHTML = '';
    const maxScores = gradingSystems[currentSystem].maxScores;

    getSubjects().forEach((subject, index) => {
        const maxScore = maxScores[subject] || 100;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <div class="subject-label">${subjectTranslations[subject] || subject}</div>
            <div class="input-group">
                <input 
                    type="number" 
                    class="score-input" 
                    id="subject-${index}"
                    min="0" 
                    max="${maxScore}" 
                    placeholder="0–${maxScore}"
                    data-subject="${subject}"
                >
                <div class="grade-display empty" id="grade-${index}">-</div>
            </div>
        `;
        subjectGrid.appendChild(card);
    });

    setupScoreInputs(); // ✅ make sure this is here
}


// Input Listeners
function setupScoreInputs() {
    document.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('input', function () {
            const subject = this.getAttribute('data-subject');
            const maxScore = gradingSystems[currentSystem].maxScores[subject] || 100;
            let score = parseFloat(this.value) || 0;

            // Clamp
            if (score < 0) score = 0;
            if (score > maxScore) score = maxScore;
            this.value = score;

            updateSubjectScore(subject, score);
        });
    });
}

// Toggle Listeners
function setupSystemToggleListeners() {
    document.querySelectorAll('.toggle-option').forEach(option => {
        option.addEventListener('click', function () {
            const system = this.getAttribute('data-system');
            switchGradingSystem(system);
        });
    });
}

// Switch system
function switchGradingSystem(system) {
    currentSystem = system;

    document.querySelectorAll('.toggle-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`[data-system="${system}"]`).classList.add('active');

    // Reset everything
    scores = {};
    subjectGrid.innerHTML = '';
    gradingScaleElement.innerHTML = '';

    createSubjectCards();
    renderGradingScale();
    calculateResults();           
}


// Update score
function updateSubjectScore(subject, score) {
    if (!getSubjects().includes(subject)) return;

    scores[subject] = score;

    const index = getSubjects().indexOf(subject);
    const gradeElement = document.getElementById(`grade-${index}`);
    const grade = calculateIndividualGrade(subject, score);

    gradeElement.textContent = grade;
    gradeElement.className = `grade-display ${grade === '-' ? 'empty' : ''}`;

    calculateResults();
}



// Individual grade
function calculateIndividualGrade(subject, score) {
    if (!score || score === 0) return '-';

    const subjectGrading = gradingSystems[currentSystem].subjectGrading || {};
    const gradingScale = subjectGrading[subject];

    if (!gradingScale) return '-';

    for (let gradeInfo of gradingScale) {
        if (score >= gradeInfo.min && score <= gradeInfo.max) {
            return gradeInfo.grade;
        }
    }

    return 'F';
}


// Final grade
function calculateFinalGrade(totalScore) {
    const scale = gradingSystems[currentSystem].scale;
    for (let gradeInfo of scale) {
        if (totalScore >= gradeInfo.min && totalScore <= gradeInfo.max) {
            return gradeInfo.grade;
        }
    }
    return 'F';
}

//why cant switch
function renderGradingScale() {
    const scale = gradingSystems[currentSystem].scale;
    gradingScaleElement.innerHTML = '';

    scale.forEach(gradeInfo => {
        const item = document.createElement('div');
        item.className = 'scale-item';
        item.innerHTML = `
            <div class="scale-grade">${gradeInfo.grade}</div>
            <div class="scale-range">${gradeInfo.min}–${gradeInfo.max}</div>
        `;
        gradingScaleElement.appendChild(item);
    });
}





// Results
function calculateResults() {
    const maxScores = gradingSystems[currentSystem].maxScores;
    let total = 0;
    let maxTotal = 0;

    getSubjects().forEach(subject => {
        total += scores[subject] || 0;
        maxTotal += maxScores[subject] || 100;
    });

    const adjustedTotal = Math.max(0, total - 25);
    const grade = calculateFinalGrade(adjustedTotal);
    const status = grade !== 'F' ? 'ជាប់' : 'ធ្លាក់';

    // totalScoreElement.textContent = `${total} / ${maxTotal}`;
    totalScoreElement.textContent = `${adjustedTotal}`;
    finalGradeElement.textContent = grade;
    statusElement.textContent = status;
    statusElement.className = `result-value status ${status.toLowerCase()}`;
}


// Start
document.addEventListener('DOMContentLoaded', init);
