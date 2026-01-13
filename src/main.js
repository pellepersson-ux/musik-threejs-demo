import './style.css';

// 1. IMPORTERA ALLA SIDOR
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js';
import { Gitarr } from './pages/Gitarr.js';
import { Bas } from './pages/Bas.js';
import { Piano } from './pages/Piano.js';
import { Trummor } from './pages/Trummor.js';
import { Ensemble } from './pages/Ensemble.js';
import { History } from './pages/History.js';
import { WorldMusic } from './pages/WorldMusic.js'; // Denna är viktig!
import { Theory } from './pages/Theory.js';
import { Game } from './pages/Game.js';

// Importera komponenter
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HelpOverlay } from './components/HelpOverlay.js';

const app = document.querySelector('#app');

const state = {
  currentPage: window.location.pathname,
};

// 2. KOPPLA LÄNKAR TILL SIDOR (ROUTER)
// Här bestämmer du vilken URL som visar vilken sida
const routes = {
  '/': Home,
  '/home': Home, // Bra att ha om någon skriver /home
  '/instrument': Instrument,
  '/instrument/bas': Bas,
  '/instrument/gitarr': Gitarr,
  '/instrument/piano': Piano,
  '/instrument/trummor': Trummor,
  '/ensemble': Ensemble,
  '/historia': History,
  '/world': WorldMusic, // <--- HÄR LÄGGER VI TILL VÄRLDSMUSIKEN!
  '/teori': Theory,
  '/spel': Game,
  '/quiz': Game // Om du vill att /quiz också ska gå till spelet
};

// 3. RENDER-FUNKTIONEN (Bara EN funktion!)
function render() {
  app.innerHTML = '';

  // Lägg till Header
  app.appendChild(Header(state));

  const main = document.createElement('main');
  main.className = 'site-main';

  // Hitta rätt sida baserat på adressen. Finns den inte? Visa Home.
  const PageComponent = routes[state.currentPage] || Home;

  try {
    main.appendChild(PageComponent());
  } catch (error) {
    console.error("Kunde inte ladda sidan:", error);
    main.innerHTML = `<h1>Oups!</h1><p>Något gick fel med sidan: ${state.currentPage}</p>`;
  }

  // Lägg till main, footer och hjälp
  app.appendChild(main);
  app.appendChild(Footer());
  app.appendChild(HelpOverlay());
}

// 4. NAVIGATIONSLOGIK (Så sidan inte laddar om)

// Hantera bakåt/framåt i webbläsaren
window.addEventListener('popstate', () => {
  state.currentPage = window.location.pathname;
  render();
});

// Hantera klick på länkar
document.body.addEventListener('click', e => {
  // Kolla om vi klickade på en länk med attributet data-link
  if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
    e.preventDefault();

    const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
    const href = link.getAttribute('href');

    // Uppdatera adressfältet utan att ladda om
    history.pushState(null, null, href);

    // Uppdatera vårt state och rita om sidan
    state.currentPage = href;
    render();
  }
});

// 5. STARTA APPEN
render();