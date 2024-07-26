const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const counterEl = document.getElementById("counter");



btnIncrease.addEventListener('click', () => {
    let counterValue = Number(counterEl.innerText);
    if (counterValue + 1 === 0) {
        counterEl.style.color = "#333333";
    }
    else if (counterValue + 1 > 0) {
        counterEl.style.color = "green";
    }
    else {
        counterEl.style.color = "red";
    }
    counterEl.innerText = counterValue + 1;

})

btnDecrease.addEventListener('click', () => {
    let counterValue = Number(counterEl.innerText);
    if (counterValue - 1 === 0) {
        counterEl.style.color = "#333333";
    }
    else if (counterValue - 1 > 0) {
        counterEl.style.color = "green";
    }
    else {
        counterEl.style.color = "red";
    }
    counterEl.innerText = counterValue - 1;

})

