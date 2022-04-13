import rsvSubmit from './rsvFormVal.js';

const body = document.querySelector('#body');

const createPopup = (type) => {
  const popUp = document.createElement('div');

  popUp.classList = 'popUp';
  popUp.innerHTML = `<section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
  </section>`;

  // Hide card
  const close = popUp.querySelector('.close');
  close.addEventListener('click', () => {
    popUp.classList = 'popUp';
  });

  // Load Container
  const loadCont = document.createElement('div');
  loadCont.classList = 'pokeLoad';

  // Image
  const pokeImage = document.createElement('div');
  pokeImage.classList = 'rsvDiv pokeImg';
  pokeImage.innerHTML = '<img src="https://imagenpng.com/wp-content/uploads/2016/09/Pikachu-png-1-635x6241.png" alt="pikachu">';

  // Descript
  const pokeInfo = document.createElement('div');
  pokeInfo.classList = 'rsvDiv info';
  pokeInfo.innerHTML = `<h2 class="pokeName">name</h2>
  <ul class="description">
    <li class="descEl"><span class="attName">Type</span><span class="attValue">type</span></li>
    <li class="descEl"><span class="attName">Abilities</span><span class="attValue">abilities</span></li>
    <li class="descEl"><span class="attName">Height</span><span class="attValue">height</span></li>
    <li class="descEl"><span class="attName">Weight</span><span class="attValue">weight</span></li>
  </ul>`;

  // Reservations
  const pokeReserv = document.createElement('div');
  pokeReserv.classList = 'rsvDiv reservation';
  pokeReserv.innerHTML = `<h3>${type}s <span class="rsvCount">(2)</span></h3>
    <ul class="rsvList">
      <li>03/11/2021 - 03/12/2021 by Alex</li>
      <li>03/14/2021 - 03/16/2021 by Mia</li>
    </ul>`;

  const rsvForm = document.createElement('form');

  // Form comment
  if (type === 'Comment') {
    rsvForm.classList = 'rsvDiv reserve';
    rsvForm.innerHTML = `<h3>Add a ${type}</h3>
    <input class="input" type="text" name="name" value="" required placeholder="Your Name">
    <textarea class="input" name="Message" maxlength="250" required placeholder="Your Insights"></textarea>
    <input class="rsvBtn" type="submit" name="Comment" value="Comment">`;
  }

  // Form reservation
  if (type === 'Reservation') {
    rsvForm.classList = 'rsvDiv reserve';
    rsvForm.innerHTML = `<h3>Add a ${type}</h3>
    <input class="input" type="text" name="name" value="" required placeholder="Your Name">
    <input class="input" type="text" name="dateStart" value="" required placeholder="Start date (mm/dd/yyyy)">
    <input class="input" type="text" name="dateEnd" value="" height="58px" placeholder="End date (mm/dd/yyyy)">
    <input class="rsvBtn" type="submit" name="Reservation" value="Reserve">`;
  }

  // Apendding elements
  popUp.querySelector('section').appendChild(loadCont);
  popUp.querySelector('section').appendChild(rsvForm);
  loadCont.appendChild(pokeImage);
  loadCont.appendChild(pokeInfo);
  loadCont.appendChild(pokeReserv);
  body.appendChild(popUp);

  // Form validation listener
  rsvSubmit(rsvForm, rsvForm.querySelector(':last-child').name);
};

export default createPopup;