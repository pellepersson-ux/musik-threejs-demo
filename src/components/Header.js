export function Header(state) {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="header-content">
      <a href="/" class="logo" data-link aria-label="Tonverkstan Hem">
        Tonverkstan 🎵
      </a>
      
      <nav class="main-nav" aria-label="Huvudmeny">
        <ul>
          <li><a href="/" class="${state.currentPage === '/' ? 'active' : ''}" data-link>Hem</a></li>
          <li><a href="/instrument" class="${state.currentPage === '/instrument' ? 'active' : ''}" data-link>Instrument</a></li>
          <li><a href="/historia" class="${state.currentPage === '/historia' ? 'active' : ''}" data-link>Historia</a></li>
          <li><a href="/teori" class="${state.currentPage === '/teori' ? 'active' : ''}" data-link>Teori</a></li>
          <li><a href="/spel" class="${state.currentPage === '/spel' ? 'active' : ''}" data-link>Spel</a></li>
        </ul>
      </nav>

      <div class="header-controls">
        <button class="theme-toggle" aria-label="Växla tema">
          ${state.isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  `;

  const themeToggle = header.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('toggle-theme'));
  });

  return header;
}