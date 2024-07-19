## Array
- Mỗi phần tử của mảng có thể có các kiểu dữ liệu khác nhau.
- Độ dài không có định
- Khai báo
```javascript
let arr = [];
```

- Các phương thức:
    - `[tên_mảng].sort([điều_kiện_sắp_xếp])`: sắp xếp các phần tử của mảng theo điều kiện.
    - `[tên_mảng].forEach()`: duyệt mảng với foreach, foreach trong javascript có chỉ số (index).
    - `[tên_mảng].map()`: duyệt qua các phần tử của mảng và thực hiện các thao tác trên các phần tử này. Trả về mảng mới có độ dài bằng mảng ban đầu.
    - `[tên_mảng].filter()`: lặp qua các phần tử của mảng và lọc ra các phần tử thỏa mãn điều kiện nào đó. Trả về mảng mới.
    - `[tên_mảng].find()`: lặp qua các phần tử của mảng và tìm ra phần tử đầu tiên thỏa mãn điều kiện.
    - `[tên_mảng].findIndex()`: giống `.find()` nhưng trả về chỉ số của phần tử thỏa mãn điều kiện.