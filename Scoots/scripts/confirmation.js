document.addEventListener("DOMContentLoaded", () => {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string into key-value pairs
    const urlParams = new URLSearchParams(queryString);

        // Helper function to safely display values
        const getValue = (key) => urlParams.get(key) || "N/A";

        // Populate confirmation page with the form data
        document.getElementById("today").textContent = getValue("today");
        document.getElementById("fname").textContent = getValue("fname");
        document.getElementById("lname").textContent = getValue("lname");
        document.getElementById("email").textContent = getValue("email");
        document.getElementById("phone").textContent = getValue("phone");
        //document.getElementById("password").textContent = "********"; // Hide password for security
        document.getElementById("start").textContent = getValue("trip-start");
        document.getElementById("end").textContent = getValue("trip-end");
        document.getElementById("rentalType").textContent = getValue("audiance");
        document.getElementById("numRentals").textContent = getValue("authors");
        document.getElementById("cruiseLine").textContent = getValue("subject");
        document.getElementById("homeCountry").textContent = getValue("country");
        document.getElementById("description").textContent = getValue("description");
      });