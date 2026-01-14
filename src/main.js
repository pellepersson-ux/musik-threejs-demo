import './style.css'; // Eller din styles-import
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js'; // Antar att denna finns baserat på bilderna
import { Home } from './pages/Home.js';
import { Game } from './pages/Game.js';
import { WorldMusic } from './pages/WorldMusic.js'; // Din nya sida

const app = document.querySelector('#app');

function renderPage(pageName) {
  // 1. Töm appen
  app.innerHTML = '';

  // 2. Lägg till Header (som nu har Världsmusik-knappen)
  app.appendChild(Header());

  // 3. Lägg till själva sidan
  const main = document.createElement('main');
  main.className = 'site-main';

  if (pageName === 'home') {
    // Om Home.js exporterar en funktion, kör den. Annars gör vi en enkel fallback.
    try {
      main.appendChild(Home());
    } catch (e) {
      main.innerHTML = '<h1>Välkommen hem!</h1><p>Klicka i menyn.</p>';
    }
  } else if (pageName === 'game') {
    main.appendChild(Game());
  } else if (pageName === 'world') {
    main.appendChild(WorldMusic());
  }

  app.appendChild(main);

  // 4. Lägg till Footer (om du vill ha den)
  // app.appendChild(Footer()); 

  // 5. Koppla händelser till knapparna i Headern
  // Vi måste göra detta EFTER att headern lagts till i DOM:en
  document.querySelector('#nav-home').addEventListener('click', () => renderPage('home'));
  document.querySelector('#nav-game').addEventListener('click', () => renderPage('game'));

  const worldBtn = document.querySelector('#nav-world');
  if (worldBtn) {
    worldBtn.addEventListener('click', () => renderPage('world'));
  }
}

// Starta appen på startsidan
renderPage('home');