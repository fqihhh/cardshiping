let priceElem = document.getElementById('price');
let subTotalElem = document.getElementById('subTotal');
let shipingElem = document.getElementById('shipping');
let discountElem = document.getElementById('discount');
let totalElem = document.getElementById('total');
let quantityElem = document.getElementById('quantity');
let textVoucherElem = document.getElementById('textVoucher');
let codeVoucherElem = document.getElementById('codeVoucher');

subTotalElem.innerHTML = priceElem.innerHTML;

function totalAll(subTotal, shiping = 0, discount = 0) {
    return Number(subTotal) + Number(shiping) - Number(discount);
}

totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);

let tambah = (num) => {
    let number = parseFloat(quantityElem.value);
    number += num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil;

    let total = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

let kurang = (num) => {
    let number = parseFloat(quantityElem.value);
    number -= num;
    quantityElem.value = number;

    let hasil = number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil;

    let total = totalAll(subTotalElem.innerHTML, shipingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

function btnVoucher() {
    let inputVoucher = codeVoucherElem.value;
    // console.log(inputVoucher);
    if (inputVoucher === "abu-dzar") {
        textVoucherElem.innerHTML = "Voucher 20% Berhasil";
        textVoucherElem.classList.remove("applied");
        textVoucherElem.classList.remove("reject");
        textVoucherElem.classList.add("success");

        discountElem.innerHTML = 2000;
    } else if (inputVoucher === "fulan") {
        discountElem.innerHTML = 1000;
    } else {
        textVoucherElem.innerHTML = "Voucher Gagal";
        textVoucherElem.classList.remove("applied");
        textVoucherElem.classList.remove("success");
        textVoucherElem.classList.add("reject");
        discountElem.innerHTML = 0;
    }
}

function btnVoucher() {
    let inputVoucher = codeVoucherElem.value;
    // console.log(inputVoucher);
    if (inputVoucher === "fulan") {
        textVoucherElem.innerHTML = "Voucher 10% Berhasil";
        textVoucherElem.classList.remove("applied");
        textVoucherElem.classList.remove("reject");
        textVoucherElem.classList.add("success");

        discountElem.innerHTML = 2000;
    } else if (inputVoucher === "fulan") {
        discountElem.innerHTML = 1000;
    } else {
        textVoucherElem.innerHTML = "Voucher Gagal";
        textVoucherElem.classList.remove("applied");
        textVoucherElem.classList.remove("success");
        textVoucherElem.classList.add("reject");
        discountElem.innerHTML = 0;
    }
}








