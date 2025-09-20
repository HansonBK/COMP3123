const http = require("http");
// TODO - Use Employee Module here
const Employee = require("./Employee");

console.log("Lab 03 -  NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  // Only allow GET
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
  }

  // Routes
  if (req.url === "/") {
    // TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(`
    <h1>Welcome to Lab Exercise 03</h1>
    <p>Hanson Bani-Khaled - 101401959</p>
    <p>Available Routes:</p>
    <ul>
      <li><a href="/employee">View All Employees</a></li>
      <li><a href="/employee/names">View Employee Names</a></li>
      <li><a href="/employee/totalsalary">View Total Salary</a></li>
    </ul>
  `);
  }

  if (req.url === "/employee") {
    // TODO - Display all details for employees in JSON format
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(Employee.getAll()));
  }

  if (req.url === "/employee/names") {
    // TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
    // e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(Employee.getNamesAsc()));
  }

  if (req.url === "/employee/totalsalary") {
    // TODO - Display Sum of all employees salary in given JSON format 
    // e.g. { "total_salary" : 100 }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(Employee.getTotalSalary()));
  }

  // 404 for anything else
  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
