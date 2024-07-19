// Bài 1: Tìm max
// Cách 1: Dùng hàm có sẵn
let arr = [1,4,2,3,6,1,1];
const findMax = (arr) => {
    arr.sort((a, b) => {return b - a;});
    return arr[0];
}
console.log(findMax(arr));

// Cách 2: Duyệt mảng đưa ra phần tử max
const findMax2 = (arr) => {
    let max = arr[0];
    arr.forEach((value) => {
        if(value > max) {
            max = value;
        }
    })
    return max;
}

const findMax3 = (arr) => {
    return Math.max(...arr); // Cú phép ES6 - Spread Operator, Rest Parameter
}

// Bài 2:
let arr2 = [2,4,5,1,2,3,5];

const change = (arr) => {
    arr.forEach((value, index) => {
        (value % 2) ? (arr[index] = 1) : (arr[index] = 0);
    });
    return arr;
}
console.log(change(arr2));

const change2 = (arr) => {
    return arr.map((e) => e % 2);
}
console.log(change2(arr2));

// Bài 5:  Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
const replication = (string) => {
    let originString = string;
    for(let i = 0; i < 10; i++) {
        string = string.concat("-", originString);
    }
    return string;
}
console.log(replication("a"));

//Object
let dog = {
    name: "Mike",
    age: 10,
    weight: 5,
    eat: function(eat) {
        console.log(`Eating + ${eat}`)
    },
    greet: function() {
        console.log(`My Name + ${this.name}`)
    }
}
dog.eat("Bone");
dog.greet();