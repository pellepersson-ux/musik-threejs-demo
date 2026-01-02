export function History() {
  const section = document.createElement('section');
  section.className = 'history-page';

  // --- DATA FÖR DE OLIKA FLIKARNA ---

  const classicalData = [
    { period: "Barocken (1600-1750)", info: "Musik med mycket utsmyckningar och kontrapunkt (flera stämmor). Cembalon var viktig.", artists: "Bach, Vivaldi, Händel" },
    { period: "Wienklassicismen (1750-1820)", info: "Balans, tydlighet och elegans. Pianot ersätter cembalon. Symfoniorkestern växer fram.", artists: "Mozart, Haydn, Beethoven" },
    { period: "Romantiken (1820-1900)", info: "Stora känslor, dramatik och sagomotiv. Orkestrarna blir enorma.", artists: "Chopin, Wagner, Tjaikovskij" },
    { period: "Modernismen (1900-nutid)", info: "Regler bryts. Dissonanser (låter skevt) och nya klanger.", artists: "Stravinskij, Schönberg" }
  ];

  const popData = [
    { period: "50-talet", info: "Rock 'n' Roll föds! Elgitarren tar över världen.", artists: "Elvis Presley, Chuck Berry" },
    { period: "60-talet", info: "British Invasion och flower power. Popbanden blir superstjärnor.", artists: "The Beatles, Rolling Stones" },
    { period: "70-talet", info: "Disco, Hårdrock och Punk. En spretig tid med mycket glitter och dist.", artists: "ABBA, Queen, Ramones" },
    { period: "80-talet", info: "Syntar, trummaskiner och MTV. Musikvideon blir viktig.", artists: "Michael Jackson, Madonna" }
  ];

  const worldData = [
    { period: "Västafrika", info: "Rytm är allt! Polyrytmik (flera rytmer samtidigt) och Djembe-trummor.", artists: "Fela Kuti (Afrobeat)" },
    { period: "Latinamerika", info: "Samba, Bossa Nova och Salsa. Dansvänligt och synkoperat.", artists: "Jobim, Celia Cruz" },
    { period: "Indien", info: "Raga (skalor) och Tala (rytmcykler). Sitar och Tabla är viktiga instrument.", artists: "Ravi Shankar" },
    { period: "Sverige (Folkmusik)", info: "Polska, gånglåt och vallmusik. Fiol och nyckelharpa.", artists: "Jan Johansson, Väsen" }
  ];

  // --- HTML STRUKTUR ---
  section.innerHTML = `
    <div class="content-container">
      <h1>Musikhistoria 📜</h1>
      <p class="intro-text">Välj en epok eller stil för att lära dig mer.</p>
      
      <div class="history-tabs">
        <button class="tab-btn active" data-tab="classical">🎼 Klassiskt</button>
        <button class="tab-btn" data-tab="pop">🎸 Pop/Rock</button>
        <button class="tab-btn" data-tab="world">🌍 Världsmusik</button>
      </div>

      <div id="history-content" class="timeline">
        </div>
    </div>
  `;

  // --- LOGIK ---
  const contentDiv = section.querySelector('#history-content');
  const buttons = section.querySelectorAll('.tab-btn');

  // Funktion för att rita ut korten
  function renderCards(data) {
    contentDiv.innerHTML = data.map(item => `
      <div class="time-card fade-in">
        <div class="year">${item.period}</div>
        <div class="info">
          <h3>${item.info.split('.')[0]}</h3> <p>${item.info}</p>
          <ul>
            <li><strong>Exempel:</strong> ${item.artists}</li>
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Ladda Klassiskt som start
  renderCards(classicalData);

  // Hantera klick på knappar
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Ta bort 'active' från alla knappar
      buttons.forEach(b => b.classList.remove('active'));
      // 2. Lägg till 'active' på den klickade
      btn.classList.add('active');

      // 3. Byt data beroende på vilken knapp
      const tab = btn.dataset.tab;
      if (tab === 'classical') renderCards(classicalData);
      if (tab === 'pop') renderCards(popData);
      if (tab === 'world') renderCards(worldData);
    });
  });

  return section;
}