const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('select');
const breedListEl = document.getElementById('breed-list');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    // Cách 1: Sử dụng for ... in
    for (let breed in breeds) {
        const html = `
            <option value="${breed}">${breed}</option>
        `;
        breedListEl.innerHTML += html;
    }
}
// Xử lý sự kiện cho nút Fetch
// Thực hiện một hàm bất đồng bộ khi click để lấy ra ảnh sau đó gán link ảnh vào thẻ img
btn.addEventListener("click", async () => {
    let link = `https://dog.ceo/api/breed/${breedListEl.value}/images/random`;
    let res = await axios.get(link);
    image.src = res.data.message
  });
getBreedList()
