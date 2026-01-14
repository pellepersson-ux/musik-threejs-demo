export function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';

  // Designinställningar
  header.style.padding = '1rem 2rem';
  header.style.background = '#1a1a1a'; // Mörkare bakgrund
  header.style.color = 'white';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between'; // Logga till vänster, meny till höger
  header.style.alignItems = 'center';
  header.style.borderBottom = '1px solid #333';
  header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';

  header.innerHTML = `
    <div class="logo" style="font-weight: 800; font-size: 1.8rem; letter-spacing: -1px; color: #4facfe;">
      Tonverkstan 🎶
    </div>
    <nav class="main-nav" style="display: flex; gap: 15px;">
      <button id="nav-home" class="nav-btn">Hem 🏠</button>
      <button id="nav-history" class="nav-btn">Historia 📜</button>
      <button id="nav-theory" class="nav-btn">Teori 🎼</button>
      <button id="nav-instrument" class="nav-btn">Instrument 🎻</button>
      <button id="nav-game" class="nav-btn">Spel 🎮</button>
      <button id="nav-world" class="nav-btn">Världsmusik 🌍</button>
    </nav>
    <style>
      /* CSS direkt här för enkelhetens skull */
      .nav-btn {
        background: transparent;
        color: #ccc;
        border: 1px solid transparent;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 20px;
        transition: all 0.3s ease;
        font-family: 'Outfit', sans-serif;
      }
      .nav-btn:hover {
        background: rgba(255,255,255,0.1);
        color: white;
        border-color: rgba(255,255,255,0.2);
        transform: translateY(-2px);
      }
    </style>
  `;

  return header;
}