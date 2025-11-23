export function Larare() {
  const container = document.createElement('div');
  container.className = 'page-larare';

  container.innerHTML = `
    <section class="content-section">
      <header class="section-header">
        <h1>Lärarrummet 🍎</h1>
        <p>Resurser, planering och verktyg för musiklärare.</p>
      </header>

      <div class="grid-container">
        <div class="card resource-card">
          <h3>📝 Lektionsplanering</h3>
          <p>Färdiga upplägg för årskurs 1-9 med koppling till läroplanen.</p>
          <button class="btn-small">Visa planeringar</button>
        </div>

        <div class="card resource-card">
          <h3>🎼 Notbibliotek</h3>
          <p>Samling av enkla arrangemang och övningar.</p>
          <button class="btn-small">Öppna bibliotek</button>
        </div>

        <div class="card resource-card">
          <h3>🛠 Verktygslåda</h3>
          <p>Metronom, stämapparat och andra digitala hjälpmedel.</p>
          <button class="btn-small">Gå till verktyg</button>
        </div>
      </div>

      <div class="notice-box">
        <p><strong>Tips:</strong> Tryck på 'T' på tangentbordet för att snabbt växla till detta läge.</p>
      </div>
    </section>
  `;

  return container;
}
