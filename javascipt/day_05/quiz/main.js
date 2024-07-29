let listQuiz = [
    {
        id: 1,
        question: "Đâu là kiểu dữ liệu nguyên thủy trong Java ?",
        answers: ["String","boolean", "ByteArray", "BigInteger"],
        true: 1
    },
    {
        id: 2,
        question: "Từ khóa nào được sử dụng để kế thừa một lớp trong Java ?",
        answers: ["extends", "implements", "inherit", "super"],
        true: 0
    },
    {
        id: 3,
        question: "Phương thức nào được gọi khi một đối tượng của lớp bị hủy ?",
        answers: ["finalize()", "dispose()", "delete()", "destroy()"],
        true: 0
    },
    {
        id: 4,
        question: "Từ khóa nào được sử dụng để ngăn chặn một lớp được kế thừa ?",
        answers: ["static", "final", "private", "sealed"],
        true: 1
    },
    {
        id: 5,
        question: "Phương thức nào được sử dụng để bắt đầu một luồng trong Java ?",
        answers: ["run()", "execute()", "start()", "begin()"],
        true: 2
    }
]
let glTrue = 0;
let glCurrentQuestion = 0; 

const renderQuestion = () => {
    let html = ``;
    if (glCurrentQuestion === listQuiz.length) {
        html += `
            <h1>Quiz Application</h1>
            <div>Kết quả: ${glTrue}/${listQuiz.length} </div>
        `;
        document.body.innerHTML = html;
        return;
    }
    html = `
        <h1>Quiz Application</h1>
        <div id="question">
        <p>Câu ${glCurrentQuestion + 1}: ${listQuiz[glCurrentQuestion].question}</p>
        </div>
        <div class="choices">
    `
    for(let i = 0; i < listQuiz[glCurrentQuestion].answers.length; i++) {
        html += `
            <div class="choice-item">
                <input type="radio" name="choice" id="${i}" value="${i}">
                <label for="${i}">${listQuiz[glCurrentQuestion].answers[i]}</label>
            </div>
        `;
    }
    html += `
        </div>
        <div>
            <button id="btn-next" class="${glCurrentQuestion < listQuiz.length - 1 ? '' : 'hide'}" onclick="next(${glCurrentQuestion})">Câu tiếp theo</button>
            <button id="btn-finish" class="${glCurrentQuestion === listQuiz.length - 1 ? '' : 'hide'}" onclick="next(${glCurrentQuestion})">Kết thúc</button>
        </div>
    `;
    document.body.innerHTML = html;

}
renderQuestion();
const btnNext = document.getElementById("btn-next");
const btnEnd = document.getElementById("btn-finish");
const next = (id) => {
    const radios = document.getElementsByName("choice");
    // Check if no answer
    let isChecked = false;
    for(radio of radios) {
        if (radio.checked) {
            isChecked = true;
            // Check Answer 
            if(parseInt(radio.value) === listQuiz[id].true) {
                glTrue++;
            }
            if (glCurrentQuestion <= listQuiz.length) {
                glCurrentQuestion++;
                // Check if final question
                if (glCurrentQuestion === listQuiz.length - 1) {
                    console.log(btnNext);
                    console.log(btnEnd);
                    btnNext.classList.add("hide");
                    btnEnd.classList.remove("hide");
                }
                console.log(glCurrentQuestion);
                
            }
            console.log(glTrue);
            renderQuestion();
            return;
        }
    }
    if (isChecked === false) {
        alert("Bạn chưa chọn đáp án !");
    }
}
