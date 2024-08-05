users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function getByCondition(users) {
    let newUsers = users.filter(user => {
        if(user.age > 25 && user.isStatus) {return user};
    })
    return newUsers;
}
function getByAgeAsc(users) {
    let newUsers = users.sort((a, b) => a.age - b.age);
    return newUsers;
}
console.log(getByCondition(users));
console.log(getByAgeAsc(users));