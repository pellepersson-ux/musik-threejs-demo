export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // --- CSS för att behålla stilen från Bild 2 ---
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page { padding: 40px 20px; max-width: 900px; margin: 0 auto; color: #fff; }
    .history-header { text-align: center; margin-bottom: 40px; }
    .category-toggle { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; }
    
    /* Knapparna från din bild */
    .cat-btn { 
      padding: 10px 25px; border-radius: 25px; border: 2px solid #a18cd1; 
      background: transparent; color: #fff; cursor: pointer; transition: 0.3s;
    }
    .cat-btn.active { background: #a18cd1; box-shadow: 0 0 15px rgba(161, 140, 209, 0.5); }
    
    .era-title { color: #fdbb2d; font-size: 1.8rem; margin-top: 20px; text-align: center; }
    .era-subtitle { color: #aaa; font-style: italic; text-align: center; margin-bottom: 30px; }

    /* Accordion-stilen från Bild 2 */
    .acc-item { background: #1a1a1a; border-radius: 8px; margin-bottom: 12px; border: 1px solid #333; overflow: hidden; }
    .acc-header { 
      width: 100%; padding: 18px 25px; background: none; border: none; color: #fdbb2d; 
      text-align: left; font-size: 1.1rem; font-weight: bold; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center;
    }
    .acc-header:hover { background: #222; }
    .acc-body { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; background: #111; }
    .acc-item.open .acc-body { max-height: 1000px; }
    .acc-inner { padding: 25px; line-height: 1.6; color: #ddd; }
    .acc-inner b { color: #fff; }
    .acc-inner ul { padding-left: 20px; }
    .acc-inner li { margin-bottom: 10px; }
  `;
  container.appendChild(style);

  // --- DATA FÖR 50-TALET ---
  const eraData = {
    "50s": {
      title: "History of Rock & Roll – The 1950s",
      subtitle: "När musiken förändrade världen",
      sections: [
        {
          head: "1. Inledning: Rock ’n’ Roll som historiskt fenomen",
          body: `<p>Välkomna till vår sida om 1950-talets musik! Det här var ett årtionde då populärmusiken inte bara var något man lyssnade på – den blev en personlig revolution för unga människor. Genom att blanda rötter från Blues och Country skapades något helt nytt: <b>Rock ’n’ Roll</b>.</p>`
        },
        {
          head: "2. Rötterna: Blues och Country",
          body: `
            <p>Innan rocken tog över världen fanns det två huvudspår som lade grunden:</p>
            <ul>
              <li><b>Blues:</b> Bluesen föddes ur behovet att uttrycka sorg, smärta och hopp. Den gav rocken dess hjärta och teknik.</li>
              <li><b>Country:</b> Under 50-talet började vissa countrymusiker (så kallade "Hillbillies") inspireras av bluesens rytmer. De skapade <b>Rockabilly</b>.</li>
            </ul>`
        },
        {
          head: "3. Rock ’n’ Roll – En musikalisk revolution",
          body: `
            <ul>
              <li><b>Sudda ut gränser:</b> Rocken förde samman kulturer och kopplade ihop svart R&B med den vita medelklassen.</li>
              <li><b>Ungdomens röst:</b> För första gången fick tonåringar en egen genre och ett sätt att revoltera.</li>
              <li><b>Energi och fart:</b> Fokus på tempo och elektriska instrument som elbas och gitarr.</li>
            </ul>`
        },
        {
          head: "4. Instrumenten som skapade soundet",
          body: `<p>Den typiska uppsättningen bestod av: Sångare, Sologitarr, Komp-gitarr, Trummor och Bas.</p>`
        },
        {
          head: "5. Visste du att...?",
          body: `<ul>
            <li>Namnet "Rock ’n’ Roll" var ursprungligen slang för sex.</li>
            <li>Vissa kallade det för "Djävulens musik".</li>
            <li><b>Skiffle:</b> En brittisk stil där man använde tvättbrädor och krus som instrument.</li>
          </ul>`
        },
        {
          head: "6. Klassiska artister att lyssna på",
          body: `<ul>
            <li><b>Elvis Presley</b> – "Hound Dog"</li>
            <li><b>Chuck Berry</b> – "Johnny B. Goode"</li>
            <li><b>Bill Haley</b> – "Rock Around the Clock"</li>
            <li><b>Jerry Lee Lewis</b> – "Great Balls of Fire"</li>
          </ul>`
        }
      ]
    }
  };

  // --- RENDERINGSFUNKTION ---
  function renderEra(eraId) {
    const data = eraData[eraId];
    container.innerHTML = '';
    container.appendChild(style);

    const html = `
      <div class="history-header">
        <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Musikhistoria 📜🎸</h1>
        <div class="category-toggle">
          <button class="cat-btn ${eraId === 'classical' ? 'active' : ''}" id="btn-classical">Klassisk Musik</button>
          <button class="cat-btn ${eraId === '50s' ? 'active' : ''}" id="btn-50s">50-talet</button>
          <button class="cat-btn" id="btn-60s">60-talet</button>
          <button class="cat-btn" id="btn-70s">70-talet</button>
        </div>
      </div>

      <h2 class="era-title">${data ? data.title : "Kommer snart"}</h2>
      <p class="era-subtitle">${data ? data.subtitle : "Innehåll under konstruktion"}</p>

      <div class="accordion-list">
        ${data ? data.sections.map(s => `
          <div class="acc-item">
            <button class="acc-header">${s.head} <span>▼</span></button>
            <div class="acc-body">
              <div class="acc-inner">${s.body}</div>
            </div>
          </div>
        `).join('') : ''}
      </div>
    `;

    container.innerHTML += html;

    // Event listeners för flikar
    container.querySelector('#btn-50s').onclick = () => renderEra('50s');
    // Här kan du lägga till fler klick-events för 60s, 70s etc.

    // Accordion-logik
    container.querySelectorAll('.acc-header').forEach(btn => {
      btn.onclick = () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        container.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      };
    });
  }

  renderEra('50s');
  return container;
}