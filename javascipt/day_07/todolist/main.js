let works = [];
const API_URL = "http://localhost:8000/todos";
const listWork = document.getElementById("list-work");
const btnSearch = document.getElementById("btn-search");
const inputSearchEl = document.getElementById("input-search");
const listSearch = document.getElementById("list-work-search");

async function getApi() {
    try {
        let res = await axios.get(API_URL);
        console.log(res);
        works = res.data;
    } catch (error) {
        console.log(error);
    }
    renderWorks(works);
}


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
btnAdd.addEventListener('click', async () => {
    let inputValue = inputTodoEl.value.trim();
    if (inputValue === "") {
        alert("Công việc không được để trống");
        return;
    }
    idGlobal++;
    let newWork = {
        name: inputValue,
        status: false
    }
    try {
        let res = await axios.post(API_URL, newWork);
        getApi();
        renderWorks(works);
    } catch (error) {
        console.log(error);
    }
    inputTodoEl.value = "";
    console.log(works);
})

const deleteWork = async (id) => {
    const isDelete = confirm("Are you sure ?");
    if (!isDelete) return;
    try {
        await axios.delete(`${API_URL}/${id}`);
        const index = works.findIndex(work => work.id === id);
        works.splice(index, 1);
        renderWorks(works);
    } catch (error) {
        console.log(error)
    }
}

const editWork = async (id) => {
    const index = works.findIndex(work => work.id === id);
    if (index !== -1) {
        const newTitle = prompt("Enter the new title:", works[index].name);
        if (newTitle && newTitle.trim() !== "") {
            const data = {
                name: newTitle,
                status: index.status
            }
            try {
                await axios.put(`${API_URL}/${id}`, data);
            } catch (error) {
                console.log(error);
            }
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

btnSearch.addEventListener('click', () => {
    let keyword = inputSearchEl.value;
    searchWork(keyword);
    inputSearchEl.value = "";
})

async function searchWork(keyword) {
    let res = await axios.get(API_URL);
    let works = res.data.filter(work => work.name.includes(keyword));
    renderSearchWorks(works);
}

const renderSearchWorks = (works) => {
    if (works.length === 0) {
        listSearch.innerHTML = "<li>Không tìm thấy</li>";
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
        listSearch.innerHTML = html;
    })
}

getApi();
console.log(works);
renderWorks(works);
