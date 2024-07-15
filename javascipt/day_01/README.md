## Khai báo biến trong Javascript
- Từ khóa `let`: khai báo biến có thể thay đổi được.
- Từ khóa `const`: khai báo hằng.
## Kiểu dữ liệu
- Kiểu dữ liệu nguyên thủy (7): `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
- Kiểu dữ liệu tham chiếu: các đối tượng, các hàm và array.
## String
- Khai báo chuỗi sử dụng ký tự back-tick (Template String - ES6)
```javascript
console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);
```
## Phép toán
- Phép `+` một số với một chuỗi: chuyển số sang chuỗi -> Cộng chuỗi -> Trả về kết quả là một chuỗi.
## Hàm
- Regular Function:
```javascript
function sum(a, b) {
    return a + b;
}
```
- Function Expression:
```javascript
let sum1 = function(a, b) {
    return a + b;
}
```
- Arrow Function (ES6):
```javascript
let sum2 = (a, b) => {
    return a + b;
}
```