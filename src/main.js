import './style.css';

// 1. IMPORTERA ALLA 5 SIDOR
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js';
import { History } from './pages/History.js'; // NY
import { Theory } from './pages/Theory.js';   // NY
import { Game } from './pages/Game.js';

import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HelpOverlay } from './components/HelpOverlay.js';

const app = document.querySelector('#app');

const state = {
  currentPage: window.location.pathname,
};

// 2. KOPPLA LÄNKAR TILL SIDOR
const routes = {
  '/': Home,
  '/instrument': Instrument,
  '/historia': History, // NY
  '/teori': Theory,     // NY
  '/spel': Game,
};

function render() {
  app.innerHTML = '';
  app.appendChild(Header(state));

  const main = document.createElement('main');
  main.className = 'site-main';

  const PageComponent = routes[state.currentPage] || Home;

  try {
    main.appendChild(PageComponent());
  } catch (error) {
    console.error("Kunde inte ladda sidan:", error);
    main.innerHTML = `<h1>Oups!</h1><p>Något gick fel.</p>`;
  }

  app.appendChild(main);
  app.appendChild(Footer());
  app.appendChild(HelpOverlay());
}

render();

window.addEventListener('popstate', () => {
  state.currentPage = window.location.pathname;
  render();
});