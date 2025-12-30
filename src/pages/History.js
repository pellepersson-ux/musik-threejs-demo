export function History() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  // Byt ut denna länken mot din riktiga StoryBook-länk!
  const storyBookLink = "https://gemini.google.com/gem/storybook/e35d94951582713e";

  section.innerHTML = `
    <div class="content-container">
      <h1>Musikens Historia 📜</h1>
      
      <div style="text-align: center; margin-bottom: 30px;">
        <button id="toggle-book" class="toggle-btn">📖 Öppna Lättläst Bok</button>
      </div>

      <div id="standard-text" class="info-text">
        <p>Här kan du läsa fördjupning om musikens historia.</p>
        
        <h3>Rock'n'rollens födelse</h3>
        <p>Rockmusiken uppstod under 1950-talet i USA som en smältdegel av blues, country och jazz. Det var en tid av förändring där ungdomen fick en egen röst.</p>
        
        <h3>Instrumenten</h3>
        <p>Elgitarren blev det centrala instrumentet. Med hjälp av förstärkare kunde man nu spela högre än någonsin tidigare, vilket ändrade dynamiken i musiken helt.</p>
      </div>

      <div id="story-book-container" style="display: none; margin-top: 20px;">
        
        <div class="video-container" style="height: 80vh; border: none; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <iframe 
              src="${storyBookLink}" 
              width="100%" 
              height="100%" 
              style="border: none;"
              allow="autoplay; fullscreen"
              allowfullscreen>
            </iframe>
        </div>

        <p style="text-align: center; margin-top: 10px; font-size: 0.9rem; color: #aaa;">
          Fungerar inte boken? <a href="${storyBookLink}" target="_blank" style="color: var(--primary-color);">Klicka här för att öppna den i nytt fönster.</a>
        </p>
      </div>

    </div>
  `;

  // --- LOGIK FÖR ATT BYTA MELLAN TEXT OCH BOK ---
  const toggleBtn = section.querySelector('#toggle-book');
  const standardText = section.querySelector('#standard-text');
  const bookContainer = section.querySelector('#story-book-container');

  toggleBtn.addEventListener('click', () => {
    if (bookContainer.style.display === 'none') {
      // VISA BOKEN
      bookContainer.style.display = 'block';
      standardText.style.display = 'none';
      toggleBtn.textContent = '📝 Visa Vanlig Text';
      toggleBtn.style.backgroundColor = '#e67e22'; // Orange färg
    } else {
      // VISA TEXTEN
      bookContainer.style.display = 'none';
      standardText.style.display = 'block';
      toggleBtn.textContent = '📖 Öppna Lättläst Bok';
      toggleBtn.style.backgroundColor = '#8e44ad'; // Lila färg
    }
  });

  return section;
}