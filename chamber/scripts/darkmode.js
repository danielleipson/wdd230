const toggleSwitch =
    document.querySelector('.theme-slider input[type="checkbox"]');
    
    /* Function to change theme */
    function switchTheme(e) {
    
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    }
    
    /* While page in dark mode and checkbox is 
    checked then theme back to change light*/
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);

	
/*const modeButton = document.querySelector("#switch");
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
});*/
