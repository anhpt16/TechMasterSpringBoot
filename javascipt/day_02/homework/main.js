let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
console.log("-----------------------")
// Câu 1: In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc (Tên - Giá - Thương Hiệu - Số lượng)
const printInfo = (products) => {
    products.forEach((product) => {
        console.log(product.name + "-" + product.price + "-" + product.brand + "-" + product.count);
    });
}
printInfo(products);
console.log("-----------------------")
// Câu 2: Tính tổng tiền tất cả sản phẩm trong giỏ hàng
const sumPrice = (products) => {
    let sum = 0;
    products.forEach((product) => {
        sum += product.price;
    });
    console.log(`Tổng tiền các sản phẩm ${sum}`);
}
sumPrice(products);
console.log("-----------------------")
// Câu 3: Tìm các sản phẩm của thuơng hiệu "Apple"
const findApple = (products) => {
    let newArr = [];
    newArr = products.filter((product) => product.brand === "Apple");
    console.log(newArr.length);
    (newArr.length) ? (newArr.forEach((product) => {console.log(product.name)})) : console.log("Không tìm thấy sản phẩm nào");
}
findApple(products);
console.log("-----------------------")
// Câu 4: Tìm các sản phẩm có giá > 20000000
const findPrice = (products) => {
    let newArr = [];
    newArr = products.filter((product) => product.price > 20000000);
    (newArr.length) ? (newArr.forEach((product) => {console.log(product.name)})) : console.log("Không tìm thấy sản phẩm nào"); 
}
findPrice(products);
console.log("-----------------------")
// Câu 5: Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const searchPro = (products) => {
    let newArr = [];
    newArr = products.filter((product) => product.name.toLowerCase().includes("pro"));
    (newArr.length) ? (newArr.forEach((product) => {console.log(product.name)})) : console.log("Không tìm thấy sản phẩm nào"); 
}
searchPro(products);
console.log("-----------------------")
// Câu 6: Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "Nokia 1280",
    price: 250000,
    brand: "Nokia",
    count: 10 
}
products.push(newProduct);
printInfo(products);
console.log("-----------------------")
// Câu 7: Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteSamsung = (products) => {
    let newArr = products.filter((product) => product.brand.toLowerCase() !== "samsung");
    return newArr;
}
let newCart = deleteSamsung(products);
printInfo(newCart);
console.log("-----------------------")
// Câu 8: Sắp xếp giỏ hàng theo price tăng dần
products.sort(function(a, b) {
    return a.price - b.price;
})
console.log("Sắp xếp tăng dần")
printInfo(products);
console.log("-----------------------")
// Câu 9: Sắp xếp theo count giảm dần
products.sort(function(a, b) {
    return b.count - a.count;
})
console.log("Sắp xếp giảm dần")
printInfo(products);
console.log("-----------------------")
// Câu 10: Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const getRandom = (products) => {
    if (products.length < 1) {
        return;
    }
    let randomIndex1 = Math.floor(Math.random() * products.length);
    let randomIndex2;
    do {
        randomIndex2 = Math.floor(Math.random() * products.length);
    } while (randomIndex1 === randomIndex2);
    return [products[randomIndex1], products[randomIndex2]];
}
printInfo(getRandom(products));