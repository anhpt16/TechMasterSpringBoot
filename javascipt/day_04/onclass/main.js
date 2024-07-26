const sayHello = () => {
    alert('Hello');
}
const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    alert('Hello2');
}
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    alert("Hello3");
});

const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
let time = 10;
let interval;

const decrease = () => {
    interval = setInterval(() => {
        time--;
        timeEl.innerText = `${time}s`;
        if (time === 0) {
            messageEl.innerText = "Hết Giờ";
            clearInterval(interval);
        }
    }, 1000);
}

const pause = () => {
    setTimeout(() => {
        clearInterval(interval);
    }, 0);
}

document.addEventListener("click", (e) => {
    const existCircle = document.querySelector(".circle");
    // if (existCircle) {
    //     existCircle.parentElement.removeChild(existCircle);
    // }
    if (existCircle) {
        existCircle.style.left = `${e.offsetX - 50}px`;
        existCircle.style.top = `${e.offsetY - 50}px`;
    }
    else {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${e.offsetX - 50}px`;
        circle.style.top = `${e.offsetY - 50}px`;
        document.body.appendChild(circle);
    }
    
})
