console.log("Hello World")

//Khai báo biến và không gán giá trị cho biến
let age;
console.log(age); // undefined (kiểu dữ liệu nguyên thủy)
age = 35;
console.log(age);
let  = 'a';
console.log(Object);

let name = "Anh";
let hisAge = 22;
// Template String
console.log(`Xin chào ${name}, tuổi ${hisAge}`);
console.log("0" + 1);

// Rugular Function
function sum(a, b) {
    return a + b;
}
// Function Expression
let sum1 = function(a, b) {
    return a + b;
}
// Arrow Function (ES6)
let sum2 = (a, b) => {
    return a + b;
}

console.log(sum(9, 9));