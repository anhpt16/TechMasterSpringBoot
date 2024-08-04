// console.log("Câu lệnh trước promise");

// const promise = new Promise((resolve, reject) => { //reject: tín hiệu
//     // Công việc cần thực hiện
//     let data;

//     setTimeout(() => {
//         data = "Dữ liệu";
//         resolve(data); // Công việc hoàn thành
//     }, 3000);
// })

// console.log("Câu lệnh sau promise")

// //Khi gọi resolve sẽ kích hoạt then
// promise.then((data) => {
//     console.log("Đã nhận được data");
// })

// function orderCoffee(customer) {
//     console.log("Nhận order của khách hàng thứ: ", customer);

//     return new Promise(function(resolve, reject) {
//         console.log("Làm coffee cho khách hàng: ", customer);

//         setTimeout(function() {
//             console.log("Làm xong coffee cho khách hàng: ", customer);
//             resolve(); // Thông báo cho khách hàng
//         }, Math.random() * 5000);
//     });
// }

// for (let i = 0; i <= 10; i++) {
//     orderCoffee(i).then(function() {
//         console.log(`Khách hàng ${i} nhận đồ uống`);
//     });
// }


const api = "https://dummyjson.com/products";

function getProducts() {
    return fetch(api).then(function (response) {
        return response.json(); //Convert
    });
}
// Gọi API --> trả về promise
// Convert --> trả về promise

// function renderProducts(products = []) {
//     const productListEl = document.querySelector(".product");

//     const html = products.map(function (product) {
//         const productHtml = [
//             `<div>`,
//             `<div class="product-image">`,
//             `<img src="${product.thumbnail} alt="${product.title}" />`,
//             `</div>`,
//             `<div class="product-info">`,
//             `<h3 class="product-title">${product.title}</h3>`,
//             `<p class="product-price">${product.price}</p>`,`</div>`,
//             `</div>`,
//         ].join("");

//         return productHtml;
//     }).join("");
//     productListEl.innerHTML = html;
// }

function renderProducts(products = []) {
    const productListEl = document.querySelector(".products");
  
    const html = products
      .map(function (product) {
        const productHtml = [
          `<div>`,
          `<div class="product-image">`,
          `<img src="${product.thumbnail}" alt="${product.title}" />`,
          `</div>`,
          `<div class="product-info">`,
          `<h3 class="product-title">${product.title}</h3>`,
          `<p class="product-price">${product.price}</p>`,
          `</div>`,
          `<div>`,
          `<button class="btn-add-to-cart" data-product-id="${product.id}">Add to cart</button>`,
          `</div>`,
          `</div>`,
        ].join("");
  
        return productHtml;
      })
      .join("");
  
    productListEl.innerHTML = html;
  }

  function setupEventHandler() {
    document.querySelectorAll("button.btn-add-to-cart").forEach(function (button) {
        button.addEventListener('click', function () {
            const productId = button.getAttribute("data-product-id");

            alert("Add product with ID: "+ productId + " to cart");
        })
    })
  }

function main() {
    getProducts().then(function(data) {
        renderProducts(data.products);
    })
    .then(function(data) {
        setupEventHandler();
    });
}

main();