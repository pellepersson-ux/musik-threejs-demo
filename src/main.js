import './style.css';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js'; // Om du har kvar footer

// Importera alla sidor
import { Home } from './pages/Home.js'; // Se till att denna fil finns!
import { Game } from './pages/Game.js';
import { WorldMusic } from './pages/WorldMusic.js';
import { History } from './pages/History.js';       // Lägger till dessa tre
import { Theory } from './pages/Theory.js';
import { Instrument } from './pages/Instrument.js';
import { Ensemble } from './pages/Ensemble.js';

const app = document.querySelector('#app');

function renderPage(pageName) {
  app.innerHTML = '';
  app.appendChild(Header());

  const main = document.createElement('main');
  main.className = 'site-main';

  // Enkel "router" som väljer rätt sida
  switch (pageName) {
    case 'home':
      // Om Home.js krånglar, visar vi en enkel text istället för att krascha
      try { main.appendChild(Home()); }
      catch { main.innerHTML = '<h1>Hem</h1><p>Välkommen!</p>'; }
      break;
    case 'history':
      main.appendChild(History());
      break;
    case 'theory':
      main.appendChild(Theory());
      break;
    case 'instrument':
      main.appendChild(Instrument());
      break;
    case 'ensemble':
      main.appendChild(Ensemble());
      break;
    case 'game':
      main.appendChild(Game());
      break;
    case 'world':
      main.appendChild(WorldMusic());
      break;
    default:
      main.appendChild(Home());
  }

  app.appendChild(main);
  if (typeof Footer === 'function') app.appendChild(Footer());

  // Koppla event listeners till knapparna
  document.querySelector('#nav-home')?.addEventListener('click', () => renderPage('home'));
  document.querySelector('#nav-history')?.addEventListener('click', () => renderPage('history'));
  document.querySelector('#nav-theory')?.addEventListener('click', () => renderPage('theory'));
  document.querySelector('#nav-instrument')?.addEventListener('click', () => renderPage('instrument'));
  document.querySelector('#nav-ensemble')?.addEventListener('click', () => renderPage('ensemble'));
  document.querySelector('#nav-game')?.addEventListener('click', () => renderPage('game'));
  document.querySelector('#nav-world')?.addEventListener('click', () => renderPage('world'));
}

// Starta på hemsidan
renderPage('home');