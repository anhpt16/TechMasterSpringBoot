const strings = ["one", "two", "three", "one", "one", "three"];

function getNumberOfEl(strings) {
    let result = {};
    strings.forEach(string => result[string] = (result[string] || 0) + 1)
    return result;
}

console.log(getNumberOfEl(strings));