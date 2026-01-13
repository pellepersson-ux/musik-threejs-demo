import './style.css';

// 1. IMPORTERA ALLA 5 SIDOR
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js';
import { Gitarr } from './pages/Gitarr.js';
import { Bas } from './pages/Bas.js';
import { Piano } from './pages/Piano.js';
import { Trummor } from './pages/Trummor.js';
import { Ensemble } from './pages/Ensemble.js';
import { History } from './pages/History.js';
import { WorldMusic } from './pages/WorldMusic.js';
import { Theory } from './pages/Theory.js';
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
  '/instrument/bas': Bas,
  '/instrument/gitarr': Gitarr,
  '/instrument/piano': Piano,
  '/instrument/trummor': Trummor,
  '/ensemble': Ensemble,
  '/historia': History,
  '/teori': Theory,
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

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = ''; // Rensa föregående sida

  // Här kollar vi vilken adress (URL) vi är på
  // Om du kör lokalt kanske adressen bara är "/world"

  if (state.currentPage === '/' || state.currentPage === '/home') {
    app.appendChild(Home());
  }
  else if (state.currentPage === '/history') {
    app.appendChild(History());
  }
  else if (state.currentPage === '/world') {  // <--- LÄGG TILL DENNA!
    app.appendChild(WorldMusic());
  }
  else if (state.currentPage === '/quiz') {
    app.appendChild(Quiz());
  }
}