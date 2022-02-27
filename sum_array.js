const arr = [1,2,3,4,5];
const arr2 =[1,1,1,];
//sum arr
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(arr));
console.log(sum(arr2));