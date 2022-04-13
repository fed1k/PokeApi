/**
 * @jest-environment jsdom
 */

import createPopup from '../createPopup.js';

beforeAll(() => {
  document.body.innerHTML = `
  <body id="body">
    <header>
      <nav>
        <div class="hamburger-menu menu-btn">
          <div class="hamburger-items1"></div>
          <div class="hamburger-items2"></div>
          <div class="hamburger-items3"></div>
        </div>
        <ul class="nav-list-container">
          <li class="nav-list">Spaceships</li>
          <li class="nav-list">Planets</li>
          <li class="nav-list">Races</li>
        </ul>
      </nav>
    </header>

    <section class="main"></section>

    <footer>
      <p>Created by Microverse under CC license</p>
    </footer>
  </body>`;
  createPopup('Reservation');
})

describe('Create PopUp', () => {
  test('Add card to DOM', () => {
    expect(document.querySelectorAll('.popUp')).toHaveLength(1);
  });

  test('X click remove showFlex class', () => {
    const close = document.querySelector('.close');
    const popUp =  document.querySelector('.popUp');
    close.click();

    expect(popUp.classList.value).toBe('popUp');
  });

  test('Ousite click remove showFlex class', () => {
    const close = document.querySelector('.close');
    const popUp =  document.querySelector('.popUp');
    popUp.click();

    expect(popUp.classList.value).toBe('popUp');
  });
});
