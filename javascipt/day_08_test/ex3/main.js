const API_POST = "https://jsonplaceholder.typicode.com/posts";
const API_ALBUM = "https://jsonplaceholder.typicode.com/albums";
const API_PHOTO = "https://jsonplaceholder.typicode.com/photos";

const btnPost = document.getElementById("btn-post");
const btnPhoto = document.getElementById("btn-photo");
const btnAlbum = document.getElementById("btn-album");
const btns = document.querySelectorAll("button");

const h1El = document.querySelector("h1");
const ulEl = document.querySelector("ul");

function init(){
    loadPost();
}

function removeHighlight() {
    btns.forEach(btn => {
        if(btn.classList.contains('highlight')) {
            btn.classList.remove('highlight');
        }
    })
}

btnPost.addEventListener('click', () => {
    removeHighlight();
    loadPost();
})

btnPhoto.addEventListener('click', () => {
    removeHighlight();
    loadPhoto();
})

btnAlbum.addEventListener('click', () => {
    removeHighlight();
    loadAlbum();
})

async function loadPost() {
    let res = await axios.get(API_POST);
    let posts = res.data;
    let html = '';
    posts.forEach(post => {
        html += `
            <li>${post.title}</li>
        `
    })
    h1El.innerHTML = `Type: post`;
    btnPost.classList.add("highlight");
    ulEl.innerHTML = html;
}

async function loadPhoto() {
    let res = await axios.get(API_PHOTO);
    let photos = res.data;
    let html = '';
    photos.forEach(photo => {
        html += `
            <li>${photo.title}</li>
        `
    })
    h1El.innerHTML = `Type: photos`;
    btnPhoto.classList.add("highlight");
    ulEl.innerHTML = html;
}

async function loadAlbum() {
    let res = await axios.get(API_ALBUM);
    let albums = res.data;
    let html = '';
    albums.forEach(album => {
        html += `
            <li>${album.title}</li>
        `
    })
    h1El.innerHTML = `Type: albums`;
    btnAlbum.classList.add("highlight");
    ulEl.innerHTML = html;
}

init();