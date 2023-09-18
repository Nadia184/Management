const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function (event) {
event.preventDefault();

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const JPInput = document.getElementById("JP");
const CFInput = document.getElementById("CF");
const MAPDInput = document.getElementById("MAPD");

const name = nameInput.value;
const roll = rollInput.value;
const JP = JPInput.value;
const CF = CFInput.value;
const MAPD = MAPDInput.value;

const total = parseInt(JP) + parseInt(CF) + parseInt(MAPD);
const percentage = ((total / 300) * 100).toFixed(2);

const newRow = document.createElement("tr");
newRow.innerHTML = `
<td>${name}</td>
<td>${roll}</td>
<td>${JP}</td>
<td>${CF}</td>
<td>${MAPD}</td>
<td>${total}</td>
<td>${percentage}%</td>
<td>
<button class="edit-button" onclick="editResult(this)">Edit</button>
<button class="delete-button" onclick="deleteResult(this)">Delete</button>
</td>
`;

tbody.appendChild(newRow);

nameInput.value = "";
rollInput.value = "";
JPInput.value = "";
CFInput.value = "";
MAPDInput.value = "";
});

function editResult(button) {
const row = button.parentNode.parentNode;
const cells = row.querySelectorAll("td");

const name = cells[0].textContent;
const roll = cells[1].textContent;
const JP = cells[2].textContent;
const CF = cells[3].textContent;
const MAPD = cells[4].textContent;

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const JPInput = document.getElementById("JP");
const CFInput = document.getElementById("CF");
const MAPDInput = document.getElementById("MAPD");

nameInput.value = name;
rollInput.value = roll;
JPInput.value = JP;
CFInput.value = CF;
MAPDInput.value = CPROGRAMMING;

row.remove();
}

function deleteResult(button) {
const row = button.parentNode.parentNode;
row.remove();
}

function resetForm() {
resultForm.reset();
}