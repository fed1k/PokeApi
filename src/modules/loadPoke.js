import getPokeDesc from './descript.js';

const loadPopup = (pokeId) => {
  getPokeDesc(pokeId)
    .then((poke) => {
      const loadCont = document.querySelector('.pokeLoad');
      loadCont.innerHTML = '';

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
      pokeReserv.innerHTML = `<h3>Reservations <span class="rsvCount">(2)</span></h3>
      <ul class="rsvList">
        <li>03/11/2021 - 03/12/2021 by Alex</li>
        <li>03/14/2021 - 03/16/2021 by Mia</li>
      </ul>`;

      loadCont.appendChild(pokeImage);
      loadCont.appendChild(pokeInfo);
      loadCont.appendChild(pokeReserv);
    });
};

export default loadPopup;
