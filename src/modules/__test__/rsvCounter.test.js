/**
 * @jest-environment jsdom
 */

import loadPopup from '../loadPoke.js';

const descript = require('../descript.js');
const apiCall = require('../APIcall.js');

beforeAll(() => {
  document.body.innerHTML = `<body id="body" data-new-gr-c-s-check-loaded="14.1056.0" data-gr-ext-installed="">

<div class="popUp"><section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
  <div class="pokeLoad"></div></section></div><div class="popUp showFlex"><section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
  <div class="pokeLoad"><div class="rsvDiv pokeImg"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="pikachu"></div><div class="rsvDiv info">
      <h2 class="pokeName">ivysaur</h2>
      <ul class="description">
        <li class="descEl"><span class="attName">Type</span><span class="attValue">grass</span></li>
        <li class="descEl"><span class="attName">Abilities</span><span class="attValue">overgrow</span></li>
        <li class="descEl"><span class="attName">Height</span><span class="attValue">1 m</span></li>
        <li class="descEl"><span class="attName">Weight</span><span class="attValue">13 kg</span></li>
      </ul>
      </div><div class="rsvDiv reservation"><h3>Reservations (<span class="rsvCount">3</span>)</h3><ul class="rsvList"><li>2022-05-10 - 2022-05-10 by Retky</li><li>2022-10-11 - 2022-10-15 by aaa</li><li>2022-10-14 - 2022-10-11 by adfd</li></ul></div><form class="rsvDiv reserve"><h3>Add a Reservation</h3><input class="input" id="name" type="text" name="name" required="" placeholder="Your Name"><input class="input" id="startDate" type="text" name="dateStart" required="" placeholder="Start date (mm/dd/yyyy)"><input class="input" id="endDate" type="text" name="dateStart" required="" placeholder="Start date (mm/dd/yyyy)"><input class="rsvBtn" id="rsvBtn" type="submit" name="Reservation" value="Reserve"></form></div></section></div></body>`;

  // Mock functions

  jest.spyOn(descript, 'getPokeDesc').mockReturnValue(Promise.resolve({
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    name: 'ivysaur',
    type: 'grass',
    abilities: 'overgrow',
    height: '1 m',
    weight: '13 kg',
  }));
  jest.spyOn(apiCall, 'getInfo').mockReturnValue(Promise.resolve([{ username: 'name', date_start: 'start', date_end: 'end' }])); // ONLY Return Oone element

  // Ejecution
  loadPopup('ivysaur', 'Reservation');
});

describe('Reservation Counter', () => {
  test('one', () => {
    const count = document.querySelector('.rsvCount');

    expect(count.innerHTML).toBe('1');
  });
});
