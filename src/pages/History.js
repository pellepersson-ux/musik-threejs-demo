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
        {
          text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra...",
          image: "/images/sida1.jpg"
        },
        {
          text: "Radion och senare tv:n fylldes av ny musik...",
          image: "https://images.unsplash.com/photo-1499364615650-ec387c130084?auto=format&fit=crop&w=600&q=80"
        },
        {
          text: "Rock'n'roll handlade om rytm, dans och revolt...",
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

  // --- 3. HTML FÖR STORYBOOK MODAL ---
  // Vi lägger till en klass "closed" från början för animationen
  const modalHTML = `
    <div id="storybook-modal" class="modal hidden">
      <div id="book-container" class="modal-content book-style closed">
        <span class="close-btn">&times;</span>
        
        <div id="book-cover-view" class="book-cover-view">
           <img src="/images/cover.jpg" alt="Omslag" class="cover-img">
        </div>

        <div id="book-spread-view" class="book-spread hidden">
          <div class="book-page-left">
            <img id="book-img" src="" alt="">
          </div>
          <div class="book-page-right">
            <p id="book-text"></p>
            <div class="book-controls">
              <button id="prev-btn">⬅ Föregående</button>
              <span id="page-indicator"></span>
              <button id="next-btn">Nästa ➡</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  section.insertAdjacentHTML('beforeend', modalHTML);

  // --- 4. LOGIK OCH FUNKTIONER ---

  const contentDiv = section.querySelector('#history-content');
  const buttons = section.querySelectorAll('.tab-btn');

  // Hämta element för Storybook
  const modal = section.querySelector('#storybook-modal');
  const bookContainer = section.querySelector('#book-container'); // NYHET!
  const closeBtn = section.querySelector('.close-btn');
  const coverView = section.querySelector('#book-cover-view');
  const spreadView = section.querySelector('#book-spread-view');
  const bookImg = section.querySelector('#book-img');
  const bookText = section.querySelector('#book-text');
  const pageIndicator = section.querySelector('#page-indicator');
  const nextBtn = section.querySelector('#next-btn');
  const prevBtn = section.querySelector('#prev-btn');

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

  // --- STORYBOOK LOGIK ---
  let currentStory = [];
  let currentPageIndex = -1;

  window.openStory = (index, type) => {
    let dataSet = [];
    if (type === 'pop') dataSet = popData;
    // (Här kan du lägga till logic för classical/world senare)

    const item = dataSet[index];
    if (item && item.story && item.story.length > 0) {
      currentStory = item.story;
      currentPageIndex = -1;
      updateBookView();
      modal.classList.remove('hidden');
    } else {
      alert("Ingen bok finns för denna epok än!");
    }
  };

  function updateBookView() {
    // FALL 1: Boken är stängd
    if (currentPageIndex === -1) {
      coverView.classList.remove('hidden');
      spreadView.classList.add('hidden');
      bookContainer.classList.add('closed'); // Lägg till klass för animation

      coverView.onclick = () => {
        currentPageIndex = 0;
        updateBookView();
      };
    }
    // FALL 2: Boken är öppen
    else {
      coverView.classList.add('hidden');
      spreadView.classList.remove('hidden');
      bookContainer.classList.remove('closed'); // Ta bort klass för animation

      const page = currentStory[currentPageIndex];
      bookImg.src = page.image;
      bookText.innerText = page.text;
      pageIndicator.innerText = `Sida ${currentPageIndex + 1} av ${currentStory.length}`;

      prevBtn.disabled = false;
      nextBtn.disabled = currentPageIndex === currentStory.length - 1;

      prevBtn.onclick = () => {
        if (currentPageIndex === 0) {
          currentPageIndex = -1;
        } else {
          currentPageIndex--;
        }
        updateBookView();
      };

      nextBtn.onclick = () => {
        if (currentPageIndex < currentStory.length - 1) {
          currentPageIndex++;
          updateBookView();
        }
      };
    }
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // --- INITIERING ---
  renderCards(classicalData);

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