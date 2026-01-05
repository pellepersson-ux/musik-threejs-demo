export function History() {
  const section = document.createElement('section');

  // --- HTML-STRUKTUR ---
  // Vi bygger upp sidan:
  // 1. En rubrik och menykort för att välja "Tidslinje" eller "Lättläst (Boken)"
  // 2. Modalen (Popup-boken) som är dold från början.

  section.innerHTML = `
    <div class="page-detail" style="text-align: center;">
      <h1>Musikhistoria</h1>
      <p style="max-width: 600px; margin: 0 auto 40px auto; color: #ccc;">
        Här kan du utforska hur musiken har utvecklats genom tiderna. 
        Välj mellan den detaljerade tidslinjen eller vår lättlästa bilderboks-version.
      </p>

      <div class="dashboard-grid" style="max-width: 800px; margin: 0 auto;">
        
        <div class="dashboard-card card-history" style="cursor: pointer;">
          <div class="icon">⏳</div>
          <h3>Tidslinjen</h3>
          <p>Fördjupning i årtal, genrer och viktiga händelser.</p>
          <span class="read-more">Kommer snart...</span>
        </div>

        <div class="dashboard-card card-game" id="open-book-card" style="cursor: pointer;">
          <div class="icon">📖</div>
          <h3>Lättläst Bilderbok</h3>
          <p>Klicka här för att öppna boken om Rockens historia.</p>
          <span class="read-more">Öppna boken ➡</span>
        </div>

      </div>
    </div>

    <div id="storybook-modal" class="modal hidden">
      
      <span class="close-btn" style="position:fixed; top: 30px; right: 40px; font-size: 3rem; color: white; cursor: pointer; z-index: 2000;">&times;</span>

<div class="book-container" style="display: flex; justify-content: center; margin: 40px 0;">
    <img 
      src="images/cover.jpg" 
      alt="Lättläst bok omslag" 
      class="book-cover-thumbnail" 
      id="bookCoverTrigger"
    >
</div>

<div id="storyBookModal" class="modal hidden">
   </div>

      <div class="book-spread-container">
        
        <div class="book-page-left" id="left-page-click" style="position: relative; cursor: pointer;">
          <img id="book-img" src="" alt="Bokillustration">
          
          <div class="page-overlay hint-prev">
            <span style="background:rgba(0,0,0,0.6); color:white; padding:10px 20px; border-radius:5px;">⬅ Föregående</span>
          </div>
        </div>

        <div class="book-page-right" id="right-page-click" style="position: relative; cursor: pointer;">
          
          <div class="text-content">
            <h2 id="book-title" style="margin-top:0; font-family:'Outfit', sans-serif; font-size: 2.2rem; color: #222;">Rubrik</h2>
            <div id="book-text" style="font-size: 1.2rem; line-height: 1.6; color: #333;">
              </div>
          </div>

          <div style="text-align: center; margin-top: auto; padding-top: 20px; font-weight: bold; color: #888;">
             <span id="page-indicator">1 / 3</span>
          </div>

          <div class="page-overlay hint-next">
             <span style="background:rgba(0,0,0,0.6); color:white; padding:10px 20px; border-radius:5px;">Nästa ➡</span>
          </div>

        </div>

      </div>
    </div>
  `;

  // --- JAVASCRIPT LOGIK ---

  // 1. DATA - Här lägger du in dina sidor
  const bookPages = [
    {
      title: "Rock'n'rollens födelse",
      text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.<br><br>Radion och senare tv:n fylldes av ny musik. En helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.",
      image: "/images/sida1.jpg" // Se till att denna finns i public/images/
    },
    {
      title: "Elgitarrens intåg",
      text: "Med artister som Chuck Berry och Elvis Presley blev elgitarren det viktigaste instrumentet. Det lät högt, distat och farligt.<br><br>Rockmusiken handlade om energi och uppror.",
      image: "/images/sida1.jpg" // Byt till sida2.jpg när du har den
    },
    {
      title: "60-talet och Beatles",
      text: "På 60-talet exploderade popmusiken från England. The Beatles och The Rolling Stones tog världen med storm och började skriva sina egna låtar, vilket var ovanligt på den tiden.",
      image: "/images/sida1.jpg" // Byt till sida3.jpg när du har den
    }
  ];

  let currentPage = 0;

  // 2. FUNKTION FÖR ATT UPPDATERA SIDAN
  const updateBookView = () => {
    const pageData = bookPages[currentPage];

    // --- HÄR FORTSÄTTER KODEN INUTI updateBookView ---

    // 1. Uppdatera bilden (vänster sida)
    // Vi letar upp img-taggen inuti .book-page-left
    const imageEl = section.querySelector('.book-page-left img');
    if (imageEl) {
      imageEl.src = pageData.image;
    }

    // 2. Uppdatera texten (höger sida)
    // Vi letar upp div:en med klassen .text-content
    const textEl = section.querySelector('.text-content');
    if (textEl) {
      textEl.innerHTML = pageData.text; // Vi använder innerHTML så att <p> och <h3> fungerar
    }

    // 3. Uppdatera sidnumrering (om du har lagt in en sån span)
    const pageNumEl = section.querySelector('.page-number');
    if (pageNumEl) {
      pageNumEl.textContent = `Sida ${currentPage + 1} av ${bookPages.length}`;
    }

    // 4. Visa eller dölj pilar (så man inte kan bläddra bakåt på sida 1)
    const prevBtn = section.querySelector('.hint-prev');
    const nextBtn = section.querySelector('.hint-next');

    // Om vi är på första sidan (0) -> Dölj "Bakåt"-knappen
    if (prevBtn) {
      prevBtn.style.display = (currentPage === 0) ? 'none' : 'flex';
    }

    // Om vi är på sista sidan -> Dölj "Nästa"-knappen
    if (nextBtn) {
      nextBtn.style.display = (currentPage === bookPages.length - 1) ? 'none' : 'flex';
    }
  }; // <--- HÄR STÄNGER DU updateBookView-FUNKTIONEN
  // Hämta elementen
  const titleEl = section.querySelector('#book-title');
  const textEl = section.querySelector('#book-text');
  const imgEl = section.querySelector('#book-img');
  const indicatorEl = section.querySelector('#page-indicator');

  const leftPage = section.querySelector('#left-page-click');
  const rightPage = section.querySelector('#right-page-click');

  // Uppdatera innehåll
  if (titleEl) titleEl.innerText = pageData.title;
  if (textEl) textEl.innerHTML = pageData.text;
  if (imgEl) imgEl.src = pageData.image;
  if (indicatorEl) indicatorEl.innerText = `${currentPage + 1} / ${bookPages.length}`;

  // Visa/Dölj navigering beroende på om vi är först/sist
  // Vänster sida (Föregående)
  if (currentPage === 0) {
    leftPage.style.pointerEvents = 'none'; // Går ej att klicka
    leftPage.querySelector('.hint-prev').style.display = 'none';
  } else {
    leftPage.style.pointerEvents = 'auto';
    leftPage.querySelector('.hint-prev').style.display = 'flex';
  }

  // Höger sida (Nästa)
  if (currentPage === bookPages.length - 1) {
    rightPage.style.pointerEvents = 'none'; // Går ej att klicka
    rightPage.querySelector('.hint-next').style.display = 'none';
  } else {
    rightPage.style.pointerEvents = 'auto';
    rightPage.querySelector('.hint-next').style.display = 'flex';
  }
};

// 3. EVENT LISTENERS (Knapptryckningar)

const modal = section.querySelector('#storybook-modal');
const openBtn = section.querySelector('#open-book-card'); // Kortet vi klickar på
const closeBtn = section.querySelector('.close-btn');
const nextZone = section.querySelector('#right-page-click');
const prevZone = section.querySelector('#left-page-click');

// Öppna boken
if (openBtn) {
  openBtn.addEventListener('click', () => {
    currentPage = 0; // Börja alltid från början
    updateBookView();
    modal.classList.remove('hidden');
  });
}

// Stäng boken (Kryss)
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}

// Stäng boken (Klick utanför)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Bläddra framåt (Klick på höger sida)
if (nextZone) {
  nextZone.addEventListener('click', () => {
    if (currentPage < bookPages.length - 1) {
      currentPage++;
      updateBookView();
    }
  });
}

// Bläddra bakåt (Klick på vänster sida)
if (prevZone) {
  prevZone.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateBookView();
    }
  });
}

return section;
}