import './style.css';
import './styles/layout.css';

// Import Components
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { HelpOverlay } from './components/HelpOverlay.js';

// Import Pages
import { Home } from './pages/Home.js';
import { Spel } from './pages/Spel.js';
import { Larare } from './pages/Larare.js';
import { Om } from './pages/Om.js';

const app = document.querySelector('#app');

// State
const state = {
  currentPage: window.location.pathname,
  isTeacher: new URLSearchParams(window.location.search).has('teacher'),
  isDark: localStorage.getItem('theme') === 'dark',
};

// Theme Init
if (state.isDark) {
  document.body.classList.add('dark');
}

// Router Configuration
const routes = {
  '/': Home,
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

  // Header
  // Re-render header to update active link state
  app.appendChild(Header(state));

  // Main Content
  const main = document.createElement('main');
  main.className = 'site-main';

  const PageComponent = routes[state.currentPage] || Home;
  main.appendChild(PageComponent());

  app.appendChild(main);

  // Footer
  app.appendChild(Footer());

  // Help Overlay
  const help = HelpOverlay();
  help.id = 'help-overlay';
  app.appendChild(help);
}

// Global Event Listeners

// 1. Navigation (SPA Link Interception)
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else if (e.target.closest('[data-link]')) {
      // Handle clicks on children of links (like the logo span)
      e.preventDefault();
      navigateTo(e.target.closest('[data-link]').href);
    }
  });

  render(); // Initial render
});

// 2. Browser Back/Forward
window.addEventListener('popstate', () => {
  state.currentPage = window.location.pathname;
  render();
});

// 3. Theme Toggle (Custom Event from Header)
window.addEventListener('toggle-theme', () => {
  state.isDark = !state.isDark;
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
  render(); // Re-render to update icon
});

// 4. Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'd') {
    window.dispatchEvent(new CustomEvent('toggle-theme'));
  }
  if (e.key.toLowerCase() === 't') {
    const url = new URL(window.location);
    if (state.isTeacher) {
      url.searchParams.delete('teacher');
    } else {
      url.searchParams.set('teacher', 'true');
    }
    window.location.href = url.toString(); // Reload needed for query param logic usually, or just state update
  }
  if (e.key.toLowerCase() === 'h') {
    const help = document.getElementById('help-overlay');
    if (help) {
      help.style.display = help.style.display === 'none' ? 'flex' : 'none';
    }
  }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}
