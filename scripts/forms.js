const confirmPassword = document.getElementById("confirm");
const password = document.getElementById("password");
const formMessage = document.getElementById("formmessage");

confirmPassword.addEventListener("focusout", checkSame);

function checkSame() {

    if (confirmPassword.value !== password.value) {
        formMessage.value = "Passwords don't match";
        formMessage.style.visibility = "show";
        confirmPassword.style.backgroundColor = "#fff0f3";
        confirmPassword.value = "";
        confirmPassword.focus();
    } else {
        formMessage.style.display = "none";
        confirmPassword.style.background = "#fff";
        confirmPassword.style.color = "#000";

    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}