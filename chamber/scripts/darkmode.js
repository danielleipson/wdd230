const modeButton = document.querySelector("#switch");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        body.style.background = "#000";
        body.style.color = "#fff";
		//modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
        body.style.background = "#fff";
        body.style.color = "#000";
		//modeButton.textContent = "🕶️";
	}
});
