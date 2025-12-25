export function Instrument() {
    const container = document.createElement('div');
    container.className = 'page-content';

    // Här bygger vi upp innehållet
    container.innerHTML = `
    <section class="intro-section" style="text-align: center; margin-bottom: 2rem;">
      <h1>Instrument & Skapande 🎸</h1>
      <p>Välj ditt instrument för att hitta filmer och övningar.</p>
    </section>

    <div class="grid-container">
      <div class="card">
        <h3>🎸 Gitarr</h3>
        <p>Lär dig ackord, tabulatur och enkla låtar.</p>
        <div class="btn-group">
          <button class="btn-sm">Se filmer</button>
        </div>
      </div>

      <div class="card">
        <h3>🎹 Piano / Keyboard</h3>
        <p>Hitta C, spela ackord och kompa dig själv.</p>
        <div class="btn-group">
          <button class="btn-sm">Se filmer</button>
        </div>
      </div>

      <div class="card">
        <h3>🥁 Trummor</h3>
        <p>Grundkomp, fills och taktarter.</p>
        <div class="btn-group">
          <button class="btn-sm">Se filmer</button>
        </div>
      </div>

      <div class="card">
        <h3>💻 Digitalt Skapande</h3>
        <p>Garageband, Soundtrap och inspelning.</p>
        <div class="btn-group">
          <button class="btn-sm">Tutorials</button>
        </div>
      </div>
    </div>
  `;

    return container;
}