export function Instrument() {
  const section = document.createElement('section');
  section.className = 'page-instrument';

  section.innerHTML = `
    <div class="cards-section">
      <div style="text-align: center; margin-bottom: 40px; color: var(--text-light);">
        <h2>Välj ditt Instrument</h2>
        <p>Klicka på ett kort för att börja utforska ljuden!</p>
      </div>

      <div class="dashboard-grid">
        
        <a href="/instrument/gitarr" class="dashboard-card card-guitar" data-link>
          <div class="icon">🎸</div>
          <h3>Gitarr</h3>
          <p>Lär dig strängar, ackord och att rocka loss.</p>
          <span class="read-more">Spela nu ></span>
        </a>

        <a href="/instrument/piano" class="dashboard-card card-piano" data-link>
          <div class="icon">🎹</div>
          <h3>Piano</h3>
          <p>Upptäck tangenter, skalor och melodier.</p>
          <span class="read-more">Spela nu ></span>
        </a>

        <a href="/instrument/trummor" class="dashboard-card card-drums" data-link>
          <div class="icon">🥁</div>
          <h3>Trummor</h3>
          <p>Håll takten! Lär dig rytmer och beats.</p>
          <span class="read-more">Spela nu ></span>
        </a>

      </div>
      {/* Bas-kort */}
        <div className="card bass">
          <div className="icon">🎸</div>
          <h3>Bas</h3>
          <p>Djupa toner som bygger grunden.</p>
          <button onClick={() => alert('Bas kommer snart!')}>Gå till Bas</button>
        </div>
    </div>
  `;

  return section;
}