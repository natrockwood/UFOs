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
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date. 
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data; @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);