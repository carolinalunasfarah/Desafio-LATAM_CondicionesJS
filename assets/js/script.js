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

let passwordEnter = document.querySelector("#pwenter");

function passwordCheck () {
    let pass1 = document.querySelector("#ps1").value
    let pass2 = document.querySelector("#ps2").value
    let pass3 = document.querySelector("#ps3").value
    
    if (pass1 === "9" && pass2 === "1" && pass3 === "1") {
        document.querySelector("#pwtext").innerHTML = "Password 1 is correct" }
    else if (pass1 === "7" && pass2 === "1" && pass3 === "4") {
            document.querySelector("#pwtext").innerHTML = "Password 2 is correct" }
    else document.querySelector("#pwtext").innerHTML = "Incorrect password"
}

passwordEnter.addEventListener("click", passwordCheck);