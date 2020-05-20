// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Make a function for building a table 
function buildTable(data) {
    // Creating a blank canvas
    tbody.html("");

    data.forEach((dataRow) => {
        // Code that tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        let row = tbody.append("tr");

        // Loop through data rows
        Object.values(dataRow).forEach((val) => {
            
            // Append each value of the object to a cell in the table; appending data into a table data tag
            let cell = row.append("td");

            // Adding a variable that holds only each value from the object.
            cell.text(val);
            }
        );
    });
}