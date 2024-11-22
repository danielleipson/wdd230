/* ---------- FORMS -------------*/

document.addEventListener('DOMContentLoaded', currentTimestamp);

function currentTimestamp() {
    const input = document.getElementById("timestamp");
    input.value = Date.now();
}