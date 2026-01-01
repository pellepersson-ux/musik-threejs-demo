export function History() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  // --- BOKENS INNEHÅLL ---
  const pages = [
    {
      // Sida 0: Omslag
      text: "<h2>Rock'n'rollens födelse</h2><p>Populärmusikhistoria – 1950-talet.<br><br>Av Per Magnus Persson</p>",
      image: "/images/elvis-cover.jpg",
      pageContent: "Omslag"
    },
    {
      // Sida 1: Din nya bild
      text: "<span style='font-size: 3rem; float: left; line-height: 0.8; margin-right: 10px;'>N</span>är andra världskriget var över förändrades världen snabbt. I USA började industrin blomstra och ungdomarna fick för första gången egna pengar att spendera.<br><br>Radion och senare tv:n fylldes av ny musik, och en helt ny ungdomskultur föddes – en som inte ville lyda föräldrarnas regler.",
      image: "/images/sida1.jpg",
      pageContent: "1"
    },
    {
      // Sida 2: Dansen
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
        
        <div class="book-spread">
          
          <div id="book-left" class="book-left">
            <img id="book-img" src="${pages[0].image}" alt="Illustration">
          </div>
          
          <div id="book-right" class="book-right">
            <div id="book-text" class="book-text">${pages[0].text}</div>
            <div id="page-num" class="page-number">${pages[0].pageContent}</div>
          </div>

        </div>
        
        <p style="text-align:center; color: #666; font-size: 0.8rem; margin-top: 10px;">
          (Klicka på högersidan för att bläddra framåt, vänstersidan för att backa)
        </p>

      </div>
    </div>
  `;

  // --- LOGIK ---
  const storyBook = section.querySelector('#story-book');
  const standardText = section.querySelector('#standard-text');
  const toggleBtn = section.querySelector('#toggle-book');

  const bookImg = section.querySelector('#book-img');
  const bookText = section.querySelector('#book-text');
  const pageNum = section.querySelector('#page-num');

  // Vi hämtar hela sid-elementen (vänster och höger)
  const leftPage = section.querySelector('#book-left');
  const rightPage = section.querySelector('#book-right');

  // Visa/Dölj bok
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

  // Funktion som uppdaterar boken
  function updateBook() {
    const p = pages[currentPage];
    bookImg.src = p.image;
    bookText.innerHTML = p.text;
    pageNum.textContent = p.pageContent;

    // --- Hantera pilar och klickbarhet ---

    // Är vi på första sidan? Inaktivera vänstersidan (så man inte ser pilen)
    if (currentPage === 0) {
      leftPage.classList.add('disabled');
    } else {
      leftPage.classList.remove('disabled');
    }

    // Är vi på sista sidan? Inaktivera högersidan
    if (currentPage === pages.length - 1) {
      rightPage.classList.add('disabled');
    } else {
      rightPage.classList.remove('disabled');
    }
  }

  // --- KLICK-NAVIGERING ---

  // Klick på vänster sida -> Gå bakåt
  leftPage.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateBook();
    }
  });

  // Klick på höger sida -> Gå framåt
  rightPage.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateBook();
    }
  });

  // Kör en gång vid start så rätt bild laddas och pilar ställs in
  updateBook();

  return section;
}