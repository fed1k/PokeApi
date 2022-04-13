import getPokeDesc from './descript.js';

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
      pokeInfo.innerHTML = `<h2 class="pokeName">${poke.name}</h2>
    <ul class="description">
      <li class="descEl"><span class="attName">Type</span><span class="attValue">${poke.type}</span></li>
      <li class="descEl"><span class="attName">Abilities</span><span class="attValue">${poke.abilities}</span></li>
      <li class="descEl"><span class="attName">Height</span><span class="attValue">${poke.height}</span></li>
      <li class="descEl"><span class="attName">Weight</span><span class="attValue">${poke.weight}</span></li>
    </ul>`;

      // Reservations
      const pokeReserv = document.createElement('div');
      pokeReserv.classList = 'rsvDiv reservation';
      pokeReserv.innerHTML = `<h3>${type}s <span class="rsvCount">(2)</span></h3>
      <ul class="rsvList">
        <li>03/11/2021 - 03/12/2021 by Alex</li>
        <li>03/14/2021 - 03/16/2021 by Mia</li>
      </ul>`;

      if (type === 'Comment') {
        loadCont[0].appendChild(pokeImage);
        loadCont[0].appendChild(pokeInfo);
        loadCont[0].appendChild(pokeReserv);
      } else if (type === 'Reservation') {
        loadCont[1].appendChild(pokeImage);
        loadCont[1].appendChild(pokeInfo);
        loadCont[1].appendChild(pokeReserv);
      }
    });
};

export default loadPopup;
