$(document).ready(show_cupcakes);
const submitButton = document.querySelector('.submit_button');
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
const inputNameRegex = /[A-z]{5,16}$/;
var cup_cakes = [
    { "name": "Chocolate", "calories": "high", "weight": "200gm" },
    { "name": "Carrot", "calories": "medium", "weight": "150gm" },
    { "name": "Banana", "calories": "high", "weight": "200gm" },
    { "name": "Strawberry", "calories": "low", "weight": "160gm" },
    { "name": "Peanut", "calories": "medium", "weight": "200gm" }
];

const arrayOfCakes = JSON.parse(JSON.stringify(cup_cakes));

function show_cupcakes() {
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

function showMessageError(index, message) {
    form[index].classList.add('red_alert');
    form[index].classList.remove('green_alert');
    errors[index].innerHTML = message;
    errors[index].classList.add('red_text');
    cross[index].classList.add('appear');
    checks[index].classList.remove('appear');
}

function removeMessageError(index) {
    form[index].classList.add('green_alert');
    errors[index].innerHTML = "OK";
    errors[index].classList.remove('red_text');
    errors[index].classList.add('green_text');
    cross[index].classList.remove('appear');
    checks[index].classList.add('appear');
}

function validate() {
    submitButton.addEventListener('click', () => {
        if (!inputNameRegex.test(form[0].value)) {
            showMessageError(0, "The name must be netween 5 and 16 characters");
        } else {
            removeMessageError(0);
        }
        ////////////////////////////////////////
        if (form[1].value < 1 || form[1].value > 15) {
            showMessageError(1, "the count must be between 1 and 15");
        } else {
            removeMessageError(1);
        }
        ////////////////////////////////////////
        if (form[2].value === "None") {
            showMessageError(2, "Please choose type!");
        } else {
            removeMessageError(2);
        }
        ////////////////////////////////////////
        if (form[3].value === "None") {
            showMessageError(3, "Please choose delivery time!");
        } else if (form[2].value === 'Chocolate' && form[3].value === '4:00 PM') {
            showMessageError(2, "this type of cake cannot be delivered at 4 PM.")
        } else {
            removeMessageError(3);
        }
        ////////////////////////////////////////
        if (form[4].value === "None") {
            removeMessageError(4)
        } else if (form[2].value === 'Chocolate' && form[4].value === 'Dairy Free') {
            showMessageError(2, "this type of cake is not dairy free.")
        } else if (form[2].value === 'Pecan' && form[4].value === 'Nut Free') {
            showMessageError(2, "this type of cake is not nut free.")
        } else {
            removeMessageError(2);
        }
    })
}

function show_storage() {
    username.textContent = `Welcome ${localStorage.getItem("name")}!`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    localStorage.setItem("name", userName.value);
    form[0].setAttribute("required", "true");
    form[1].setAttribute("required", "true");
})