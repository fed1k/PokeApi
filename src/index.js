import './style.scss';
import createRsvPopup from './modules/createReservePopup.js';
import loadPopup from './modules/loadPoke.js';

createRsvPopup();

const popBox = document.querySelectorAll('.popUp');
const btn = document.querySelector('#showRsv');

btn.addEventListener('click', () => {
  popBox[0].classList.add('showFlex');
  loadPopup('pikachu');
});
