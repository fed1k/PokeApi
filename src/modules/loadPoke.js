import getPokeDesc from './descript.js';
import { getInfo } from './APIcall.js';

const loadPopup = (pokeId, type) => {
  getPokeDesc(pokeId)
    .then((poke) => {
      const loadCont = document.querySelectorAll('.pokeLoad');
      loadCont[0].innerHTML = '';
      loadCont[1].innerHTML = '';

      // Image
      const pokeImage = document.createElement('div');
      pokeImage.classList = 'rsvDiv pokeImg';
      pokeImage.innerHTML = `<img src=${poke.image} alt="pikachu">`;

      // Descript
      const pokeInfo = document.createElement('div');
      pokeInfo.classList = 'rsvDiv info';
      pokeInfo.innerHTML = `
      <h2 class="pokeName">${poke.name}</h2>
      <ul class="description">
        <li class="descEl"><span class="attName">Type</span><span class="attValue">${poke.type}</span></li>
        <li class="descEl"><span class="attName">Abilities</span><span class="attValue">${poke.abilities}</span></li>
        <li class="descEl"><span class="attName">Height</span><span class="attValue">${poke.height}</span></li>
        <li class="descEl"><span class="attName">Weight</span><span class="attValue">${poke.weight}</span></li>
      </ul>
      `;

      // Reservations
      const pokeReserv = document.createElement('div');
      pokeReserv.classList = 'rsvDiv reservation';
      const ReservTitle = document.createElement('h3');

      const rsvList = document.createElement('ul');
      rsvList.className = 'rsvList';

      const infoType = type === 'Comment' ? '/comments' : '/reservations';

      getInfo(poke.name, infoType).then((items) => {
        const itemsCount = items.length !== undefined ? items.length : 0;
        ReservTitle.innerHTML = `${type}s (<span class="rsvCount">${itemsCount}</span>)`;
        items.forEach((item) => {
          let itemContainer = '';
          if (infoType === '/comments') {
            itemContainer = `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
          } else {
            itemContainer = `<li>${item.date_start} - ${item.date_end} by ${item.username}</li>`;
          }
          rsvList.innerHTML += itemContainer;
        });
      });

      pokeReserv.appendChild(ReservTitle);
      pokeReserv.appendChild(rsvList);

      if (type === 'Comment') {
        loadCont[0].appendChild(pokeImage);
        loadCont[0].appendChild(pokeInfo);
        loadCont[0].appendChild(pokeReserv);
      } else if (type === 'Reservation') {
        loadCont[1].appendChild(pokeImage);
        loadCont[1].appendChild(pokeInfo);
        loadCont[1].appendChild(pokeReserv);
      }

      const rsvCount = pokeReserv.querySelector('rsvCount');
      rsvCount.innerHTML = 5;
    });
};

export default loadPopup;
