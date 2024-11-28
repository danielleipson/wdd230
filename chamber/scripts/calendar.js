// JavaScript to create a dynamic calendar
const calendar = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),

    // Month names
    months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],

    // Render the calendar
    render: function () {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        // Update month and year in the header
        document.getElementById("current-month").textContent = 
            `${this.months[this.currentMonth]} ${this.currentYear}`;

        // Weekdays
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const weekdaysDiv = document.querySelector(".calendar-weekdays");
        weekdaysDiv.innerHTML = weekdays.map(day => `<div>${day}</div>`).join("");

        // Dates
        const datesDiv = document.querySelector(".calendar-dates");
        datesDiv.innerHTML = "";

        // Fill in the blank spaces for days before the start of the month
        for (let i = 0; i < firstDay; i++) {
            datesDiv.innerHTML += `<div class="empty"></div>`;
        }

        // Fill in the days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                day === new Date().getDate() &&
                this.currentMonth === new Date().getMonth() &&
                this.currentYear === new Date().getFullYear();
            datesDiv.innerHTML += `<div class="date ${isToday ? "today" : ""}">${day}</div>`;
        }
    },

    // Change month
    changeMonth: function (increment) {
        this.currentMonth += increment;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear -= 1;
        } else if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear += 1;
        }
        this.render();
    }
};

// Initialize the calendar
document.addEventListener("DOMContentLoaded", () => {
    calendar.render();

    document.getElementById("prev-month").addEventListener("click", () => {
        calendar.changeMonth(-1);
    });

    document.getElementById("next-month").addEventListener("click", () => {
        calendar.changeMonth(1);
    });
});
