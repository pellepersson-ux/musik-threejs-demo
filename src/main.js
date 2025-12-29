import './style.css';

// 1. IMPORTERA ALLA 5 SIDOR
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js';
import { Gitarr } from './pages/Gitarr.js';
import { Bas } from './pages/Bas.js';
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
  '/instrument/bas': Bas,  // <--- LÄGG TILL DENNA RAD
  '/instrument/gitarr': Gitarr,
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

// Hantera klick på länkar så sidan inte laddar om (SPA-beteende)
document.body.addEventListener('click', e => {
  if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
    e.preventDefault();

    // Hitta länken (om man klickade på ikonen inuti a-taggen)
    const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
    const href = link.getAttribute('href');

    history.pushState(null, null, href);
    state.currentPage = href;
    render();
  }
});