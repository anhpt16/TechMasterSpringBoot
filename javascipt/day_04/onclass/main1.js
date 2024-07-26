const pEl = document.getElementById('text');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const users = [
    {id: 1, name: "Nhật Anh"},
    {id: 2, name: "Hoàng"},
    {id: 3, name: "Bùi Văn Hiên"},
    {id: 4, name: "Ngô Văn Tuấn"},
    {id: 5, name: "Thước"},
]
const inputEl = document.getElementById('input-name');
const btnShow = document.getElementById('showAll');
const listUserEl = document.getElementById('listUser');

const changeContent = () => {
    let arr = [
        "While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful",
        "A few examples of how some people use this generator are listed in the following paragraphs",
        "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day",
        "The writer has no idea what topic the random paragraph will be about when it appears"
    ]
    let result = Math.floor(Math.random() * arr.length);
    pEl.innerText = arr[result];
}

const changeColor = () => {
    // Tạo giá trị màu ngẫu nhiên cho Red, Green, và Blue (0 đến 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Chuyển các giá trị số thành chuỗi HEX và đảm bảo mỗi cặp số có hai ký tự
    const hex = `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    pEl.style.color = hex;
}

const changeBackground = () => {
    // Tạo giá trị màu ngẫu nhiên cho Red, Green, và Blue (0 đến 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Tạo chuỗi RGB từ các giá trị màu
    const rgb = `rgb(${r}, ${g}, ${b})`;
    pEl.style.backgroundColor = rgb;
}

const renderUsers = (users) => {
    let html = "";
    users.forEach((user) => {
        html += `<li>${user.id} - ${user.name}</li>`;
    })
    listUserEl.innerHTML = html;
}
renderUsers(users);

inputEl.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const keyword = e.target.value;
        const result = users.filter((user) =>
             user.name.toLowerCase().includes(keyword.toLowerCase()));
        renderUsers(result);
    }
    
})

btnShow.addEventListener('click',() => {
    renderUsers(users);
})
const topEl = document.getElementById("back-to-top")
window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 300) {
        topEl.classList.remove("hide");
    }
    else {
        topEl.classList.add('hide');
    }
});

topEl.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})