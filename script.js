let QRcode = document.querySelector(".qrcode");
let input = document.querySelector("input")

function display() {
   if(input.value === ""){
    QRcode.innerHTML = "<h1>Please Enter Something</h1>"
   } else {
    QRcode.innerText = "";
    let text = document.querySelector("input").value;

    let QR = new QRCode(QRcode,{
        text : text,
        width : 250,
        height : 250
    });
   }
    

    
}