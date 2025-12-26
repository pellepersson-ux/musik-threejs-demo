import './style.css';

// 1. IMPORTERA BARA DE SIDOR VI HAR
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js';
import { Game } from './pages/Game.js'; // Vi importerar koden från Game.js...

// Importera komponenter
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HelpOverlay } from './components/HelpOverlay.js';

const app = document.querySelector('#app');

const state = {
  currentPage: window.location.pathname,
};

// 2. HÄR ÄR DIN SITEMAP (Routes)
// Vi kopplar länken (vänster) till koden (höger)
const routes = {
  '/': Home,
  '/instrument': Instrument,
  '/spel': Game,  // ...men länken heter /spel för att det är snyggt!
};

function render() {
  app.innerHTML = '';

  // Lägg till Header
  app.appendChild(Header(state));

  // Lägg till Huvudinnehåll
  const main = document.createElement('main');
  main.className = 'site-main';

  // Hämta rätt sida från listan. 
  // Om länken inte finns i listan (t.ex. gamla länkar), visa Home.
  const PageComponent = routes[state.currentPage] || Home;

  try {
    main.appendChild(PageComponent());
  } catch (error) {
    console.error("Kunde inte ladda sidan:", error);
    main.innerHTML = `<h1>Oups!</h1><p>Något gick fel.</p>`;
  }

  app.appendChild(main);

  // Lägg till Footer och Hjälp
  app.appendChild(Footer());
  app.appendChild(HelpOverlay());
}

// Rita ut sidan
render();

// Hantera bakåt-knappen
window.addEventListener('popstate', () => {
  state.currentPage = window.location.pathname;
  render();
});