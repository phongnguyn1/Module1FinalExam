
let situation1 = checkIfStr1inStr2("abc", "abc123");
let situation2 = checkIfStr1inStr2("123", "abcdef123");
function checkIfStr1inStr2(str1, str2) {
    if (str2.length < str1.length) {
        console.log("Chuỗi str1 dài hơn chuỗi str2.");
        return false;
    }
    let i = 0;
    let j = 0;
    while (i < str2.length) {
        if (str1[j] === str2[i]) {
            j++;
            i++;
            if (j === str1.length) {
                console.log("Chuỗi str1 nằm trong chuỗi str2.");
                return true;
            }
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    console.log("Chuỗi str1 không nằm trong chuỗi str2.");
    return false;
}
console.log(situation1);
console.log(situation2);

