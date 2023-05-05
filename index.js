// Import stylesheets
import './style.css';

const nameInput = document.getElementById('#name');
const phoneInput = document.getElementById('#phone');
const addBtn = document.getElementById('#addBtn');

function addData() {
  // event.preventDefault();
  const newPerson = {
    name: nameInput.value,
    phone: phoneInput.value,
  };
  const newBlock = document.createElement('div');
  const cardContainer = document.getElementsByClassName('.container');
  newBlock.classList.add('card');
  newBlock.innerHTML = `<div class="card__field">${nameInput.value}</div><div class="card__field">${phoneInput.value}</div>`;
  cardContainer.appendChild(newBlock);
}

addBtn.addEventListener('click', addData);
