import './style.scss';
import arrayOfCards from './data.js';
import movieImage from './movieImage.png';

const main = document.querySelector('.main');

for (let i = 0; i < arrayOfCards.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${movieImage}"></img>
    <p>${arrayOfCards[i].title}<i class="far fa-heart"></i></p>
    <p class="likeCounts">likes${arrayOfCards[i].likeCount}</p>
    <button type="button" class="home-button comment-buttons">Comments</button>
    <button type="button" class="home-button reservation-buttons">Reservations</button>
  `;
  main.appendChild(card);
}

const like = document.querySelectorAll('.far');
like.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('fas');
  });
});
