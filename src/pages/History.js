export function History() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING (Direkt här för att garantera att det fungerar) ---
  const styles = `
    <style>
      /* Göm element helt */
      .hidden-force {
        display: none !important;
      }

      /* Centrera modal-innehållet */
      .modal-content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
      }

      /* Omslagsbilden */
      .book-cover-start {
        width: 400px; /* Justera bredd efter behov */
        height: auto;
        cursor: pointer;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
        border-radius: 5px 15px 15px 5px;
        transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
        z-index: 10;
        position: absolute; /* Gör att den ligger "ovanpå" om det behövs, men centrerad */
      }

      .book-cover-start:hover {
        transform: scale(1.02);
      }

      /* Animationen: Glid höger och försvinn */
      .animate-cover-right {
        transform: translateX(200px) scale(1.1) rotateY(-20deg) !important;
        opacity: 0;
        pointer-events: none;
      }

      /* Själva boken (uppslaget) */
      .book-spread-container {
        display: flex;
        width: 900px; /* Bredd på hela uppslaget */
        max-width: 95vw;
        height: 600px; /* Höjd på boken */
        background: #fdfbf7; /* Pappersfärg */
        box-shadow: 0 0 50px rgba(0,0,0,0.5);
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        z-index: 5;
      }

      /* Vänster och höger sida */
      .book-page-left, .book-page-right {
        flex: 1;
        position: relative;
        overflow: hidden;
      }

      .book-page-left img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .book-page-right {
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      /* Navigerings-pilar */
      .page-overlay {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        background: rgba(0,0,0,0.1);
      }
      .book-page-left:hover .page-overlay,
      .book-page-right:hover .page-overlay {
        opacity: 1;
      }
    </style>
  `;

  // --- 2. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail" style="text-align: center;">
      <h1>Musikhistoria</h1>
      <p style="max-width: 600px; margin: 0 auto 40px auto; color: #ccc;">
        Här kan du utforska hur musiken har utvecklats genom tiderna.
      </p>

      <div class="dashboard-grid" style="max-width: 800px; margin: 0 auto;">
        <div class="dashboard-card card-history" style="cursor: pointer; opacity: 0.7;">
          <div class="icon">⏳</div>
          <h3>Tidslinjen</h3>
          <p>Fördjupning i årtal och händelser.</p>
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

    <div id="storybook-modal" class="modal hidden-force" style="position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:1000; display:flex; justify-content:center; align-items:center;">
      
      <span class="close-btn" style="position:fixed; top: 30px; right: 40px; font-size: 3rem; color: white; cursor: pointer; z-index: 2000;">&times;</span>

      <div class="modal-content-wrapper">
        
        <img 
          src="/images/cover.jpg" 
          alt="Bokomslag" 
          class="book-cover-start" 
          id="bookCoverTrigger"
        >

        <div id="spread-view" class="book-spread-container hidden-force">
          
          <div class="book-page-left" id="left-page-click" style="cursor: pointer;">
            <img id="book-img" src="" alt="Bokillustration">
            <div class="page-overlay hint-prev">
              <span style="background:rgba(0,0,0,0.7); color:white; padding:10px 20px; border-radius:5px;">⬅ Föregående</span>
            </div>
          </div>

          <div class="book-page-right" id="right-page-click" style="cursor: pointer;">
            <div class="text-content">
              <h2 id="book-title" style="margin-top:0; font-family:'Outfit', sans-serif; font-size: 2rem; color: #222;">Rubrik</h2>
              <div id="book-text" style="font-size: 1.1rem; line-height: 1.6; color: #333;"></div>
            </div>

            <div style="text-align: center; font-weight: bold; color: #888;">
               <span id="page-indicator">1 / 3</span>
            </div>

            <div class="page-overlay hint-next">
               <span style="background:rgba(0,0,0,0.7); color:white; padding:10px 20px; border-radius:5px;">Nästa ➡</span>
            </div>
          </div>

        </div> 
        </div>
    </div>
  `;

  // --- 3. JAVASCRIPT LOGIK ---

  // DATA: Bokens innehåll
  const bookPages = [
    {
      title: "Rock'n'rollens födelse",
      text: "När andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.<br><br>Radion och senare tv:n fylldes av ny musik. En helt ny ungdomskultur föddes.",
      image: "/images/sida1.jpg"
    },
    {
      title: "Elgitarrens intåg",
      text: "Med artister som Chuck Berry och Elvis Presley blev elgitarren det viktigaste instrumentet. Det lät högt, distat och farligt.<br><br>Rockmusiken handlade om energi och uppror mot vuxenvärlden.",
      image: "/images/sida1.jpg" // Byt till sida2.jpg senare
    },
    {
      title: "60-talet och Beatles",
      text: "På 60-talet exploderade popmusiken från England. The Beatles och The Rolling Stones tog världen med storm och började skriva sina egna låtar, vilket var ovanligt på den tiden.",
      image: "/images/sida1.jpg" // Byt till sida3.jpg senare
    }
  ];

  let currentPage = 0;

  // Variabler för elementen
  const modal = section.querySelector('#storybook-modal');
  const coverTrigger = section.querySelector('#bookCoverTrigger');
  const spreadView = section.querySelector('#spread-view');

  // Element inuti boken
  const titleEl = section.querySelector('#book-title');
  const textEl = section.querySelector('#book-text');
  const imgEl = section.querySelector('#book-img');
  const indicatorEl = section.querySelector('#page-indicator');
  const leftPage = section.querySelector('#left-page-click');
  const rightPage = section.querySelector('#right-page-click');

  // FUNKTION: Uppdatera sidans innehåll
  const updateBookView = () => {
    const pageData = bookPages[currentPage];

    if (titleEl) titleEl.innerText = pageData.title;
    if (textEl) textEl.innerHTML = pageData.text;
    if (imgEl) imgEl.src = pageData.image;
    if (indicatorEl) indicatorEl.innerText = `${currentPage + 1} / ${bookPages.length}`;

    // Visa/dölj pilar beroende på sida
    const prevHint = section.querySelector('.hint-prev');
    const nextHint = section.querySelector('.hint-next');

    if (currentPage === 0) {
      if (prevHint) prevHint.style.display = 'none';
      leftPage.style.pointerEvents = 'none';
    } else {
      if (prevHint) prevHint.style.display = 'flex';
      leftPage.style.pointerEvents = 'auto';
    }

    if (currentPage === bookPages.length - 1) {
      if (nextHint) nextHint.style.display = 'none';
      rightPage.style.pointerEvents = 'none';
    } else {
      if (nextHint) nextHint.style.display = 'flex';
      rightPage.style.pointerEvents = 'auto';
    }
  };

  // --- EVENT LISTENERS ---

  // 1. Öppna modalen (Klick på kortet)
  const openBtn = section.querySelector('#open-book-card');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Nollställ allt
      currentPage = 0;
      updateBookView();

      // Visa modalen (ta bort hidden-force)
      modal.classList.remove('hidden-force');
      modal.style.display = 'flex'; // Garantera flex

      // Visa OMSLAGET, Dölj BOKEN
      coverTrigger.style.display = 'block';
      coverTrigger.classList.remove('animate-cover-right');
      spreadView.classList.add('hidden-force');
    });
  }

  // 2. Klick på omslaget -> Starta animation -> Visa bok
  if (coverTrigger) {
    coverTrigger.addEventListener('click', () => {
      // Lägg på animationsklassen
      coverTrigger.classList.add('animate-cover-right');

      // Vänta 0.5 sekunder (matchar CSS transition)
      setTimeout(() => {
        coverTrigger.style.display = 'none'; // Ta bort omslaget helt
        spreadView.classList.remove('hidden-force'); // Visa boken
      }, 500);
    });
  }

  // 3. Bläddra (Klick på sidorna)
  if (leftPage) {
    leftPage.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updateBookView();
      }
    });
  }

  if (rightPage) {
    rightPage.addEventListener('click', () => {
      if (currentPage < bookPages.length - 1) {
        currentPage++;
        updateBookView();
      }
    });
  }

  // 4. Stäng modalen
  const closeBtn = section.querySelector('.close-btn');
  const closeModal = () => {
    modal.classList.add('hidden-force');
    modal.style.display = 'none';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    // Om man klickar på den mörka bakgrunden (inte på boken)
    if (e.target === modal || e.target.classList.contains('modal-content-wrapper')) {
      closeModal();
    }
  });

  return section;
}