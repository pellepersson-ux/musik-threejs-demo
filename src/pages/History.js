export function History() {
  const section = document.createElement('section');
  section.className = 'history-page';

  // --- 1. DATA ---
  const classicalData = [
    { period: "Barocken (1600-1750)", info: "Musik med mycket utsmyckningar och kontrapunkt (flera stämmor). Cembalon var viktig.", artists: "Bach, Vivaldi, Händel" },
    { period: "Wienklassicismen (1750-1820)", info: "Balans, tydlighet och elegans. Pianot ersätter cembalon. Symfoniorkestern växer fram.", artists: "Mozart, Haydn, Beethoven" },
    { period: "Romantiken (1820-1900)", info: "Stora känslor, dramatik och sagomotiv. Orkestrarna blir enorma.", artists: "Chopin, Wagner, Tjaikovskij" },
    { period: "Modernismen (1900-nutid)", info: "Regler bryts. Dissonanser (låter skevt) och nya klanger.", artists: "Stravinskij, Schönberg" }
  ];

  const popData = [
    {
      period: "50-talet",
      info: "Rock 'n' Roll föds! Elgitarren tar över världen.",
      artists: "Elvis Presley, Chuck Berry",
      story: [
        // SIDA 1 (Starten)
        {
          text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.",
          image: "/images/sida1.jpg" // Se till att du har en bild här, annars syns inget
        },
        // SIDA 2
        {
          text: "Radion och senare tv:n fylldes av ny musik. En helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.",
          image: "https://images.unsplash.com/photo-1499364615650-ec387c130084?auto=format&fit=crop&w=600&q=80"
        },
        // SIDA 3
        {
          text: "Rock'n'roll handlade om rytm, dans och revolt. Elvis Presley blev kungen av rock, men många föräldrar tyckte musiken var för vild.",
          image: "https://images.unsplash.com/photo-1549887552-93f8efb8d42a?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
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

  // --- 2. HTML STRUKTUR (Huvudsida) ---
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

  // --- 3. HTML FÖR STORYBOOK (Endast uppslag nu) ---
  const modalHTML = `
    <div id="storybook-modal" class="modal hidden">
      <div id="book-container" class="modal-content book-style">
        <span class="close-btn">&times;</span>

        <div id="book-spread-view" class="book-spread">
          
          <div class="book-page book-page-left" id="left-page-click">
            <img id="book-img" src="" alt="">
            <div class="page-overlay hint-prev">⬅ Föregående</div>
          </div>

          <div class="book-page book-page-right" id="right-page-click">
            <div class="text-content">
              <h3 id="book-title" style="margin-top:0;">Rock'n'rollens födelse</h3>
              <p id="book-text"></p>
            </div>
            <span id="page-indicator">1 / 3</span>
            <div class="page-overlay hint-next">Nästa ➡</div>
          </div>

        </div>
      </div>
    </div>
  `;

  section.insertAdjacentHTML('beforeend', modalHTML);

  // --- 4. LOGIK ---

  const contentDiv = section.querySelector('#history-content');
  const buttons = section.querySelectorAll('.tab-btn');

  const modal = section.querySelector('#storybook-modal');
  const closeBtn = section.querySelector('.close-btn');

  // Element inuti boken
  const bookImg = section.querySelector('#book-img');
  const bookText = section.querySelector('#book-text');
  const pageIndicator = section.querySelector('#page-indicator');

  // Klickytorna
  const leftPage = section.querySelector('#left-page-click');
  const rightPage = section.querySelector('#right-page-click');

  let currentStory = [];
  let currentPageIndex = 0;

  function renderCards(data) {
    let type = 'classical';
    if (data === popData) type = 'pop';
    if (data === worldData) type = 'world';

    contentDiv.innerHTML = data.map((item, index) => `
      <div class="time-card fade-in">
        <div class="card-header">
           <div class="year">${item.period}</div>
        </div>
        <div class="info">
          <h3>${item.info.split('.')[0]}</h3>
          <p>${item.info}</p>
          ${item.story && item.story.length > 0
        ? `<button class="read-book-btn" onclick="openStory(${index}, '${type}')">📖 Läs Lättläst Bok</button>`
        : ''}
        </div>
      </div>
    `).join('');
  }

  // Global funktion för att öppna boken
  window.openStory = (index, type) => {
    let dataSet = [];
    if (type === 'pop') dataSet = popData;
    // Lägg till logic för classical/world om de får stories

    const item = dataSet[index];
    if (item && item.story && item.story.length > 0) {
      currentStory = item.story;
      currentPageIndex = 0; // Börja alltid på första uppslaget
      updateBookContent();
      modal.classList.remove('hidden');
    }
  };

  function updateBookContent() {
    const page = currentStory[currentPageIndex];

    // Uppdatera innehåll
    bookImg.src = page.image;
    bookText.innerText = page.text;
    pageIndicator.innerText = `Sida ${currentPageIndex + 1} av ${currentStory.length}`;

    // Hantera synlighet/opacity för navigering
    // Om vi är på första sidan, gör vänster sida "inaktiv" visuellt om man vill, 
    // men vi behåller bilden synlig. Vi kan ändra cursorn.
    leftPage.style.cursor = currentPageIndex === 0 ? 'default' : 'pointer';
    rightPage.style.cursor = currentPageIndex === currentStory.length - 1 ? 'default' : 'pointer';
  }

  // --- NAVIGATION (KLICK PÅ SIDORNA) ---

  leftPage.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      updateBookContent();
    }
  });

  rightPage.addEventListener('click', () => {
    if (currentPageIndex < currentStory.length - 1) {
      currentPageIndex++;
      updateBookContent();
    }
  });

  // Stäng boken
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Initiera korten
  renderCards(classicalData);

  // Tab-knappar
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      if (tab === 'classical') renderCards(classicalData);
      if (tab === 'pop') renderCards(popData);
      if (tab === 'world') renderCards(worldData);
    });
  });

  return section;
}