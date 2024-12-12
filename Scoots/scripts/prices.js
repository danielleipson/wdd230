document.addEventListener('DOMContentLoaded', () => {
    const pricesData = './data/prices.json'; // Path to the JSON file

    // Fetch the JSON file
    fetch(pricesData)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            generateTable(jsonData);
        })
        .catch(error => {
            console.error('Error fetching the JSON data:', error);
        });

    // Function to generate the HTML table
    function generateTable(jsonData) {
        const tableContainer = document.getElementById('table-container'); // Container for the table

        // Create the table element
        const table = document.createElement('table');
        table.border = '1';
        table.style.borderCollapse = 'collapse';

        // Create the first row for Reservation and Walk-in
        const groupRow = document.createElement('tr');

        // Empty cell for the first two columns (Rental, Persons)
        const emptyCell = document.createElement('th');
        emptyCell.style.padding = '8px';
        emptyCell.colSpan = 2; // Span two columns
        groupRow.appendChild(emptyCell);

        // Reservation header spanning two columns
        const reservationHeader = document.createElement('th');
        reservationHeader.textContent = 'Reservation';
        reservationHeader.style.padding = '8px';
        reservationHeader.colSpan = 2;
        reservationHeader.style.textAlign = 'center';
        groupRow.appendChild(reservationHeader);

        // Walk-in header spanning two columns
        const walkinHeader = document.createElement('th');
        walkinHeader.textContent = 'Walk-in';
        walkinHeader.style.padding = '8px';
        walkinHeader.colSpan = 2;
        walkinHeader.style.textAlign = 'center';
        groupRow.appendChild(walkinHeader);

        table.appendChild(groupRow);

        // Create the header row
        const headerRow = document.createElement('tr');
        const headers = ['Rental Tye', 'Max Persons', 'Half-Day (3hrs)', 'Full-Day', 'Half-Day (3hrs)', 'Full-Day'];

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.style.padding = '8px';
            th.style.textAlign = 'left';
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        // Populate the table rows with JSON data
        jsonData.prices.forEach(item => {
            const row = document.createElement('tr');

            const cells = [
                item.rental,
                item.persons,
                item['res-half-day'],
                item['res-full-day'],
                item['walk-half-day'],
                item['walk-full-day']
            ];

            cells.forEach(cellText => {
                const td = document.createElement('td');
                td.style.padding = '8px';
                td.textContent = cellText;
                row.appendChild(td);
            });

            table.appendChild(row);
        });

        // Append the table to the container
        tableContainer.appendChild(table);
    }
});
