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
    {
      period: "50-talet",
      info: "Rock 'n' Roll föds! Elgitarren tar över världen.",
      artists: "Elvis Presley, Chuck Berry",
      // HÄR LÄGGER VI TILL BOKEN:
      story: [
        {
          text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.",
          image: "https://images.unsplash.com/photo-1552554274-0f196620573e?auto=format&fit=crop&w=600&q=80" // Byt mot din ritade bild sen
        },
        {
          text: "Radion och senare tv:n fylldes av ny musik, och en helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.",
          image: "https://images.unsplash.com/photo-1499364615650-ec387c130084?auto=format&fit=crop&w=600&q=80"
        },
        {
          text: "Rock'n'roll handlade om rytm, dans och revolt. Det var högt, det var snabbt och föräldrarna hatade det.",
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
    // Vi måste veta vilken typ av data det är för att hitta rätt index
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

  // --- STORYBOOK LOGIK ---

  // Skapa HTML för själva "Bok-fönstret" (ligger dolt först)
  const modalHTML = `
    <div id="storybook-modal" class="modal hidden">
      <div class="modal-content book-style">
        <span class="close-btn">&times;</span>
        
        <div class="book-spread">
          <div class="book-page-left">
            <img id="book-img" src="" alt="">
          </div>
          <div class="book-page-right">
            <p id="book-text"></p>
            <div class="book-controls">
              <button id="prev-btn">⬅ Föregående</button>
              <span id="page-indicator">1 / 3</span>
              <button id="next-btn">Nästa ➡</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Lägg till modalen i sektionen
  section.insertAdjacentHTML('beforeend', modalHTML);

  // Hämta referenser till elementen
  const modal = section.querySelector('#storybook-modal');
  const closeBtn = section.querySelector('.close-btn');
  const bookImg = section.querySelector('#book-img');
  const bookText = section.querySelector('#book-text');
  const pageIndicator = section.querySelector('#page-indicator');
  const nextBtn = section.querySelector('#next-btn');
  const prevBtn = section.querySelector('#prev-btn');

  let currentStory = [];
  let currentPageIndex = 0;

  // Funktion för att öppna boken
  window.openStory = (index, type) => {
    let dataSet = [];
    if (type === 'pop') dataSet = popData;
    // Lägg till logic för classical/world om du vill ha böcker där sen

    const item = dataSet[index];
    if (item && item.story && item.story.length > 0) {
      currentStory = item.story;
      currentPageIndex = 0;
      updateBookView();
      modal.classList.remove('hidden'); // Visa fönstret
    } else {
      alert("Ingen bok finns för denna epok än!");
    }
  };

  // Uppdatera innehållet (Bläddra)
  function updateBookView() {
    const page = currentStory[currentPageIndex];
    bookImg.src = page.image;
    bookText.innerText = page.text;
    pageIndicator.innerText = `Sida ${currentPageIndex + 1} av ${currentStory.length}`;

    // Inaktivera knappar om vi är först/sist
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === currentStory.length - 1;
  }

  // Knapp-lyssnare
  nextBtn.addEventListener('click', () => {
    if (currentPageIndex < currentStory.length - 1) {
      currentPageIndex++;
      updateBookView();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      updateBookView();
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  return section;
}