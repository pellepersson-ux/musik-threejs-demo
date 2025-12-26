export function Home() {
  const section = document.createElement('section');
  section.className = 'page-home';

  section.innerHTML = `
    <div class="hero-section">
      <div class="hero-content">
        <h1>Din Musikaliska Verkstad</h1>
        <p>Välkommen till Tonverkstan! En plats där du kan lära, skapa och spela musik. Upptäck instrument, lär dig historia eller utmana dig själv i ett spel.</p>
        <a href="/spel" class="cta-button" data-link>STARTA NU</a>
      </div>
      <div class="hero-image">
        🎸🎹🥁
      </div>
    </div>

    <div class="cards-section">
      <h2>Upptäck, Lär & Skapa</h2>
      
      <div class="dashboard-grid">
        
        <a href="/historia" class="dashboard-card card-history" data-link>
          <div class="icon">📜</div>
          <h3>Musikens Historia</h3>
          <p>Res genom tiden från barock till pop.</p>
          <span class="read-more">Läs mer ></span>
        </a>

        <a href="/teori" class="dashboard-card card-theory" data-link>
          <div class="icon">🎵</div>
          <h3>Musikteori</h3>
          <p>Lär dig noternas hemliga språk.</p>
          <span class="read-more">Läs mer ></span>
        </a>

        <a href="/spel" class="dashboard-card card-game" data-link>
          <div class="icon">🎮</div>
          <h3>Musikspel</h3>
          <p>Utmana ditt taktsinne och samla poäng!</p>
          <span class="read-more">Läs mer ></span>
        </a>

      </div>
    </div>
  `;

  return section;
}