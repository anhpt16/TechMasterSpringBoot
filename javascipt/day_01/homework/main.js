// Bài 1
var calculateFactorial = function(n) {
    if (n == 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
console.log(calculateFactorial(5));
// Bài 2
var reverseString = (string) => {
    var splitString = string.split("");
    splitString = splitString.reverse();
    return splitString.join("");
}
console.log(reverseString("Hello"));
// Bài 3
var getCountry = (code) => {
    var syncCode = code.toUpperCase();
    switch(syncCode) {
        case "AF": return "Afghanistan";
        case "AX": return "Quần đảo Alan";
        case "AL": return "Albania";
        case "AR": return "Argentina";
        case "AU": return "Châu Úc";
        case "BM": return "Bermuda";
        case "BR": return "Brazil";
        case "CA": return "Canada";
        case "CN": return "China";
        case "FR": return "Pháp";
        case "VN": return "Việt Nam";
        default: return "Không tìm thấy";
    }
}
console.log(getCountry("vn"));
console.log(getCountry("bR"));
console.log(getCountry("CA"));
// Bài 4
var wrapString = (string) => {
    if(string.length < 11) {
        return string;
    }
    return string.slice(0, 10) + "...";
}
console.log(wrapString("acvsderkfm"));
console.log(wrapString("xinchaocacbandenvoiTechmaster"));