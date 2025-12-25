import './style.css';
import './styles/layout.css';

// Komponenter
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HelpOverlay } from './components/HelpOverlay.js';

// Sidor
import { Home } from './pages/Home.js';
import { Instrument } from './pages/Instrument.js'; // NY!
import { Spel } from './pages/Spel.js'; // Se till att denna fil finns hos dig, annars kraschar det
import { Larare } from './pages/Larare.js';
import { Om } from './pages/Om.js';

const app = document.querySelector('#app');

// State (Håller koll på läget)
const state = {
  currentPage: window.location.pathname,
  isTeacher: new URLSearchParams(window.location.search).has('teacher'),
  isDark: localStorage.getItem('theme') === 'dark',
};

// Sätt tema direkt
if (state.isDark) document.body.classList.add('dark');

// Här bestämmer vi vilken sida som visas för vilken länk
const routes = {
  '/': Home,
  '/instrument': Instrument,
  '/spel': Spel,
  '/larare': Larare,
  '/om': Om,
};

function navigateTo(url) {
  history.pushState(null, null, url);
  state.currentPage = url;
  render();
}

function render() {
  app.innerHTML = '';

  // 1. Lägg till Header
  app.appendChild(Header(state));

  // 2. Lägg till Huvudinnehåll
  const main = document.createElement('main');
  main.className = 'site-main';

  // Välj rätt sida från listan, om den inte finns, visa Home
  const PageComponent = routes[state.currentPage] || Home;

  // Försök rendera sidan
  try {
    main.appendChild(PageComponent());
  } catch (error) {
    console.error("Kunde inte ladda sidan:", error);
    main.innerHTML = "<h1>Oups!</h1><p>Något gick fel när sidan skulle laddas.</p>";
  }

  app.appendChild(main);

  // 3. Lägg till Footer och Hjälp
  app.appendChild(Footer());
  app.appendChild(HelpOverlay());
}

// Starta allt när sidan laddat
document.addEventListener('DOMContentLoaded', () => {
  // Lyssna på klick på länkar
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  render();
});

// Lyssna på Bakåt-knappen i webbläsaren
window.addEventListener('popstate', () => {
  state.currentPage = window.location.pathname;
  render();
});

// Lyssna på Tema-byte
window.addEventListener('toggle-theme', () => {
  state.isDark = !state.isDark;
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
  render();
});