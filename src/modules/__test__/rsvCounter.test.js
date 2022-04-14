/**
 * @jest-environment jsdom
 */

import loadPopup from '../loadPoke.js';

const descript = require('../descript.js');
const apiCall = require('../APIcall.js');

beforeAll(() => {
  document.body.innerHTML = `<body id="body" data-new-gr-c-s-check-loaded="14.1056.0" data-gr-ext-installed="">
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
    <div class="sidebar">
  <ul id="sidebarList-items">
    <li>Spaceships</li>
    <li class="unvisible">Planets</li>
    <li class="unvisible">Races</li>
  </ul>
  <div class="empty"></div>
</div></nav>
  </header>

  <section class="main"><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
      <p>bulbasaur<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 141</p>
  <button class="home-button comment-buttons" name="bulbasaur">Comments</button><button class="home-button reservation-buttons" name="bulbasaur">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png">
      <p>ivysaur<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 90</p>
  <button class="home-button comment-buttons" name="ivysaur">Comments</button><button class="home-button reservation-buttons" name="ivysaur">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png">
      <p>venusaur<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 47</p>
  <button class="home-button comment-buttons" name="venusaur">Comments</button><button class="home-button reservation-buttons" name="venusaur">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png">
      <p>charmander<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 24</p>
  <button class="home-button comment-buttons" name="charmander">Comments</button><button class="home-button reservation-buttons" name="charmander">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png">
      <p>charmeleon<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 38</p>
  <button class="home-button comment-buttons" name="charmeleon">Comments</button><button class="home-button reservation-buttons" name="charmeleon">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
      <p>charizard<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 7</p>
  <button class="home-button comment-buttons" name="charizard">Comments</button><button class="home-button reservation-buttons" name="charizard">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png">
      <p>squirtle<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 2</p>
  <button class="home-button comment-buttons" name="squirtle">Comments</button><button class="home-button reservation-buttons" name="squirtle">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png">
      <p>wartortle<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 8</p>
  <button class="home-button comment-buttons" name="wartortle">Comments</button><button class="home-button reservation-buttons" name="wartortle">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png">
      <p>blastoise<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 6</p>
  <button class="home-button comment-buttons" name="blastoise">Comments</button><button class="home-button reservation-buttons" name="blastoise">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png">
      <p>caterpie<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 0</p>
  <button class="home-button comment-buttons" name="caterpie">Comments</button><button class="home-button reservation-buttons" name="caterpie">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png">
      <p>metapod<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 2</p>
  <button class="home-button comment-buttons" name="metapod">Comments</button><button class="home-button reservation-buttons" name="metapod">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png">
      <p>butterfree<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 20</p>
  <button class="home-button comment-buttons" name="butterfree">Comments</button><button class="home-button reservation-buttons" name="butterfree">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png">
      <p>weedle<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 4</p>
  <button class="home-button comment-buttons" name="weedle">Comments</button><button class="home-button reservation-buttons" name="weedle">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png">
      <p>kakuna<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 4</p>
  <button class="home-button comment-buttons" name="kakuna">Comments</button><button class="home-button reservation-buttons" name="kakuna">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png">
      <p>beedrill<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 4</p>
  <button class="home-button comment-buttons" name="beedrill">Comments</button><button class="home-button reservation-buttons" name="beedrill">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png">
      <p>pidgey<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 4</p>
  <button class="home-button comment-buttons" name="pidgey">Comments</button><button class="home-button reservation-buttons" name="pidgey">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png">
      <p>pidgeotto<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 4</p>
  <button class="home-button comment-buttons" name="pidgeotto">Comments</button><button class="home-button reservation-buttons" name="pidgeotto">Reservations</button></div><div class="card">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png">
      <p>pidgeot<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes 5</p>
  <button class="home-button comment-buttons" name="pidgeot">Comments</button><button class="home-button reservation-buttons" name="pidgeot">Reservations</button></div></section>

  <footer>
    <p>Created by Microverse under CC license</p>
  </footer>


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
