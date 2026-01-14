import './style.css';
// OBS: Kontrollera att sökvägarna stämmer till dina filer!
import { Game } from './src/pages/Game.js';
import { WorldMusic } from './WorldMusic.js';

// Hämta app-containern och knapparna
const app = document.querySelector('#app');
const btnHome = document.querySelector('#nav-home');
const btnGame = document.querySelector('#nav-game');
const btnWorld = document.querySelector('#nav-world');

// Funktion för att byta sida
function renderPage(page) {
  app.innerHTML = ''; // Rensar bara innehållet i app-rutan, INTE menyn!

  if (page === 'home') {
    app.innerHTML = `
      <div style="color: white; text-align: center; padding-top: 200px; font-family: sans-serif;">
        <h1>Välkommen till Tonverkstan! 🎶</h1>
        <p>Välj "Spel" eller "Världsmusik" i menyn ovan.</p>
      </div>
    `;
  }
  else if (page === 'game') {
    // Om Game() returnerar ett element, lägg till det
    const gameContent = Game();
    app.appendChild(gameContent);
  }
  else if (page === 'world') {
    // Om WorldMusic() returnerar ett element, lägg till det
    const worldContent = WorldMusic();
    app.appendChild(worldContent);
  }
}

// Lyssna på klick (om knapparna finns)
if (btnHome) btnHome.addEventListener('click', () => renderPage('home'));
if (btnGame) btnGame.addEventListener('click', () => renderPage('game'));
if (btnWorld) btnWorld.addEventListener('click', () => renderPage('world'));

// Starta på startsidan
renderPage('home');