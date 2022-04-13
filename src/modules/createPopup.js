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
  pokeImage.innerHTML = '<h3>Loading...</h3>';

  // Descript
  const pokeInfo = document.createElement('div');
  pokeInfo.classList = 'rsvDiv info';
  pokeInfo.innerHTML = `<h2 class="pokeName">Who is that pokemon?</h2>
  <ul class="description">Loading...</ul>`;

  // Reservations
  const pokeReserv = document.createElement('div');
  pokeReserv.classList = 'rsvDiv reservation';
  pokeReserv.innerHTML = `<h3>${type}s <span class="rsvCount">()</span></h3>
    <ul class="rsvList">Loading...</ul>`;

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
    <input class="input" type="text" name="dateEnd" value="" required placeholder="End date (mm/dd/yyyy)">
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
