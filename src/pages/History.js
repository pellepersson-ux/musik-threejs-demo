export function History() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  // Här är "sidorna" i din lättlästa bok
  const bookPages = [
    {
      text: "För länge sedan, i Antiken, trodde man att musik kunde bota sjukdomar. Musik var som matematik för själen.",
      icon: "🏛️" // Här kan du byta till en bild-URL senare: image: 'url-till-bild.jpg'
    },
    {
      text: "På 1600-talet kom Barocken. Då ville man ha mycket krusiduller! Vivaldi och Bach var superstjärnorna.",
      icon: "🎻"
    },
    {
      text: "Sen kom Rocken! På 1950-talet kopplade man in ström i gitarren. Det lät högt och tufft!",
      icon: "🎸"
    }
  ];

  let currentPage = 0;

  section.innerHTML = `
    <div class="content-container">
      <h1>Musikens Historia 📜</h1>
      
      <div style="text-align: center;">
        <button id="toggle-book" class="toggle-btn">📖 Öppna Lättläst Bok</button>
      </div>

      <div id="standard-text" class="info-text">
        <p>Här kan du läsa fördjupning om musikens historia...</p>
        <h3>Antiken</h3>
        <p>Under antiken (ca 800 f.Kr. – 500 e.Kr.) hade musiken en central roll i samhället...</p>
        
        <h3>Barocken</h3>
        <p>Barocken (ca 1600–1750) kännetecknas av en ornamenterad och storslagen stil...</p>
        
        <h3>Rockens födelse</h3>
        <p>Rockmusiken uppstod under 1950-talet i USA som en smältdegel av blues, country och jazz...</p>
      </div>

      <div id="story-book" class="story-book-container">
        <div class="book-content">
          <div class="book-left">
            <div id="book-image" class="placeholder-icon">${bookPages[0].icon}</div>
          </div>
          <div class="book-right">
            <p id="book-text" class="book-text">${bookPages[0].text}</p>
          </div>
        </div>
        
        <div class="book-controls">
          <button id="prev-btn" class="book-btn" disabled>← Föregående</button>
          <span id="page-indicator">Sida 1 av ${bookPages.length}</span>
          <button id="next-btn" class="book-btn">Nästa →</button>
        </div>
      </div>

    </div>
  `;

  // --- LOGIK FÖR BOKEN ---

  // Hämta elementen vi behöver ändra på
  const storyBook = section.querySelector('#story-book');
  const standardText = section.querySelector('#standard-text');
  const toggleBtn = section.querySelector('#toggle-book');

  const bookText = section.querySelector('#book-text');
  const bookImage = section.querySelector('#book-image');
  const prevBtn = section.querySelector('#prev-btn');
  const nextBtn = section.querySelector('#next-btn');
  const pageIndicator = section.querySelector('#page-indicator');

  // Funktion för att visa/dölja boken
  toggleBtn.addEventListener('click', () => {
    if (storyBook.style.display === 'block') {
      storyBook.style.display = 'none';
      standardText.style.display = 'block';
      toggleBtn.textContent = '📖 Öppna Lättläst Bok';
      toggleBtn.style.backgroundColor = '#8e44ad'; // Lila
    } else {
      storyBook.style.display = 'block';
      standardText.style.display = 'none';
      toggleBtn.textContent = '📝 Visa Vanlig Text';
      toggleBtn.style.backgroundColor = '#e67e22'; // Orange för att visa skillnad
    }
  });

  // Funktion för att uppdatera boksidan
  function updateBook() {
    const page = bookPages[currentPage];
    bookText.textContent = page.text;
    bookImage.textContent = page.icon; // Byt till page.image och <img> tagg om du har riktiga bilder

    pageIndicator.textContent = `Sida ${currentPage + 1} av ${bookPages.length}`;

    // Fixa knapparna (inaktivera om man är först eller sist)
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === bookPages.length - 1;
  }

  // Knapp-klick
  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateBook();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < bookPages.length - 1) {
      currentPage++;
      updateBook();
    }
  });

  return section;
}