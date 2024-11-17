const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

//Range Event Listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.Value;
}