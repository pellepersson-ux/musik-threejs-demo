export function History() {
  const section = document.createElement('section');

  // --- HTML-STRUKTUR ---
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

      <div id="cover-view" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
          <img 
            src="/images/cover.jpg" 
            alt="Klicka för att öppna boken" 
            class="book-cover-thumbnail" 
            id="bookCoverTrigger"
            title="Klicka för att öppna"
          >
      </div>

      <div id="spread-view" class="book-spread-container hidden">
        
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

  // 1. DATA
  const bookPages = [
    {
      title: "Rock'n'rollens födelse",
      text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.<br><br>Radion och senare tv:n fylldes av ny musik. En helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.",
      image: "/images/sida1.jpg"
    },
    {
      title: "Elgitarrens intåg",
      text: "Med artister som Chuck Berry och Elvis Presley blev elgitarren det viktigaste instrumentet. Det lät högt, distat och farligt.<br><br>Rockmusiken handlade om energi och uppror.",
      image: "/images/sida1.jpg"
    },
    {
      title: "60-talet och Beatles",
      text: "På 60-talet exploderade popmusiken från England. The Beatles och The Rolling Stones tog världen med storm och började skriva sina egna låtar, vilket var ovanligt på den tiden.",
      image: "/images/sida1.jpg"
    }
  ];

  let currentPage = 0;

  // 2. FUNKTION FÖR ATT UPPDATERA SIDAN
  const updateBookView = () => {
    const pageData = bookPages[currentPage];

    // Hämta element
    const titleEl = section.querySelector('#book-title');
    const textEl = section.querySelector('#book-text');
    const imgEl = section.querySelector('#book-img');
    const indicatorEl = section.querySelector('#page-indicator');

    // Pilar & Zoner
    const leftPage = section.querySelector('#left-page-click');
    const rightPage = section.querySelector('#right-page-click');
    const prevBtn = section.querySelector('.hint-prev');
    const nextBtn = section.querySelector('.hint-next');

    // Uppdatera innehåll
    if (titleEl) titleEl.innerText = pageData.title;
    if (textEl) textEl.innerHTML = pageData.text;
    if (imgEl) imgEl.src = pageData.image;
    if (indicatorEl) indicatorEl.innerText = `${currentPage + 1} / ${bookPages.length}`;

    // Visa/Dölj navigering (Första sidan)
    if (currentPage === 0) {
      if (leftPage) leftPage.style.pointerEvents = 'none';
      if (prevBtn) prevBtn.style.display = 'none';
    } else {
      if (leftPage) leftPage.style.pointerEvents = 'auto';
      if (prevBtn) prevBtn.style.display = 'flex';
    }

    // Visa/Dölj navigering (Sista sidan)
    if (currentPage === bookPages.length - 1) {
      if (rightPage) rightPage.style.pointerEvents = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    } else {
      if (rightPage) rightPage.style.pointerEvents = 'auto';
      if (nextBtn) nextBtn.style.display = 'flex';
    }
  };

  // 3. EVENT LISTENERS

  const modal = section.querySelector('#storybook-modal');
  const openBtn = section.querySelector('#open-book-card');
  const closeBtn = section.querySelector('.close-btn');

  // Bokens delar
  const coverView = section.querySelector('#cover-view');
  const coverTrigger = section.querySelector('#bookCoverTrigger');
  const spreadView = section.querySelector('#spread-view');

  const nextZone = section.querySelector('#right-page-click');
  const prevZone = section.querySelector('#left-page-click');

  // A. ÖPPNA MODALEN (Visar omslaget först)
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Återställ allt
      currentPage = 0;
      updateBookView();

      // Visa modal
      modal.classList.remove('hidden');

      // Visa Omslag, Dölj Boken
      if (coverView) coverView.style.display = 'flex';
      if (coverTrigger) coverTrigger.classList.remove('book-animating-right'); // Ta bort ev gammal animation
      if (spreadView) spreadView.classList.add('hidden');
    });
  }

  // B. KLICK PÅ OMSLAGET (Starta animation -> Visa bok)
  if (coverTrigger) {
    coverTrigger.addEventListener('click', () => {
      // 1. Starta animationen
      coverTrigger.classList.add('book-animating-right');

      // 2. Vänta in animationen (0.5 sekunder)
      setTimeout(() => {
        // Dölj omslagsvyn
        coverView.style.display = 'none';

        // Visa boken
        spreadView.classList.remove('hidden');
      }, 450);
    });
  }

  // C. STÄNG BOKEN
  const closeModal = () => {
    modal.classList.add('hidden');
    // Återställ så att omslaget syns nästa gång
    setTimeout(() => {
      coverTrigger.classList.remove('book-animating-right');
      coverView.style.display = 'flex';
      spreadView.classList.add('hidden');
    }, 300);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // D. BLÄDDRA
  if (nextZone) {
    nextZone.addEventListener('click', () => {
      if (currentPage < bookPages.length - 1) {
        currentPage++;
        updateBookView();
      }
    });
  }

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