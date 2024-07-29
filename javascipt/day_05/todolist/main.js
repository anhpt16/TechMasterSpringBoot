const works = [
    {id: 1, name: "Xem phim", status: false},
    {id: 2, name: "Chơi game", status: false},
    {id: 3, name: "Làm bài tập", status: false}
]
const listWork = document.querySelector("ul");

const renderWorks = (works) => {
    if (works.length === 0) {
        listWork.innerHTML = "<li>Danh sách trống</li>";
        return;
    }
    let html = "";
    works.forEach(work => {
        html += `
            <li>
                <input type="checkbox" ${work.status ? 'checked' : ''} onclick="toggleStatus(${work.id})">
                <span class="${work.status ? 'active' : ''}">${work.name}</span>
                <button onclick="editWork(${work.id})">Edit</button>
                <button onclick="deleteWork(${work.id})">Delete</button>
            </li>
        `
        listWork.innerHTML = html;
    })
}

let idGlobal = 3;
const btnAdd = document.getElementById("btn-add");
const inputTodoEl = document.getElementById("input-todo");
btnAdd.addEventListener('click', () => {
    let inputValue = inputTodoEl.value.trim();
    if (inputValue === "") {
        alert("Công việc không được để trống");
        return;
    }
    idGlobal++;
    let newWork = {
        id: idGlobal,
        name: inputValue,
        status: false
    }
    works.push(newWork);
    renderWorks(works);
    inputTodoEl.value = "";
    console.log(works);

})

const deleteWork = (id) => {
    const isDelete = confirm("Are you sure ?");
    if (!isDelete) return;
    
    const index = works.findIndex(work => work.id === id);
    works.splice(index, 1);
    renderWorks(works);
}

const editWork = (id) => {
    const index = works.findIndex(work => work.id === id);
    if (index !== -1) {
        const newTitle = prompt("Enter the new title:", works[index].name);
        if (newTitle && newTitle.trim() !== "") {
            works[index].name = newTitle.trim();
            renderWorks(works);
        }
    }
}

const toggleStatus = (id) => {
    const index = works.findIndex(work => work.id === id);
    if (index !== -1) {
        works[index].status = !works[index].status;
        renderWorks(works);
    }
}



renderWorks(works);