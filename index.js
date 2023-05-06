// Import stylesheets
import './style.css';

const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');

const addBtn = document.querySelector('button');

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!phoneInput.value || !nameInput.value) {
    alert('Поля не заполнены!');
  } else {
    const cardContainer = document.querySelector('.card__container');
    const card = document.createElement('div');
    card.classList.add('card');

    const nameValue = document.createElement('div');
    nameValue.classList.add('card__field');
    nameValue.innerText = nameInput.value;

    const phoneValue = document.createElement('div');
    phoneValue.classList.add('card__field');
    phoneValue.innerText = phoneInput.value;

    card.appendChild(nameValue);
    card.appendChild(phoneValue);

    cardContainer.appendChild(card);
    // очистка полей
    nameInput.value = '';
    phoneInput.value = '';
  }
});
