$(document).ready(show_cupcakes);
const submitButton = document.querySelector('.btn');
const userName = document.querySelector('#exampleInputName1');
const count = document.querySelector('#exampleInputCount1');
const errors = document.querySelectorAll('.error');
const form = document.querySelector('form');
const selectOptions = document.querySelectorAll('select')
const options = document.querySelectorAll('option');
const labels = document.querySelectorAll('label');
const checks = document.querySelectorAll('.fa-check');
const cross = document.querySelectorAll('.fa-exclamation-circle');
const table = document.querySelector('table');
const username = document.getElementById('welcome');
const inputs = document.querySelectorAll('input');
var cup_cakes = [
    { "name": "Chocolate", "calories": "high", "weight": "200gm" },
    { "name": "Carrot", "calories": "medium", "weight": "150gm" },
    { "name": "Banana", "calories": "high", "weight": "200gm" },
    { "name": "Strawberry", "calories": "low", "weight": "160gm" },
    { "name": "Peanut", "calories": "medium", "weight": "200gm" }
];

const arrayOfCakes = JSON.parse(JSON.stringify(cup_cakes));

function show_cupcakes() {
    //write code that shows the cupcakes in the table as per the instructions
    for (let i = 0; i < 5; i++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        const tableCell1 = document.createElement('td');
        tableRow.appendChild(tableCell1);
        tableCell1.innerHTML = cup_cakes[i].name

        const tableCell2 = document.createElement('td');
        tableRow.appendChild(tableCell2);
        tableCell2.innerHTML = cup_cakes[i].calories

        const tableCell3 = document.createElement('td');
        tableRow.appendChild(tableCell3);
        tableCell3.innerHTML = cup_cakes[i].weight
    }
    const tabelCells = document.querySelectorAll('td');
    tabelCells.forEach(cell => {
        if (cell.innerHTML === "high") {
            cell.classList.add('red_cell');
        } else if (cell.innerHTML === "medium") {
            cell.classList.add('orange_cell');
        } else if (cell.innerHTML === "low") {
            cell.classList.add('green_cell');
        }
    })
}

function validate() {
    for (let i = 0; i <= 4; i++) {
        if (form[i].value === "" || form[2].value === 'None' || form[3].value === 'None') {
            form[i].style.border = '2px solid red';
            cross[i].style.display = 'block';
        } else {
            errors[i].innerHTML = "OK";
            errors[i].style.color = "green";
            form[i].style.border = '2px solid rgb(26, 165, 26)';
            checks[i].style.display = 'block';
            cross[i].style.display = 'none';
        }
        if (form[0].value.length < 5 || form[0].value.length > 17) {
            form[0].style.border = '2px solid red';
            cross[0].style.display = 'block';
            checks[0].style.display = 'none';
            errors[0].style.color = "red";

            errors[0].innerHTML = "The name must be between 5 and 16 characters";

        } else {
            errors[0].innerHTML = "";
        }
    }

    if (form[1].value < 1 || form[1].value > 15) {
        errors[1].innerHTML = "The count must be between 5 and 16 characters";
        form[1].style.border = '2px solid red';
        cross[1].style.display = 'block';
        checks[1].style.display = 'block';
        errors[1].style.color = "red";
    } else {
        errors[1].innerHTML = "";
    }

    if (form[2].value === 'Chocolate' && form[4].value === 'Dairy Free') {
        errors[4].innerHTML = 'Chocolate cup cakces have diary';
        cross[4].style.display = 'block';
        errors[4].style.color = "red";
        form[4].style.border = '2px solid red';
        checks[4].style.display = 'none';
    }
    if (form[2].value === 'Pecan' && form[4].value === 'Nut Free') {
        errors[4].innerHTML = 'Pecan cubcakes have nuts';
        cross[4].style.display = 'block';
        errors[4].style.color = "red";
        form[4].style.border = '2px solid red';
        checks[4].style.display = 'none';
    }
    if (form[2].value === 'Chocolate' && form[3].value === '4:00 PM') {
        errors[2].innerHTML = 'This type of cake cannot be delivered at 4 PM';
        cross[2].style.display = 'block';
        errors[2].style.color = "red";
        form[2].style.border = '2px solid red';
        checks[2].style.display = 'none';
    }
}

function show_storage() {
    username.textContent = `Welcome ${localStorage.getItem("name")}!`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    localStorage.setItem("name", userName.value);
})