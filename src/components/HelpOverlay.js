export function HelpOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'help-overlay';
  overlay.id = 'help-overlay'; // Ensure ID is set for toggling
  overlay.style.display = 'none';

  overlay.innerHTML = `
    <div class="help-content">
      <h2>Kortkommandon ⌨️</h2>
      <ul class="help-list">
        <li><kbd>T</kbd> <span>Växla Lärarvy</span></li>
        <li><kbd>D</kbd> <span>Växla Mörkt läge</span></li>
        <li><kbd>H</kbd> <span>Visa/Dölj denna hjälp</span></li>
      </ul>
      <button class="btn-primary" id="close-help">Stäng</button>
    </div>
  `;

  // Styles are best handled in CSS, but keeping inline for now as per existing pattern, 
  // but cleaning it up slightly.
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.85)',
    zIndex: '2000',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(4px)'
  });

  const content = overlay.querySelector('.help-content');
  Object.assign(content.style, {
    backgroundColor: 'var(--color-surface, #fff)',
    padding: '2rem',
    borderRadius: '1rem',
    maxWidth: '400px',
    width: '90%',
    color: 'var(--color-text, #000)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
  });

  overlay.querySelector('#close-help').onclick = () => {
    overlay.style.display = 'none';
  };

  // Close on click outside
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });

  return overlay;
}
