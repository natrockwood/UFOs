// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Make a function for building a table 
function buildTable(data) {
    // Creating a blank canvas
    tbody.html("");

    // Next, loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row and cells for each value in the row
        let row = tbody.append("tr");

        // Loop through data rows and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            
            // Adding a variable that holds only each value from the object.
            cell.text(val);
        });
    });
}

// Keep track of all filters
var filters = {};

function updateFilters() {
    // Add date, city, state, country, and shape filters
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityName").property("value");
    let state = d3.select("#stateName").property("value");
    let country = d3.select("#countryName").property("value");
    let shape = d3.select("#shapeName").property("value");
    
    let dateId = "datetime";
    let cityId = "city";
    let stateId = "state";
    let countryId = "country";
    let shapeId = "shape";

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    if (date) {
        filters[dateId] = date;
    } else {
        delete filters[dateId];
    }
    if (city) {
        filters[cityId] = city;
    } else {
        delete filters[cityId];
    }
    if (state) {
        filters[stateId] = state;
    } else {
        delete filters[stateId];
    }
    if (country) {
        filters[countryId] = country;
    } else {
        delete filters[countryId];
    }
    if (shape) {
        filters[shapeId] = shape;
    } else {
        delete filters[shapeId];
    }
    
    // Call function to apply all filters and rebuild the table
    filterTable();
}

function filterTable() {
    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });
    
    // Rebuild the table using the filtered data; @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for
// within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);