document.getElementById("signup-form").onsubmit = function signup() {
    var name = document.getElementById("first-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("displayData").innerHTML =
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>";

    document.getElementById("signup-form").reset();
};

signup()

//2
function readmore() {
    var span = document.getElementById("span");

    if (span.style.display === "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}
readmore()

//3
var students = [];

// Form submit event to add student
document.getElementById("studentForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form input values
    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;

    // Add student data to array
    students.push({ name, rollNo });

    // Get tbody element
    var tbody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

    // Create a new row and add data to it
    var row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${rollNo}</td><td>
        <button onclick="deleteStudent(this)">Delete</button>
        <button onclick="editStudent(this)">Edit</button></td>`;

    // Add the row to the table
    tbody.appendChild(row);

    // Reset the form
    document.getElementById("studentForm").reset();
};

// Function to delete student row
function deleteStudent(button) {
    var row = button.closest("tr");
    row.remove(); // Remove the row from the table
}

// Function to edit student data
function editStudent(button) {
    var row = button.closest("tr"); //target closeset tr

    var name = prompt("Edit Name:", row.cells[0].textContent);
    var rollNo = prompt("Edit Roll No:", row.cells[1].textContent);

    if (name && rollNo) {
        row.cells[0].textContent = name;
        row.cells[1].textContent = rollNo;
    }
}