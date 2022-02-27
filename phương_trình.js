// giải phương trình bậc 1
function giaiPhuongTrinhBac1(a, b) {
    if (a == 0) {
        if (b == 0) {
            return "Phương trình vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        return "Phương trình có nghiệm x = " + (-b / a);
    }
}
console.log(giaiPhuongTrinhBac1(1, 2));


// giải phương trình bậc 2
function giaiPhuongTrinhBac2(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    } else if (delta == 0) {
        return "Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a));
    } else {
        return "Phương trình có 2 nghiệm phân biệt x1 = " + (-b - Math.sqrt(delta)) / (2 * a) + " và x2 = " + (-b + Math.sqrt(delta)) / (2 * a);
    }
}
console.log(giaiPhuongTrinhBac2(1, 2, 3));

// giải phương trình bậc 3
function giaiPhuongTrinhBac3(a, b, c, d) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    } else if (delta == 0) {
        return "Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a));
    } else {
        return "Phương trình có 2 nghiệm phân biệt x1 = " + (-b - Math.sqrt(delta)) / (2 * a) + " và x2 = " + (-b + Math.sqrt(delta)) / (2 * a);
    }
}
console.log(giaiPhuongTrinhBac3(1, 2, 3, 4));

// giải phương trình bậc 4
function giaiPhuongTrinhBac4(a, b, c, d, e) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    } else if (delta == 0) {
        return "Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a));
    } else {
        return "Phương trình có 2 nghiệm phân biệt x1 = " + (-b - Math.sqrt(delta)) / (2 * a) + " và x2 = " + (-b + Math.sqrt(delta)) / (2 * a);
    }
}
console.log(giaiPhuongTrinhBac4(1, 2, 3, 4, 5));

