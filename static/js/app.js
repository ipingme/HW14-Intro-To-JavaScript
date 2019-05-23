// Console.log the ufo data from data.js
console.log(data);

// YOUR CODE HERE!

// Define variables
let button = d3.select("#filter-btn");
let inputDatetime = d3.select("#datetime");
let tbody = d3.select("tbody");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create the populate function to be used at initialization and for filtering the table
let populate = (dataInput) => {
  dataInput.forEach(ufo => {
    let row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo[column])
    )
  });
}

// Initialize the site by populating the table with all data
populate(data);

// Filter by inputDate
button.on("click", () => {
  d3.event.preventDefault();
  let inputDate = inputDatetime.property("value").trim();
  // Filter datetime matching inputDate
  let filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  // Clear the results from the table
  tbody.html("");
  // Add filtered result to table
  let response = {filterDate}
  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }
})
