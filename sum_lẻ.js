const arr = [1,2,3,4,5,6];
// tổng số lẻ trong mảng
function sum_le(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sum_le(arr));