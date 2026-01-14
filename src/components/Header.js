export function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.style.padding = '1rem';
  header.style.background = '#222';
  header.style.color = 'white';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.borderBottom = '2px solid #444';

  header.innerHTML = `
    <div class="logo" style="font-weight: bold; font-size: 1.5rem;">Tonverkstan 🎶</div>
    <nav class="main-nav">
      <button id="nav-home" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">Hem 🏠</button>
      <button id="nav-game" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">Spel 🎮</button>
      <button id="nav-world" style="margin: 0 5px; padding: 8px 15px; cursor: pointer;">Världsmusik 🌍</button>
    </nav>
  `;

  return header;
}