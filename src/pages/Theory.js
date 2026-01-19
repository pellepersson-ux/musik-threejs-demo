export function Theory() {
  const container = document.createElement('div');
  container.className = 'teori-page';

  // ==========================================
  // 1. DATA: NOTVÄRDEN (Till tabellen)
  // ==========================================
  // Vi använder säkra Unicode-symboler här för att undvika "fyrkanter"
  const notesData = [
    { symbol: "𝅝", name: "Helnot", val: "4 slag" },
    { symbol: "𝅗𝅥", name: "Halvnot", val: "2 slag" },
    { symbol: "𝅘𝅥", name: "Fjärdedelsnot", val: "1 slag" },
    { symbol: "𝅘𝅥𝅮", name: "Åttondelsnot", val: "1/2 slag" }
  ];

  const tableRows = notesData.map(n => `
    <tr>
      <td class="note-symbol">${n.symbol}</td>
      <td><strong>${n.name}</strong></td>
      <td>${n.val}</td>
    </tr>
  `).join('');

  // ==========================================
  // 2. DATA: ARTIKLAR
  // ==========================================
  const articles = [
    // --- UNDERKATEGORI: RYTM ---
    {
      category: "rytm",
      id: "note-values",
      title: "Notvärden & Puls",
      subtitle: "Grunderna i tid",
      summary: "Lär dig skillnaden på en helnot och en fjärdedel, och vad puls egentligen är.",
      content: `
        <h3>Musikens Tidsmaskin ⏳</h3>
        <p>Musik består av ljud som är ordnade i tid. För att veta hur länge vi ska spela en ton använder vi <b>notvärden</b>.</p>
        
        <h4>Notvärden (4/4-takt)</h4>
        <table class="theory-table">
          <thead><tr><th>Tecken</th><th>Namn</th><th>Längd</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>

        <h4>Puls vs. Rytm</h4>
        <p><b>Puls</b> är det stadiga hjärtslaget i musiken (det du stampar takten till).<br>
        <b>Rytm</b> är det vi spelar "ovanpå" pulsen (korta och långa toner blandat).</p>
      `
    },
    {
      category: "rytm",
      id: "time-sig",
      title: "Taktarter",
      subtitle: "4/4, 3/4 och 6/8",
      summary: "Vad betyder siffrorna i början av notraden? Täljare och nämnare.",
      content: `
        <h3>Taktarten bestämmer gunget</h3>
        <p>I början av ett notsystem står ofta två siffror, t.ex. 4/4.</p>
        <ul>
          <li><b>Övre siffran:</b> HUR MÅNGA slag som ryms i varje takt.</li>
          <li><b>Undre siffran:</b> VILKET notvärde som räknas som ett slag.</li>
        </ul>
        <p><b>Vanliga taktarter:</b><br>
        - <b>4/4</b>: Vanligaste pop-takten.<br>
        - <b>3/4</b>: Vals (Tänk "Ja må han leva").</p>
      `
    },

    // --- UNDERKATEGORI: TON ---
    {
      category: "ton",
      id: "piano-basics",
      title: "Tonernas namn",
      subtitle: "Interaktivt Piano",
      summary: "Vad heter de vita och svarta tangenterna? Testa själv på pianot.",
      content: `
        <h3>Klaviaturen 🎹</h3>
        <p>Musikens alfabet har bara 7 bokstäver: <b>C, D, E, F, G, A, B</b>.</p>
        <p>Testa att klicka på tangenterna nedan:</p>

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
          <div class="piano-output" id="note-display">Klicka på en tangent...</div>
        </div>
      `
    },
    {
      category: "ton",
      id: "scales",
      title: "Dur & Moll",
      subtitle: "Musikens känslolägen",
      summary: "Skillnaden mellan glada och sorgliga klanger. Allt handlar om tersen.",
      content: `
        <h3>Glad eller ledsen? 🙂 ☹️</h3>
        <p>Det enklaste sättet att beskriva skillnaden mellan Dur och Moll är känslan.</p>
        <ul>
          <li><b>Dur:</b> Låter ofta glatt, ljust, triumferande.</li>
          <li><b>Moll:</b> Låter ofta sorgligt, mörkt, allvarligt.</li>
        </ul>
      `
    },

    // --- KATEGORI: SAMHÄLLE ---
    {
      category: "samhälle",
      id: "copyright",
      title: "Upphovsrätt & Regler",
      subtitle: "Lagar på internet",
      summary: "Vem äger musiken? Vad gäller på YouTube? Stim & SAMI.",
      content: `
        <h3>Vem äger musiken? ©</h3>
        <p>När du skapar en låt skyddas den av <b>Upphovsrättslagen</b>.</p>
        
        <h4>Viktiga organisationer</h4>
        <ul>
          <li><b>Stim:</b> Ser till att <i>låtskrivarna</i> får betalt.</li>
          <li><b>SAMI:</b> Ser till att <i>artisterna</i> får betalt.</li>
        </ul>

        <h4>På sociala medier</h4>
        <p>Huvudregeln är: Du får inte lägga upp andras musik i dina videor utan lov eller licens.</p>
      `
    }
  ];

  // ==========================================
  // 3. CSS
  // ==========================================
  document.body.style.backgroundColor = "#121212";

  const style = document.createElement('style');
  style.innerHTML = `
    .teori-page {
      padding: 40px 20px;
      max-width: 1100px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
    }

    /* HEADER */
    .teori-header { text-align: center; margin-bottom: 50px; }
    .teori-title {
      font-size: 3rem; font-weight: 800; margin-bottom: 10px;
      background: linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .teori-intro { color: #aaa; font-size: 1.2rem; max-width: 600px; margin: 0 auto; }

    /* LAYOUT STRUKTUR */
    .main-section { margin-bottom: 80px; }
    
    /* STOR RUBRIK FÖR HUVUDOMRÅDEN (Musikteori / Samhälle) */
    .section-super-title {
      font-size: 2.2rem; color: #fff; margin-bottom: 30px;
      padding-left: 15px; border-left: 6px solid #a18cd1;
      text-transform: uppercase; letter-spacing: 1px;
    }

    /* UNDERRUBRIK FÖR KATEGORIER (Rytm / Melodi) */
    .sub-section-group { margin-bottom: 50px; padding-left: 10px; }
    .sub-section-title {
      font-size: 1.4rem; color: #bbb; margin-bottom: 20px;
      font-weight: 600; display: flex; align-items: center; gap: 10px;
    }
    .sub-section-title::after {
      content: ""; flex-grow: 1; height: 1px; background: #333; margin-left: 15px;
    }

    /* GRID FÖR KORT */
    .cards-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    /* AVDELARE */
    .big-divider { border: 0; height: 1px; background: #333; margin: 60px 0; }

    /* KORT DESIGN */
    .theory-card {
      background: #1e1e1e !important;
      border: 1px solid #333; border-radius: 16px; padding: 25px;
      cursor: pointer; transition: transform 0.2s, border-color 0.2s;
      display: flex; flex-direction: column;
    }
    .theory-card:hover { transform: translateY(-5px); border-color: #a18cd1; }
    .card-meta { font-size: 0.8rem; color: #a18cd1; text-transform: uppercase; font-weight: bold; margin-bottom: 8px; }
    .card-h3 { margin: 0 0 10px 0; font-size: 1.4rem; color: #fff; }
    .card-p { color: #bbb; font-size: 0.95rem; line-height: 1.5; flex-grow: 1; }
    .card-arrow { margin-top: 15px; color: #fff; font-weight: bold; font-size: 0.9rem; text-align: right;}

    /* MODAL (Popup) */
    .modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85); z-index: 2000;
      display: flex; justify-content: center; align-items: center;
      padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.3s;
    }
    .modal-overlay.open { opacity: 1; pointer-events: all; }
    .modal-content {
      background: #1e1e1e; border: 1px solid #444; width: 100%; max-width: 800px;
      max-height: 85vh; overflow-y: auto; border-radius: 12px; padding: 40px;
      position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); color: #ddd;
    }
    .modal-close {
      position: absolute; top: 15px; right: 20px; font-size: 2rem; cursor: pointer; color: #888; line-height: 1;
    }
    .modal-close:hover { color: #fff; }
    .modal-content h3 { color: #a18cd1; margin-top: 0; font-size: 2rem; }
    .modal-content h4 { color: #fff; margin-top: 30px; font-size: 1.3rem; }
    
    /* PIANO & TABLE styles */
    .theory-table { width: 100%; border-collapse: collapse; margin: 20px 0; background: #252525; border-radius: 8px; }
    .theory-table th { text-align: left; padding: 15px; background: #333; color: #fff; }
    .theory-table td { padding: 15px; border-bottom: 1px solid #333; }
    .note-symbol { font-size: 2.5rem; line-height: 0.5; color: #a18cd1; }

    .piano-wrapper { background: #111; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; border: 1px solid #333; }
    .piano { display: inline-flex; position: relative; }
    .key { position: relative; cursor: pointer; border-radius: 0 0 4px 4px; user-select: none; }
    .white-key { width: 40px; height: 140px; background: #eee; border: 1px solid #aaa; margin: 0 2px; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px; color: #333; font-weight: bold; }
    .white-key.active { background: #ccc; transform: translateY(2px); }
    .black-key { width: 28px; height: 90px; background: #000; position: absolute; z-index: 2; border-radius: 0 0 3px 3px; border: 1px solid #444; }
    .black-key.active { background: #333; transform: translateY(2px); }
    .bk-1 { left: 30px; } .bk-2 { left: 76px; } .bk-3 { left: 166px; } .bk-4 { left: 212px; } .bk-5 { left: 258px; }
    .piano-output { margin-top: 15px; color: #a18cd1; font-weight: bold; min-height: 1.2em; font-size: 1.2rem; }
  `;
  container.appendChild(style);

  // ==========================================
  // 4. HTML STRUKTUR
  // ==========================================

  // --- Header ---
  const header = document.createElement('div');
  header.className = 'teori-header';
  header.innerHTML = `
    <h1 class="teori-title">Kunskapsbanken</h1>
    <p class="teori-intro">Här hittar du fakta om musikens byggstenar och samhällets lagar.</p>
  `;
  container.appendChild(header);

  const contentDiv = document.createElement('div');
  container.appendChild(contentDiv);

  // --- HJÄLPFUNKTION: Skapa rutnät för kort ---
  function createCardGrid(catFilter) {
    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    articles.filter(a => a.category === catFilter).forEach(item => {
      const card = document.createElement('div');
      card.className = 'theory-card';
      card.innerHTML = `
        <span class="card-meta">${item.subtitle}</span>
        <h3 class="card-h3">${item.title}</h3>
        <p class="card-p">${item.summary}</p>
        <div class="card-arrow">Läs mer &rarr;</div>
      `;
      card.onclick = () => openModal(item);
      grid.appendChild(card);
    });
    return grid;
  }

  // ===============================================
  // SEKTION 1: MUSIKTEORI (Övergripande rubrik)
  // ===============================================
  const musicTheorySection = document.createElement('div');
  musicTheorySection.className = 'main-section';
  musicTheorySection.innerHTML = `<h2 class="section-super-title">Musikteori 🎵</h2>`;

  // 1.1 Rytm & Takt
  const rhythmGroup = document.createElement('div');
  rhythmGroup.className = 'sub-section-group';
  rhythmGroup.innerHTML = `<h3 class="sub-section-title">Rytm & Takt</h3>`;
  rhythmGroup.appendChild(createCardGrid("rytm"));
  musicTheorySection.appendChild(rhythmGroup);

  // 1.2 Melodi & Ackord
  const tonalGroup = document.createElement('div');
  tonalGroup.className = 'sub-section-group';
  tonalGroup.innerHTML = `<h3 class="sub-section-title">Melodi & Ackord</h3>`;
  tonalGroup.appendChild(createCardGrid("ton"));
  musicTheorySection.appendChild(tonalGroup);

  contentDiv.appendChild(musicTheorySection);

  // AVDELARE
  const hr = document.createElement('hr');
  hr.className = 'big-divider';
  contentDiv.appendChild(hr);

  // ===============================================
  // SEKTION 2: SAMHÄLLE & LAGAR
  // ===============================================
  const societySection = document.createElement('div');
  societySection.className = 'main-section';
  societySection.innerHTML = `<h2 class="section-super-title">Samhälle & Lagar ⚖️</h2>`;

  // Grid för samhälle
  societySection.appendChild(createCardGrid("samhälle"));
  contentDiv.appendChild(societySection);


  // ==========================================
  // 5. MODAL & PIANO-LOGIK
  // ==========================================
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <div id="modal-body-content"></div>
    </div>
  `;
  container.appendChild(modal);

  const modalBody = modal.querySelector('#modal-body-content');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(item) {
    modalBody.innerHTML = item.content;
    modal.classList.add('open');
    if (item.id === "piano-basics") initPiano(modalBody);
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  closeBtn.onclick = closeModal;
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  function initPiano(parent) {
    const keys = parent.querySelectorAll('.key');
    const display = parent.querySelector('#note-display');
    keys.forEach(key => {
      key.addEventListener('mousedown', () => {
        key.classList.add('active');
        display.innerText = `Ton: ${key.getAttribute('data-note')}`;
      });
      key.addEventListener('mouseup', () => key.classList.remove('active'));
      key.addEventListener('mouseleave', () => key.classList.remove('active'));
    });
  }

  return container;
}