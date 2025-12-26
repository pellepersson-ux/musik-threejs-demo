export function Instrument() {
  const section = document.createElement('section');
  section.className = 'page-instrument';

  section.innerHTML = `
    <h1>Välj ditt Instrument</h1>
    <p>Klicka på ett kort för att börja utforska!</p>
    
    <div class="instrument-grid" style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
      
      <div class="card" style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; flex: 1; min-width: 200px;">
        <h3>🎸 Gitarr</h3>
        <p>Lär dig strängar och ackord.</p>
        <button>Gå till Gitarr</button>
      </div>

      <div class="card" style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; flex: 1; min-width: 200px;">
        <h3>🎹 Piano</h3>
        <p>Tangenter och skalor.</p>
        <button>Gå till Piano</button>
      </div>

      <div class="card" style="border: 1px solid #ccc; padding: 20px; border-radius: 8px; flex: 1; min-width: 200px;">
        <h3>🥁 Trummor</h3>
        <p>Håll takten!</p>
        <button>Gå till Trummor</button>
      </div>

    </div>
  `;

  return section;
}