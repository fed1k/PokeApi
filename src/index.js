import './style.scss';
import arrayOfCards from './data.js';

const main = document.querySelector('.main');

for (let i = 0; i < arrayOfCards.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${arrayOfCards[i].imgSrc}"></img>
    <p>${arrayOfCards[i].title}<i class="far fa-heart"></i></i></p>
    <p class="likeCounts">likes${arrayOfCards[i].likeCount}</p>
    <button type="button">Comments</button>
    <button type="button">Reservations</button>
  `;
  main.appendChild(card);
}
