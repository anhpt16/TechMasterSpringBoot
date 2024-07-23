## Các phương thức để truy cập vào các phần tử trong DOM
- **document.getElementById**: Truy cập qua Id của phần tử.
- **document.getElementByClassName**: Truy cập thông qua tên class (Trả về danh sách các phần tử và có thể truy cập thông qua chỉ số).
- **document.getElementByTagName**: Truy cập thông qua tên thẻ (Trả về danh sách các phần tử và có thể truy cập thông qua chỉ số).
- **document.querySelector**: Truy cập thông qua CSS Selector ('#id', '.classname', 'p', ...) trả về phần tử đầu tiên tìm thấy.
- **document.querySelectorAll**: Truy cập thông qua CSS Selector trả về danh sách các phần tử.
## Quan hệ giữa các node trong DOM
- **Node.parentNode**: tham chiếu đến node cha của node hiện tại.
- **Node.childNodes**: tham chiếu đến các node con trực tiếp của node hiện tại.
- **Node.firstChild**: tham chiếu đến node con trực tiếp của node hiện tại.
- **Node.lastChild**: tham chiếu đến node con cuối cùng của node hiện tại.
- **Node.nextSibling**: tham chiếu đến node anh em liền kề nằm sau, của node hiện tại.
- **Node.previousSibling**: tham chiếu đến node anh em liền kề nằm trước, của node hiện tại.
## Lấy nội dung cho phần tử DOM
- **Node.innerHTML**: lấy ra toàn bộ nội dung HTML trong node hiện tại.
- **Node.innerText**: lấy ra toàn bộ nội dung trong node hiện tại (không lấy ra nội dung của thẻ ẩn).
- **Node.textContent**: lấy ra toàn bộ nội dung trong node hiện tại.
## Chỉnh sửa nội dung của phần tử
- **Node.innerHTML = value**
- **Node.innerText = value**
- **Node.textContent = value**
## Thay đổi thuộc tính của phần tử
- Cú pháp: `[tên_phần_tử].style.[tên_thuộc_tính] = value`
- **Chú ý**: 
    - khi tên thuộc tính có 2 từ trở lên cần viết theo dạng CamelCase (backgroundColor, marginLeft).
    - Khi sử dụng nodeList với các phương thức của Array, phải chuyển nodeList sang Array bằng cách: `Array.from([nodeList])` sau đó mới sử dụng được với các phương thức của mảng.
    - VD:
    ```javascript
    let multiTag = document.getElementsByTagName('p');

    Array.from(multiTag).forEach((tag) => {
    tag.style.color = "blue";
    })
    ```
## Thêm phần tử DOM
- **appendChild()**: thêm phần tử vào cuối phần tử cha.
- **prepend()**: thêm phần tử vào đầu phần tử cha.
- **insertBefore()**: thêm phần tử vào trong phần tử cha và trước phần tử được chỉ định.
- **targetElement.insertAdjacentHTML(position, text)**
- **targetElement.insertAdjacentElement(position, element)**
- **targetElement.insertAdjacentText(position, text)**. Trong đó, position là vị trí của phần tử cần thêm:
    - **beforebegin**: vị trí trước targetElement.
    - **afterBegin**: bên trong targetElement, trước firstChild.
    - **beforeend**: bên trong targetElement, sau lastChild.
    - **afterend**: vị trí sau targetElement.
```javascript
const parent = document.getElementById('parent');

        // appendChild()
        const newChild1 = document.createElement('div');
        newChild1.textContent = 'New Child 1';
        parent.appendChild(newChild1);

        // insertBefore()
        const newChild2 = document.createElement('div');
        newChild2.textContent = 'New Child 2';
        parent.insertBefore(newChild2, newChild1);

        // append(): thêm một hoặc nhiều phần tử hoặc nội dung vào cuối phần tử cha
        const newChild3 = document.createElement('div');
        newChild3.textContent = 'New Child 3';
        parent.append(newChild3, ' and Some Text');

        // prepend()
        const newChild4 = document.createElement('div');
        newChild4.textContent = 'New Child 4';
        parent.prepend(newChild4, ' and Some More Text');

        // insertAdjacentHTML()
        parent.insertAdjacentHTML('beforeend', '<div>New Child 5</div>');

        // innerHTML: thay thế tất cả nội dung bên trong của một phần tử bằng HTML mới
        parent.innerHTML += '<div>New Child 6</div>';

        // replaceChild(): thay thế một phần tử con cụ thể bằng một phần tử mới
        const newChild7 = document.createElement('div');
        newChild7.textContent = 'New Child 7';
        parent.replaceChild(newChild7, newChild1);
```
## Xóa, thay thế, sao chép phần tử DOM
- Cú pháp xóa: **removeChild()** - loại bỏ một node con của một element.
- Cú pháp thay thế: **replaceChild()**
- Cú pháp sao chép: **node.cloneNode(deep)**. Trong đó:
    - **node**: phần tử được clone.
    - **deep**: true - sao chép node, attribute và các thành phần con | false - chỉ sao chép node và attribute (mặc định).
## Thuộc tính classList
- Là thuộc tính read-only của một phần tử trả về một tập hợp các class CSS và cho phép chúng ta sử dụng một số phương thức để quản lý và cập nhật các class đó.
- classList cung cấp một số phương thức:
    - **add()**: thêm các class được chỉ định.
    - **remove()**: loại bỏ các class được chỉ định.
    - **contains()**: kiểm tra class được chỉ định có tồn tại trên phần tử hay không.
    - **toggle()**: chuyển đổi class được chỉ định.
