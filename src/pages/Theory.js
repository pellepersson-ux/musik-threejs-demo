export function Theory() {
  const container = document.createElement('div');
  container.className = 'teori-page';

  // ==========================================
  // 1. DATA: NOTVÄRDEN
  // ==========================================
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
  // 2. DATA: ARTIKLARNA (Uppdelade)
  // ==========================================
  const articles = [
    // --- KATEGORI: RYTM & TID ---
    {
      category: "rytm",
      id: "note-values",
      title: "Notvärden & Puls",
      subtitle: "Hur man mäter tid",
      summary: "Lär dig skillnaden på en helnot och en fjärdedel, och vad puls egentligen är.",
      content: `
        <h3>Musikens Tidsmaskin ⏳</h3>
        <p>Musik består av ljud som är ordnade i tid. För att veta hur länge vi ska spela en ton använder vi <b>notvärden</b>.</p>
        
        <h4>Vanliga notvärden (4/4-takt)</h4>
        <table class="theory-table">
          <thead><tr><th>Tecken</th><th>Namn</th><th>Längd</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>

        <h4>Puls vs. Rytm</h4>
        <p><b>Puls</b> är det stadiga hjärtslaget i musiken.<br>
        <b>Rytm</b> är det vi spelar "ovanpå" pulsen.</p>
      `
    },
    {
      category: "rytm",
      id: "time-sig",
      title: "Taktarter",
      subtitle: "4/4, 3/4 och 6/8",
      summary: "Vad betyder siffrorna i början av notraden? Vi reder ut begreppen.",
      content: `
        <h3>Taktarten bestämmer gunget</h3>
        <p>I början av ett notsystem står ofta två siffror, t.ex. 4/4.</p>
        <ul>
          <li><b>Övre siffran:</b> HUR MÅNGA slag som ryms i varje takt.</li>
          <li><b>Undre siffran:</b> VILKET notvärde som räknas som ett slag.</li>
        </ul>
      `
    },

    // --- KATEGORI: TON & HARMONI ---
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
      summary: "Varför låter viss musik glatt och annan sorgligt? Skillnaden ligger i tersen.",
      content: `
        <h3>Glad eller ledsen? 🙂 ☹️</h3>
        <ul>
          <li><b>Dur:</b> Låter ofta glatt, ljust. (Tänk "Blinka lilla stjärna").</li>
          <li><b>Moll:</b> Låter ofta sorgligt, mörkt. (Tänk "Vem kan segla").</li>
        </ul>
      `
    },

    // --- KATEGORI: SAMHÄLLE ---
    {
      category: "samhälle",
      id: "copyright",
      title: "Upphovsrätt",
      subtitle: "Vem äger låten?",
      summary: "Om Stim, SAMI och vad du får göra på YouTube och TikTok.",
      content: `
        <h3>Vem äger musiken? ©</h3>
        <p>När du skapar en låt skyddas den av <b>Upphovsrättslagen</b>.</p>
        <h4>Viktiga organisationer</h4>
        <ul>
          <li><b>Stim:</b> Betalar <i>låtskrivarna</i>.</li>
          <li><b>SAMI:</b> Betalar <i>artisterna</i>.</li>
        </ul>
      `
    }
  ];

  // ==========================================
  // 3. CSS (DARK MODE FORCED)
  // ==========================================
  // Vi sätter bakgrunden explicit för att garantera att det vita försvinner
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
    .teori-header { text-align: center; margin-bottom: 60px; }
    .teori-title {
      font-size: 3rem; font-weight: 800; margin-bottom: 10px;
      background: linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .teori-subtitle { color: #aaa; font-size: 1.2rem; }

    /* SEKTIONER */
    .category-section { margin-bottom: 60px; }
    .cat-title {
      font-size: 1.8rem; color: #fff; margin-bottom: 20px;
      border-bottom: 2px solid #333; padding-bottom: 10px; display: inline-block;
    }

    /* GRID */
    .cards-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }

    /* KORTEN (DARK MODE - VIKTIGT: MÖRK BAKGRUND) */
    .theory-card {
      background: #1e1e1e !important; /* Tvinga mörk färg */
      border: 1px solid #333;
      border-radius: 16px;
      padding: 25px;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
      display: flex; flex-direction: column;
    }
    .theory-card:hover { transform: translateY(-5px); border-color: #a18cd1; }
    .card-meta { font-size: 0.85rem; color: #a18cd1; text-transform: uppercase; font-weight: bold