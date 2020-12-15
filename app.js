let table = document.getElementById('table');
let todoInput = document.getElementById('todoinput');
let submitButton = document.getElementById('submitbutton');
let clearAllButton = document.getElementById('clearallbutton');
let deleteButton = document.getElementById('deletebutton');
let moveUpButton = document.getElementById('moveupbutton');
let moveDownButton = document.getElementById('movedownbutton');

submitButton.addEventListener('click', () => {
    let todoItem = todoInput.value;
    let template = `
        <tr>
            <td>${todoItem}</td>
            <td><input type="checkbox"></input></td> 
        </tr>
    `;
    table.getElementsByTagName('tbody')[0].innerHTML += template;
    todoInput.value = '';
    // table.style.display = 'inline';
    // deleteButton.style.display = 'inline';
    // moveUpButton.style.display = 'inline';
    // moveDownButton.style.display = 'inline';
    getSelectedRow();
});

clearAllButton.addEventListener('click', () => {
    table.getElementsByTagName('tbody')[0].innerHTML = '';
    todoInput.value = '';
    // table.style.display = 'none';
    // deleteButton.style.display = 'none';
    // moveUpButton.style.display = 'none';
    // moveDownButton.style.display = 'none';
    index = undefined;
});

let index;
function getSelectedRow() {
    for(i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            if(typeof index !== 'undefined') {
                table.rows[index].classList.toggle('selected');
            }; //this body code will un-toggles the class of the previous index (the body code returns false)
            index = this.rowIndex; //this refers to table.rows[i]
            this.classList.toggle('selected'); //this will re-toggles the class to the new index
            //(this onclick function code always returns true because of the toggle method above)
        }
    }
};

deleteButton.addEventListener('click', function(){
    table.deleteRow(index);
    getSelectedRow; //this will re-calibrate the table.rows[i]s
    index = undefined; //this deletes the index to be freshly started
});

moveUpButton.addEventListener('click', function(){
    let rows = table.rows;
    let parent = rows[index].parentNode;
    if(index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        index--;
    }
});

moveDownButton.addEventListener('click', function(){
    let rows = table.rows;
    let parent = rows[index].parentNode;
    if(index < rows.length - 1) {
        parent.insertBefore(rows[index + 1], rows[index]);
        index++;
    }
});