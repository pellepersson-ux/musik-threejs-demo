export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // --- DATA: KLASSISK MUSIK ---
  const classicalEras = [
    {
      id: "renaissance",
      title: "Renässansen (1450–1600)",
      content: `
        <img src="/images/renaissance.jpg" class="era-img" alt="Renässansmusiker">
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Man ville väcka till liv idéer från antiken.</p>
        <h4>1. Samtiden – Nytänkarnas tid</h4>
        <ul>
          <li><b>Kända personer:</b> Christofer Columbus, Nicolaus Copernicus och Leonardo da Vinci.</li>
          <li><b>Boktryckarkonsten:</b> Gjorde att noter och musik kunde spridas enklare.</li>
        </ul>
        <h4>2. Musiken – Hur lät den?</h4>
        <p>Musiken blev mer komplex än under medeltiden...</p>
      `
    }
    // Fyll på med Medeltid, Barock, Wienklassicism etc. härifrån din gamla kod
  ];

  // --- DATA: POP- & ROCKHISTORIA (Din nya text) ---
  const modernEras = {
    "50s": {
      title: "1950-talet: När musiken förändrade världen",
      intro: "Här skapades en personlig revolution för unga människor genom Rock ’n’ Roll.",
      sections: [
        {
          head: "Rötterna: Blues och Country",
          body: "<p>Blues gav rocken dess hjärta, medan Country (Rockabilly) gav den fart.</p>"
        },
        {
          head: "Rock ’n’ Roll – En musikalisk revolution",
          body: "<ul><li>Sudda ut gränser</li><li>Ungdomens röst</li><li>Energi och elektriska instrument</li></ul>"
        }
        // Fyll på med resten av 50-tals sektionerna vi skrev tidigare
      ]
    }
    // Här fyller vi på med 60s, 70s osv senare
  };

  // --- HTML STRUKTUR ---
  container.innerHTML = `
    <div class="history-header">
      <h1 class="teori-title">Musikhistoria 📜🎸</h1>
      <div class="category-toggle">
        <button class="cat-btn active" data-cat="classical">Klassisk Musik</button>
        <button class="cat-btn" data-cat="modern">Pop & Rock (1950–idag)</button>
      </div>
    </div>

    <div id="modern-nav" class="era-nav" style="display:none;">
      <button class="era-tab active" data-era="50s">50-tal</button>
      <button class="era-tab" data-era="60s">60-tal</button>
      <button class="era-tab" data-era="70s">70-tal</button>
      <button class="era-tab" data-era="80s">80-tal</button>
      <button class="era-tab" data-era="90s">90-tal</button>
      <button class="era-tab" data-era="2000s">00-tal</button>
      <button class="era-tab" data-era="2010s">10-tal</button>
      <button class="era-tab" data-era="2020s">20-tal</button>
    </div>

    <div id="history-display-area"></div>
  `;

  const displayArea = container.querySelector('#history-display-area');
  const modernNav = container.querySelector('#modern-nav');

  // --- LOGIK FÖR ATT RENDER KATEGORIER ---
  function showCategory(cat) {
    displayArea.innerHTML = "";
    if (cat === 'classical') {
      modernNav.style.display = "none";
      renderClassical();
    } else {
      modernNav.style.display = "flex";
      renderModern('50s');
    }
  }

  function renderClassical() {
    displayArea.innerHTML = classicalEras.map(era => `
      <div class="acc-item">
        <button class="acc-header">${era.title} <span class="icon">▼</span></button>
        <div class="acc-body"><div class="acc-inner">${era.content}</div></div>
      </div>
    `).join('');
    setupAccordions();
  }

  function renderModern(eraKey) {
    const data = modernEras[eraKey];
    if (!data) {
      displayArea.innerHTML = "<p class='placeholder'>Kommer snart...</p>";
      return;
    }
    displayArea.innerHTML = `
      <div class="era-header">
        <h2>${data.title}</h2>
        <p>${data.intro}</p>
      </div>
      <div class="accordion-container">
        ${data.sections.map(s => `
          <div class="acc-item">
            <button class="acc-header">${s.head} <span class="icon">▼</span></button>
            <div class="acc-body"><div class="acc-inner">${s.body}</div></div>
          </div>
        `).join('')}
      </div>
    `;
    setupAccordions();
  }

  function setupAccordions() {
    container.querySelectorAll('.acc-header').forEach(btn => {
      btn.onclick = () => btn.parentElement.classList.toggle('open');
    });
  }

  // --- EVENT LISTENERS ---
  container.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = () => {
      container.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showCategory(btn.dataset.cat);
    };
  });

  container.querySelectorAll('.era-tab').forEach(tab => {
    tab.onclick = () => {
      container.querySelectorAll('.era-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderModern(tab.dataset.era);
    };
  });

  // Startläge
  setTimeout(() => showCategory('classical'), 0);

  return container;
}