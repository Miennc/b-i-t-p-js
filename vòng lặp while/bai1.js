// tính tổng các số chẵn từ 0 đến n sử dụng vòng lặp while
function tinh_tong(n)
{
    var tong = 0;
    var index = 0;
    do
    {
        // Nếu số chẵn thì cộng vào
        if (index % 2 == 0){
            tong += index;
        }
 
        // tăng biến đếm
        index++;
    }
    while (index <= n);
 
    return tong;
}
 
var n = parseInt(prompt("Nhập số cần kiểm tra"));
document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tinh_tong(n));