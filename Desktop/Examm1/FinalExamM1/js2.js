
let originalArray = [1, 2, 3, 4, 5];
let withoutIndexArray = tryRemoveFromArray(originalArray, 2);
console.log("Mảng ban đầu:", originalArray);
console.log("Mảng sau khi loại bỏ index :", withoutIndexArray);
function tryRemoveFromArray(array, index) {
    if (index < 0 || index >= array.length) {
        console.log("Index không hợp lệ.");
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            result.push(array[i]);
        }
    }
    return result;
}

