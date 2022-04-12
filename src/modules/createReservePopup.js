import pokeDesc from './descript.js';

const body = document.querySelector('#body');

const createRsvPopup = () => {
  const popUp = document.createElement('div');

  popUp.classList.add('popUp');
  popUp.innerHTML = `<section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
    <div class="rsvDiv pokeImg"> <img src="https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-1-635x6241.png" alt="x"> </div>
    <div class="rsvDiv info">
      <h2 class="pokeName">${pokeDesc[0].name}</h2>
      <ul class="description">
        <li class="descEl"><span class="attName">Type</span><span class="attValue">${pokeDesc[0].type}</span></li>
        <li class="descEl"><span class="attName">Category</span><span class="attValue">${pokeDesc[0].category}</span></li>
        <li class="descEl"><span class="attName">Abilities</span><span class="attValue">${pokeDesc[0].abilities}</span></li>
        <li class="descEl"><span class="attName">Height</span><span class="attValue">${pokeDesc[0].height}</span></li>
        <li class="descEl"><span class="attName">Weight</span><span class="attValue">${pokeDesc[0].weight}</span></li>
      </ul>
    </div>
    <div class="rsvDiv reservation">
      <h3>Reservations <span class="rsvCount">(2)</span></h3>
      <ul class="rsvList">
        <li>03/11/2021 - 03/12/2021 by Alex</li> <!-- PART TO REPLACE -->
        <li>03/14/2021 - 03/16/2021 by Mia</li> <!-- PART TO REPLACE -->
      </ul>
    </div>
    <form class="rsvDiv reserve" action="index.html" method="post">
      <h3>Add a Reservation</h3>
      <input type="text" name="name" value="" required placeholder="Your Name">
      <input type="text" name="dateStart" value="" placeholder="Start date (mm/dd/yyyy)">
      <input type="text" name="dateEnd" value="" placeholder="End date (mm/dd/yyyy)">
      <input class="rsvBtn" type="submit" name="reservate" value="Reserve">
    </form>
  </section>`;

  body.appendChild(popUp);
};

export default createRsvPopup;
