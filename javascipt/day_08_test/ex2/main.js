const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quizContainer = document.querySelector(".quiz-container");
const btnRandom = document.getElementById("btn");

function init(quizes) {
    let html = '';
    quizes.forEach(quiz => {
        html += `
            <div class="quiz-item">
            <h3>Câu ${quiz.id} : ${quiz.question}</h3>
            <div class="quiz-answer">
        `
        quiz.answers.forEach(answer => {
            html += `
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${answer}</label>
                </div>
            `
        })
        html += `
                </div>
            </div>
        `
    })
    quizContainer.innerHTML = html;
}

btnRandom.addEventListener('click', () => {
    quizes.forEach(quiz => {
        const quizAnswers = document.querySelectorAll(`input[name="${quiz.id}"]`);
        const randomIndex = Math.floor(Math.random() * quizAnswers.length);
        quizAnswers.forEach((answer, index) => {
            if(index === randomIndex) {
                answer.checked = true;
            }
        })
    })
})

init(quizes);