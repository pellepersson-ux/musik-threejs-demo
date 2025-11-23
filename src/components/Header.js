export function Header(state) {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="header-content">
      <a href="/" class="logo" data-link aria-label="Tonverkstan Hem">
        <span class="logo-icon">🎵</span>
        Tonverkstan
      </a>
      
      <nav class="main-nav" aria-label="Huvudmeny">
        <ul>
          <li><a href="/" class="${state.currentPage === '/' ? 'active' : ''}" data-link>Hem</a></li>
          <li><a href="/spel" class="${state.currentPage === '/spel' ? 'active' : ''}" data-link>Spel</a></li>
          <li><a href="/larare" class="${state.currentPage === '/larare' ? 'active' : ''}" data-link>Lärare</a></li>
          <li><a href="/om" class="${state.currentPage === '/om' ? 'active' : ''}" data-link>Om</a></li>
        </ul>
      </nav>

      <div class="header-controls">
        <button class="theme-toggle" aria-label="Växla tema">
          ${state.isDark ? '☀️' : '🌙'}
        </button>
        ${state.isTeacher ? '<span class="teacher-badge" title="Lärarläge aktivt">Lärare</span>' : ''}
      </div>
    </div>
  `;

  const themeToggle = header.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('toggle-theme'));
  });

  return header;
}
