// Member enrollment functionality
document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name && email && phone) {
        document.getElementById("enrollmentResult").innerHTML = `<p>Member ${name} enrolled successfully!</p>`;
        addToTaskTable(name);
        // Clear form
        document.getElementById("enrollmentForm").reset();
    } else {
        document.getElementById("enrollmentResult").innerHTML = `<p>Please fill all fields.</p>`;
    }
});

// Task assignment functionality
const members = [];
function addToTaskTable(memberName) {
    members.push(memberName);
    const taskTable = document.getElementById("taskTable");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${memberName}</td>
        <td>Not assigned yet</td>
        <td>Not started</td>
    `;
    taskTable.appendChild(newRow);
}

function assignTask() {
    const taskTable = document.getElementById("taskTable").getElementsByTagName("tr");
    for (let i = 1; i < taskTable.length; i++) {
        const taskCell = taskTable[i].getElementsByTagName("td")[1];
        taskCell.innerHTML = "Decoration setup";  // Assign a sample task
    }
}
