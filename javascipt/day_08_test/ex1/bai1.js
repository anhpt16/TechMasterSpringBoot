const strings = ['aba', 'aa', 'ad', 'c', 'vcd'];

function getLargestString(strings) {
    let max = findMaxString(strings);
    if(max === 0) {
        return "Mảng trống";
    }
    let newArray = strings.filter(string => string.length === max);
    return newArray;
}

function findMaxString(strings) {
    if (strings.length === 0) {
        return 0;
    }
    let max = strings[0].length;
    strings.forEach(string => {
        if(string.length > max) {
            max = string.length;
        }
    })
    return max;
}

console.log(getLargestString(strings));