// tính giai thừa
function giaiThua(n) {
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua = giaiThua * i;
    }
    return giaiThua;
}
console.log(giaiThua(5));