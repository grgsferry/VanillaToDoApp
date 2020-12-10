let table = document.getElementById('table');
let todoInput = document.getElementById('todoinput');
let submitButton = document.getElementById('submitbutton');
let clearAllButton = document.getElementById('clearallbutton');
let deleteButton = document.getElementById('deletebutton');
let moveUpButton = document.getElementById('moveupbutton');
let moveDownButton = document.getElementById('movedownbutton');
let tableRowsCount = 1;

submitButton.addEventListener('click', () => {
    let todoItem = todoInput.value;
    let template = `
        <tr>
            <td>${todoItem}</td>
            <td><input type="checkbox"></input></td>
        </tr>
    `;
    table.innerHTML += template;
    todoInput.value = '';
    table.style.display = "block";
    deleteButton.style.display = "inline-block";
    moveUpButton.style.display = "inline-block";
    moveDownButton.style.display = "inline-block";
    tableRowsCount++;
});

clearAllButton.addEventListener('click', () => {
    table.innerHTML = `
    <tr>
        <th>To-Do List</th>
        <th>Status</th>
    </tr>
    `;
    todoInput.value = '';
    table.style.display = "none";
    deleteButton.style.display = "none";
    moveUpButton.style.display = "none";
    moveDownButton.style.display = "none";
    tableRowsCount = 1;
});

// for(i = 1; i < tableRowsCount; i++) {

// }

// table.rows[0].addEventListener('click', function() {
//     alert('ey');
// });