// image

// stickers
let stickerTotal = document.querySelector("#sTotal");

function calculateTotal() {
    let num1 = document.querySelector("#sticker1").value;
    let num2 = document.querySelector("#sticker2").value;
    let num3 = document.querySelector("#sticker3").value;
    let num4 = document.querySelector("#sticker4").value;

    let total = +num1 + +num2 + +num3 + +num4;

    if (total <= 10){
        document.querySelector("#stext").innerHTML =
            "They're " + total + " stickers"; }
    else document.querySelector("#stext").innerHTML = "They're too many stickers"
}

stickerTotal.addEventListener("click", calculateTotal);

// password
