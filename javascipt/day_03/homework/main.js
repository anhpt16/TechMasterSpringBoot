// Đề bài:
let tagpRoot = document.querySelector('p');
let contentTag = tagpRoot.textContent;

// Câu 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn
const hightlight = (() => {
    let tagp = document.querySelector('p');
    let splitString = tagp.textContent.split(" ");
    let htmlp = '';
    splitString.forEach((word) => {
        if (word.length >= 5) {
            let pHightlight = "<span style='background: yellow;'>" + word + "</span>";
            htmlp += " " + pHightlight;
        }
        else {
            htmlp += " " + word;
        }
    })
    tagp.innerHTML = htmlp;
})
hightlight();

// Câu 2: Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const addLink = (() => {
    let link = document.createElement('a');
    link.textContent = 'facebook';
    link.href = 'facebook.com';

    let tagp = document.querySelector('p');
    tagp.nextSibling ? tagp.parentNode.appendChild(link) : tagp.insertBefore(link, tagp.nextSibling);
})
addLink();

// Câu 3: Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const count = ((string) => {
    let stringSplit = string.split(" ");
    let countResult = 0;
    stringSplit.forEach((word) => countResult += word.length);

    let newDiv = document.createElement('div');
    newDiv.textContent = `Số lượng từ: ${countResult}`;
    document.querySelector('body').appendChild(newDiv);
})
count(contentTag);

// Câu 4: Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
const replaceSymbol =  (() => {
    let tagp = document.querySelector('p');
    let content = tagp.innerHTML;
    let splitString = Array.from(content);
    splitString = splitString.map((character) => {
        if (character === ',') {
            return '🤔';
        }
        if (character === '.') {
            return '😲';
        }
        return character;
    })
    tagp.innerHTML = splitString.join('');
})
replaceSymbol();