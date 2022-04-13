import './style.scss';
import { loadLikes, postLike, getLikes } from './APIcall.js';
// import arrayOfCards from './data.js';
// import movieImage from './movieImage.png';
// import { get } from 'lodash';

// const array = [];
// const getImage = async (link) => {

//   array.push(json.sprites.front_default);
// };

// array.forEach((element) => {
//   console.log(element);
// });

const getData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const json = await response.json();
  const main = document.querySelector('.main');
  for (let i = 0; i < 18; i += 1) {
    const getImage = async () => {
      const response1 = await fetch(json.results[i].url);
      const json2 = await response1.json();
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <img src="${json2.sprites.front_default}"></img>
      <p>${json.results[i].name}<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes ${5}</p>
      <button type="button" class="home-button comment-buttons">Comments</button>
      <button type="button" class="home-button reservation-buttons">Reservations</button>
  `;
      main.appendChild(card);
      const heartIcon = card.querySelector('.far');
      heartIcon.addEventListener('click', () => {
        postLike(json.results[i].name);
      });
    };
    getImage();
  }
};
getData();

//
const hamburgerBtn = document.querySelector('.hamburger-menu');

const ul = document.createElement('div');
ul.innerHTML = `
  <ul id="sidebarList-items">
    <li>Spaceships</li>
    <li class="unvisible">Planets</li>
    <li class="unvisible">Races</li>
  </ul>
  <div class="empty"></div>
`;
ul.className = 'sidebar';
const nav = document.querySelector('nav');
nav.appendChild(ul);

const firstMenuBtn = document.querySelector('.menu-btn');
hamburgerBtn.addEventListener('click', () => {
  ul.classList.add('sidebar-active');
});

const empty = document.querySelector('.empty');
empty.addEventListener('click', () => {
  ul.classList.remove('sidebar-active');
  firstMenuBtn.style.display = 'block';
});

// console.log(arrayOfCards);
