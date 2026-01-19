export function Theory() {
  const section = document.createElement('section');

  // ==========================================
  // 1. DATA: NOTVÄRDEN (För tabellen)
  // ==========================================
  const notesData = [
    { symbol: "𝅝", name: "Helnot", duration: "4 slag" },
    { symbol: "𝅗𝅥", name: "Halvnot", duration: "2 slag" },
    { symbol: "𝅘𝅥", name: "Fjärdedelsnot", duration: "1 slag" },
    { symbol: "𝅘𝅥𝅮", name: "Åttondelsnot", duration: "1/2 slag" }
  ];

  // Bygger HTML-rader för tabellen
  const tableRows = notesData.map(note => `
    <tr>
      <td class="note-symbol">${note.symbol}</td>
      <td><strong>${note.name}</strong></td>
      <td>${note.duration}</td>
    </tr>
  `).join('');

  // ==========================================
  // 2. CSS
  // ==========================================
  const styles = `
    <style>
      .hidden-force { display: none !important; }

      .theory-container {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 50px;
        padding-top: 20px;
      }

      .grid-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin-top: 30px;
        text-align: left;
      }

      /* KORT DESIGN */
      .theory-card {
        background: #fff;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-left: 5px solid #3498db;
      }

      .theory-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.15);
      }

      .card-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #555;
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
      }

      .card-title {
        font-family: 'Outfit', sans-serif;
        font-size: 1.5rem;
        margin: 5px 0 10px 0;
        color: #2c3e50;
      }

      .read-more-btn {
        display: inline-block;
        margin-top: 15px;
        font-weight: bold;
        color: #3498db;
      }

      /* ARTIKEL MODAL */
      .article-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 2000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px;
      }

      .article-content {
        background: #fff;
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 8px;
        position: relative;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-family: 'Georgia', serif; 
      }

      .article-content h2 { font-family: 'Outfit', sans-serif; color: #3498db; margin-bottom: 5px; margin-top: 0; }
      .article-content h3 { font-family: 'Outfit', sans-serif; margin-top: 30px; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px;}
      .article-content h4 { font-family: 'Outfit', sans-serif; margin-top: 20px; color: #444; font-size: 1.1rem; }
      .article-content p { line-height: 1.8; color: #222; font-size: 1.1rem; margin-bottom: 15px; }
      .article-content ul { margin-bottom: 20px; padding-left: 20px; line-height: 1.6; color: #222;}
      .article-content li { margin-bottom: 8px; }

      .close-btn {
        position: absolute; top: 15px; right: 25px;
        font-size: 3rem; cursor: pointer; color: #333;
        font-family: sans-serif;
        line-height: 0.8;
      }
      .close-btn:hover { color: #e74c3c; }

      /* --- NYTT: PIANO STYLES --- */
      .piano-wrapper {
        background: #222;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
        text-align: center;
      }
      .piano {
        display: inline-flex;
        background: #111;
        padding: 10px;
        border-radius: 8px;
        position: relative;
      }
      .key {
        position: relative; cursor: pointer; border-radius: 0 0 4px 4px;
        user-select: none; transition: background 0.1s;
      }
      .white-key {
        width: 40px; height: 140px; background: #fff; border: 1px solid #ccc;
        margin: 0 2px; display: flex; align-items: flex-end; justify-content: center;
        padding-bottom: 10px; font-weight: bold; font-family: sans-serif;
      }
      .white-key.active { background: #ddd; transform: translateY(2px); }
      
      .black-key {
        width: 30px; height: 85px; background: #000; position: absolute; z-index: 2;
        border-radius: 0 0 3px 3px; color: #fff;
      }
      .black-key.active { background: #333; transform: translateY(2px); }

      /* Positionering av svarta tangenter */
      .bk-1 { left: 32px; } .bk-2 { left: 78px; }
      .bk-3 { left: 168px; } .bk-4 { left: 214px; } .bk-5 { left: 260px; }

      .note-display {
        color: #fff; margin-top: 10px; font-family: sans-serif; font-weight: bold; height: 20px;
      }

      /* --- NYTT: NOT-TABELL STYLES --- */
      .rhythm-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      .rhythm-table th { text-align: left; padding: 10px; border-bottom: 2px solid #ddd; font-family: sans-serif; }
      .rhythm-table td { padding: 10px; border-bottom: 1px solid #eee; }
      .note-symbol { font-size: 2.5rem; line-height: 1; }
    </style>
  `;

  // ==========================================
  // 3. ARTIKEL-INNEHÅLL
  // ==========================================
  const theoryArticles = [
    {
      id: "copyright",
      title: "Musik & Upphovsrätt",
      subtitle: "Rättigheter & Skyldigheter",
      summary: "Vem äger musiken? Vad får du göra på YouTube? En viktig guide om Stim, SAMI och lagen.",
      content: `
        <p><b>- En guide för årskurs 7–9 -</b></p>
        <p>Musik är något vi lyssnar på, skapar och delar varje dag. Men vem äger egentligen musiken? Och vad får du göra med låtar som du gillar? Här reder vi ut begreppen utifrån upphovsrättslagen.</p>
        <h3>1. Vad är upphovsrätt?</h3>
        <p>Upphovsrätten är en lag som skyddar skapande. Den som har skapat ett "litterärt eller konstnärligt verk" har automatiskt upphovsrätt till det.</p>
        <ul>
           <li><b>Stim:</b> Bevakar låtskrivarnas rättigheter.</li>
           <li><b>SAMI:</b> Bevakar artisternas och musikernas rättigheter.</li>
        </ul>
        <h3>2. På internet</h3>
        <p>Du får inte ta en känd låt och lägga som bakgrundsmusik i en video du publicerar öppet (t.ex. på YouTube eller TikTok) utan tillstånd, såvida inte plattformen har avtal.</p>
        <p><i>Läs hela lagen på riksdagen.se</i></p>
      `
    },
    {
      id: "basics", // Viktigt ID för pianot
      title: "Noter & Rytm",
      subtitle: "Interaktiv Teori",
      summary: "Testa pianot, lär dig noternas namn och förstå de vanligaste takterna.",
      content: `
        <h3>Det interaktiva pianot</h3>
        <p>Tryck på tangenterna nedan för att se vad tonen heter. De vita tangenterna är stamtoner (C, D, E...) och de svarta är härledda toner (korsförtecken/b-förtecken).</p>
        
        <div class="piano-wrapper">
          <div class="piano">
            <div class="key white-key" data-note="C">C</div>
            <div class="key black-key bk-1" data-note="C# / Db"></div>
            
            <div class="key white-key" data-note="D">D</div>
            <div class="key black-key bk-2" data-note="D# / Eb"></div>
            
            <div class="key white-key" data-note="E">E</div>
            
            <div class="key white-key" data-note="F">F</div>
            <div class="key black-key bk-3" data-note="F# / Gb"></div>
            
            <div class="key white-key" data-note="G">G</div>
            <div class="key black-key bk-4" data-note="G# / Ab"></div>
            
            <div class="key white-key" data-note="A">A</div>
            <div class="key black-key bk-5" data-note="A# / Bb"></div>
            
            <div class="key white-key" data-note="B">B</div>
            <div class="key white-key" data-note="C (oktav)">C</div>
          </div>
          <div class="note-display" id="note-output">Spela på mig! 🎵</div>
        </div>

        <h3>Notvärden</h3>
        <p>I en vanlig 4/4-takt (fyra fjärdedelstakt) räknar man till fyra i varje takt. Här är hur länge noterna ska klinga:</p>
        
        <table class="rhythm-table">
          <thead><tr><th>Tecken</th><th>Namn</th><th>Längd</th></tr></thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      `
    },
    {
      id: "instruments",
      title: "Instrumentlära",
      subtitle: "Orkesterns familjer",
      summary: "Vad är skillnaden på bleckblås och träblås? Hur fungerar en fiol?",
      content: `
        <h3>Instrumentfamiljer</h3>
        <p>Här kommer snart en guide om stråkar, blås, slagverk och tangentinstrument.</p>
        <p><i>Innehåll under konstruktion...</i></p>
      `
    }
  ];

  section.innerHTML = styles + `
    <div class="page-detail theory-container">
      <h1 style="color: #ffffff;">Teori & Fakta 📘</h1>
      <p style="color: #e0e0e0; max-width:600px; margin: 0 auto 40px auto; font-size: 1.1rem;">
        Klicka på korten nedan för att lära dig mer.
      </p>

      <h2 style="text-align:left; border-bottom:1px solid #555; padding-bottom:10px; color:#ffffff;">Samhälle & Lagar</h2>
      <div id="law-grid" class="grid-section"></div>

      <h2 style="text-align:left; border-bottom:1px solid #555; padding-bottom:10px; margin-top:50px; color:#ffffff;">Musikteori</h2>
      <div id="theory-grid" class="grid-section"></div>
    </div>

    <div id="article-modal" class="article-modal-overlay hidden-force">
      <div class="article-content">
        <span class="close-btn" id="close-article">&times;</span>
        <h2 id="article-title">Titel</h2>
        <div id="article-body">Text...</div>
      </div>
    </div>
  `;

  // --- 4. LOGIK ---
  const lawGrid = section.querySelector('#law-grid');
  const theoryGrid = section.querySelector('#theory-grid');
  const articleModal = section.querySelector('#article-modal');
  const closeArticleBtn = section.querySelector('#close-article');
  const artTitle = section.querySelector('#article-title');
  const artBody = section.querySelector('#article-body');

  // Funktion för att aktivera pianot när modalen öppnas
  const initPiano = () => {
    const keys = artBody.querySelectorAll('.key');
    const display = artBody.querySelector('#note-output');

    if (keys.length === 0) return; // Inget piano i denna artikel

    keys.forEach(key => {
      // Hantera musklick
      key.addEventListener('mousedown', () => {
        key.classList.add('active');
        display.textContent = `Ton: ${key.getAttribute('data-note')}`;
      });
      key.addEventListener('mouseup', () => key.classList.remove('active'));
      key.addEventListener('mouseleave', () => key.classList.remove('active'));
    });
  };

  // Funktion för att skapa kort
  const createCard = (item, container) => {
    const card = document.createElement('div');
    card.className = 'theory-card';
    card.innerHTML = `
      <span class="card-label">Läs mer</span>
      <h3 class="card-title">${item.title}</h3>
      <p style="font-weight:bold; color:#3498db; margin-bottom:10px;">${item.subtitle}</p>
      <p style="color:#444;">${item.summary}</p>
    `;

    card.addEventListener('click', () => {
      artTitle.innerText = item.title;
      artBody.innerHTML = item.content;
      articleModal.classList.remove('hidden-force');

      // OM det är teorisidan, aktivera pianot!
      if (item.id === "basics") {
        initPiano();
      }
    });

    container.appendChild(card);
  };

  // Skapa korten
  createCard(theoryArticles[0], lawGrid);     // Upphovsrätt
  createCard(theoryArticles[1], theoryGrid);  // Noter (med piano!)
  createCard(theoryArticles[2], theoryGrid);  // Instrument

  // Stäng modal
  closeArticleBtn.addEventListener('click', () => { articleModal.classList.add('hidden-force'); });
  articleModal.addEventListener('click', (e) => { if (e.target === articleModal) articleModal.classList.add('hidden-force'); });

  return section;
}