import './css/styles.css';
import allFood from './utils/menu.json';
import сardItem from './templates/menu-items.hbs';
import Theme from './utils/theme-changer';

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
  switch: document.querySelector('.switch__input'),
};

function makeMenu(allFood) {
  const sort = allFood.map(card => сardItem(card)).join('');
  refs.menu.insertAdjacentHTML('beforeend', sort);
}

makeMenu(allFood);

// Memorized theme------------------

const defaultTheme = Theme.LIGHT;

let activeTheme;

function reloadTheme() {
  activeTheme = localStorage.getItem('theme');
  if (activeTheme && activeTheme !== defaultTheme) {
    refs.body.classList.add(activeTheme);
    refs.switch.setAttribute('checked', true);
  }
}

reloadTheme();

// Changer theme--------------------

function themeChanger() {
  if (activeTheme === Theme.LIGHT) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    activeTheme = Theme.DARK;
    refs.switch.setAttribute('checked', true);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    activeTheme = Theme.LIGHT;
    refs.switch.setAttribute('checked', false);
  }
}

refs.switch.addEventListener('change', themeChanger);
