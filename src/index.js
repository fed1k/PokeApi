import './style.scss';
import createPopup from './modules/createPopup.js';
import loadPopup from './modules/loadPoke.js';

createPopup('Comment');

const popBox = document.querySelectorAll('.popUp');
const btn = document.querySelector('#showRsv');

btn.addEventListener('click', () => {
  popBox[0].classList.add('showFlex');
  loadPopup('pikachu');
});
