const pass = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const message = document.querySelector("#formmessage");

confirm.addEventListner("focusout", checkSame);

//This has Been refactored.
function checkSame() {
    if (confirm.value == "") {
        //message.style.display ="none";
        confirm.style.backgroundColor = "#eee";
        confrim.style.color = "#000";
    } else if (pass.value !== confirm.value) {
        message.textContent = "**PASSWORDS DO NOT MATCH**";
        message.style.display = "block";
        message.style.border = "1px solid black";
        confirm.style.backgroundColor = "#fff0f3";
        confirm.value = "";
        confirm.focus();
    } else {
        message.style.display = "none";
        confirm.style.backgroundColor = "#eee";
        confirm.style.color = "#000";
    }
}