import './style.scss';
import createPopup from './modules/createPopup.js';
import loadPopup from './modules/loadPoke.js';

createPopup('Comment');
createPopup('Reservation');

const popBox = document.querySelectorAll('.popUp');
const rsvBtn = document.querySelectorAll('.showRsv')[0];
const cmntBtn = document.querySelectorAll('.showCmnt')[0];

cmntBtn.addEventListener('click', () => {
  popBox[0].classList.add('showFlex');
  loadPopup('pikachu', 'Comment');
});

rsvBtn.addEventListener('click', () => {
  popBox[1].classList.add('showFlex');
  loadPopup('pikachu', 'Reservation');
});
