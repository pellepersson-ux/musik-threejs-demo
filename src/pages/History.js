export function History() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  // --- BOKENS INNEHÅLL ---
  // --- BOKENS INNEHÅLL ---
  const pages = [
    {
      // --- Sida 0: STÄNGD BOK (Ditt omslag) ---
      // Detta är det enda man ser när boken är stängd
      text: "",
      image: "/images/cover.jpg",
      pageContent: "Start"
    },
    {
      // --- Sida 1: FÖRSTA UPPSLAGET (Berättelsen börjar direkt) ---
      // Här har jag slagit ihop rubriken med din text om andra världskriget
      // Bilden är din "sida1.jpg"
      text: "<h2>Rock'n'rollens födelse</h2><p><span style='font-size: 3rem; float: left; line-height: 0.8; margin-right: 10px;'>N</span>är andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.<br><br>Radion och senare tv:n fylldes av ny musik, och en helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.</p>",
      image: "/images/sida1.jpg",
      pageContent: "1"
    },
    {
      // --- Sida 2: NÄSTA SIDA ---
      text: "Under 50-talet uppstod begreppet tonåring. Ungdomar fick egna kläder, frisyrer, språk – och framför allt musik.<br><br>Musiken blev ett sätt att visa vem man var. När vuxenvärlden tyckte att rocken var för högljudd och vild, älskade ungdomarna den ännu mer.",
      image: "/images/dancing-scene.jpg",
      pageContent: "2"
    }
  ];

  let currentPage = 0;

  section.innerHTML = `
    <div class="content-container">
      <h1>Musikens Historia 📜</h1>
      
      <div style="text-align: center; margin-bottom: 20px;">
        <button id="toggle-book" class="toggle-btn">📖 Öppna Lättläst Bok</button>
      </div>

      <div id="standard-text" class="info-text">
        <p>Här kan du läsa fördjupning om musikens historia...</p>
        <h3>Rock'n'rollens födelse</h3>
        <p>Rockmusiken uppstod under 1950-talet i USA...</p>
      </div>

      <div id="story-book" class="story-book-container">
        
        <div id="book-container" class="book-spread closed">
          
          <div id="book-left" class="book-left">
            <img id="book-img" src="${pages[0].image}" alt="Illustration">
          </div>
          
          <div id="book-right" class="book-right">
            <div id="book-text" class="book-text"></div>
            <div id="page-num" class="page-number"></div>
          </div>

        </div>
        
        <p id="nav-hint" style="text-align:center; color: #666; font-size: 0.8rem; margin-top: 10px;">
          (Klicka på boken för att öppna)
        </p>

      </div>
    </div>
  `;

  // --- LOGIK ---
  const storyBook = section.querySelector('#story-book');
  const bookContainer = section.querySelector('#book-container'); // Ramen
  const standardText = section.querySelector('#standard-text');
  const toggleBtn = section.querySelector('#toggle-book');
  const navHint = section.querySelector('#nav-hint');

  const bookImg = section.querySelector('#book-img');
  const bookText = section.querySelector('#book-text');
  const pageNum = section.querySelector('#page-num');

  const leftPage = section.querySelector('#book-left');
  const rightPage = section.querySelector('#book-right');

  // Visa/Dölj hela sektionen
  toggleBtn.addEventListener('click', () => {
    if (storyBook.style.display === 'block') {
      storyBook.style.display = 'none';
      standardText.style.display = 'block';
      toggleBtn.textContent = '📖 Öppna Lättläst Bok';
      toggleBtn.style.backgroundColor = '#8e44ad';
    } else {
      storyBook.style.display = 'block';
      standardText.style.display = 'none';
      toggleBtn.textContent = '📝 Visa Vanlig Text';
      toggleBtn.style.backgroundColor = '#e67e22';
    }
  });

  function updateBook() {
    const p = pages[currentPage];
    bookImg.src = p.image;
    bookText.innerHTML = p.text;
    pageNum.textContent = p.pageContent;

    // --- HANTERA STÄNGD/ÖPPEN BOK ---
    if (currentPage === 0) {
      // Vi är på omslaget -> STÄNG BOKEN
      bookContainer.classList.add('closed');
      leftPage.classList.add('closed-cover'); // För att ändra hover-effekt
      leftPage.title = "Klicka för att öppna";
      navHint.textContent = "(Klicka på omslaget för att öppna boken)";
    } else {
      // Vi är inne i boken -> ÖPPNA BOKEN
      bookContainer.classList.remove('closed');
      leftPage.classList.remove('closed-cover');
      leftPage.title = "Föregående sida";
      navHint.textContent = "(Klicka på sidorna för att bläddra)";
    }

    // --- Inaktivera högerpil på sista sidan ---
    if (currentPage === pages.length - 1) {
      rightPage.classList.add('disabled');
    } else {
      rightPage.classList.remove('disabled');
    }
  }

  // --- KLICK-NAVIGERING ---

  leftPage.addEventListener('click', () => {
    if (currentPage === 0) {
      // Om stängd -> Öppna (Gå till sida 1)
      currentPage++;
    } else if (currentPage > 0) {
      // Om öppen -> Backa
      currentPage--;
    }
    updateBook();
  });

  rightPage.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateBook();
    }
  });

  // Initiera
  updateBook();

  return section;
}