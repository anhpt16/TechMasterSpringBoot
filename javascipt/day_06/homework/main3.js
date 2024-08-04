const breedListEl = document.getElementById('breed-list');
const btnShow = document.getElementById('btn-show');
const subBreedEl = document.getElementById('sub-breed');
const imageEl = document.getElementById('image');

async function getBreedList() {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    renderBreed(res.data.message);
}
function renderBreed(breeds) {
    let keys = Object.keys(breeds);
    let html = ``;
    keys.forEach(key => {
        html += `<option value="${key}">${key}</option>`;
    })
    breedListEl.innerHTML += html;
}

async function getSubBreedList(breedName) {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    renderSubBreed(res.data.message, breedName);
}
function renderSubBreed(breeds, breedName) {
    let subBreed = breeds[breedName];
    let html = ``;
    if (subBreed.length === 0) {
        html += `<li>Không có sub breed</li>`;
        subBreedEl.innerHTML = html;
        return;
    }
    subBreed.forEach(breed => {
        html += `
            <li>
                <a href="#" onclick="showSubBreedImage('${breedName}', '${breed}')">${breed}</a>
            </li>    
        `;
    })
    subBreedEl.innerHTML = html;
}
async function showSubBreedImage(breedName,subBreed) {
    let res = await axios.get(`https://dog.ceo/api/breed/${breedName}/${subBreed}/images/random`);
    renderImage(res.data.message);
}
function renderImage(image) {
    imageEl.src = image;
}

btnShow.addEventListener('click', () => {
    imageEl.src = "";
    let breedName = breedListEl.value;
    getSubBreedList(breedName);
})


getBreedList();