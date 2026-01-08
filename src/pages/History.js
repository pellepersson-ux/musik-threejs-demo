export function History() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  const styles = `
    <style>
      .hidden-force { display: none !important; }

      /* --- LAYOUT --- */
      .history-container {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 50px;
      }

      .grid-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin-top: 30px;
        text-align: left;
      }

      /* --- KORT DESIGN (Både bok och artiklar) --- */
      .history-card {
        background: #fff;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-left: 5px solid #e67e22; /* Orange för historia */
      }

      .history-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.15);
      }

      .card-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #888;
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
        color: #e67e22;
      }

      /* Specialfärg för spelet/boken */
      .card-game {
        border-left-color: #9b59b6; /* Lila */
        background: #fdfafec0;
      }
      .card-game .read-more-btn { color: #9b59b6; }


      /* --- ARTIKEL-MODAL (För textläsning) --- */
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
        padding: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-family: 'Georgia', serif; /* Mer bok-känsla på texten */
      }

      .article-content h2 { font-family: 'Outfit', sans-serif; color: #e67e22; margin-bottom: 5px; }
      .article-content h3 { font-family: 'Outfit', sans-serif; margin-top: 30px; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px;}
      .article-content p { line-height: 1.8; color: #333; font-size: 1.1rem; margin-bottom: 15px; }
      .article-content ul { margin-bottom: 20px; padding-left: 20px; line-height: 1.6;}
      .article-content li { margin-bottom: 8px; }
      .article-period { font-size: 1.2rem; color: #777; font-style: italic; margin-bottom: 20px; display:block; }

      .close-btn {
        position: absolute; top: 15px; right: 25px;
        font-size: 3rem; cursor: pointer; color: #ccc;
        font-family: sans-serif;
        line-height: 0.8;
      }
      .close-btn:hover { color: #333; }

      /* --- BOK-MODAL STYLES (Kvar från förr) --- */
      .book-modal-content {
         /* (Behövs för boken, vi återanvänder strukturen från förra koden om vi vill, 
             men här fokuserar vi på att inte krocka) */
         display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;
      }
      /* (Här kan vi lägga in bok-CSS om vi vill köra boken samtidigt, 
          men för tydlighetens skull separerar vi funktionerna nedan) */

    </style>
  `;

  // --- 2. DATA: EPOKER & ARTIKLAR ---
  const epochs = [
    {
      id: "renassans",
      title: "Renässansen",
      period: "ca 1450–1600",
      summary: "Pånyttfödelse, upptäcktsresor och polyfoni.",
      // Här ligger din långa text formaterad som HTML
      content: `
        <p><b>– Pånyttfödelsen –</b></p>
        
        <h3>Vad var renässansen?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Under den här tiden vaknade ett nytt intresse för antikens Grekland och Rom. Man ville utforska världen, människan och kulturen på nytt. Det var en tid av upptäckter och nya idéer.</p>

        <h3>Samtiden – Vad hände i världen?</h3>
        <p>Medan medeltiden ofta fokuserade på Gud och kyrkan, handlade renässansen mer om <b>humanism</b> – en vilja att lära sig om människan och omvärlden.</p>
        <ul>
          <li><b>Upptäcktsresor:</b> Christofer Columbus "upptäckte" Amerika.</li>
          <li><b>Vetenskap:</b> Nicolaus Copernicus räknade ut att jorden snurrar runt solen (och inte tvärtom).</li>
          <li><b>Konst & Uppfinningar:</b> Leonardo da Vinci (känd som ett "universalgeni") målade, uppfann och studerade kroppen.</li>
        </ul>

        <h3>Musiken – Hur lät den?</h3>
        <p>Under renässansen blev musiken mer "tät" och fyllig än under medeltiden. Här är de viktigaste kännetecknen:</p>
        <ul>
          <li><b>Polyfoni (Flerstämmighet):</b> Istället för en ensam melodi hade man nu ofta 4–5 olika stämmor som sjöngs samtidigt. Varje stämma hade sin egen melodi (detta kallas självständiga stämmor).</li>
          <li><b>Imitation:</b> En teknik där stämmorna härmar varandra. En stämma börjar, och strax efter kommer nästa in med samma melodi.</li>
          <li><b>A Cappella:</b> Detta var körsångens "gyllene era". A cappella betyder "som i kapellet" och innebär sång helt utan instrument.</li>
          <li><b>Modala skalor:</b> Man använde inte dur och moll som vi gör idag, utan så kallade kyrkotonarter (modala skalor).</li>
        </ul>

        <h3>Instrument</h3>
        <p>Även om körsång var viktigast, användes instrument flitigt. Några vanliga var:</p>
        <ul>
          <li><b>Luta:</b> Ett stränginstrument, föregångare till gitarren.</li>
          <li><b>Viola da gamba:</b> Ett stråkinstrument som man höll mellan knäna.</li>
          <li><b>Krumhorn:</b> Ett blåsinstrument med en böjd form.</li>
          <li><b>Orgel:</b> Tillåtet i kyrkan.</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <p>Man delade ofta upp musiken i två kategorier: Sakral (kyrklig) och Profan (folklig/världslig).</p>
        <p><b>1. Sakral musik (Kyrklig)</b><br>
        <i>Mässa:</i> Musik skriven till gudstjänstens texter (t.ex. Kyrie, Gloria).<br>
        <i>Motett:</i> En mindre körsång med religiös text, ofta på latin.</p>
        
        <p><b>2. Profan musik (Folklig/Världslig)</b><br>
        Här fanns olika sånger beroende på land. Den viktigaste var <i>Madrigalen</i>, en italiensk sångform där man ofta använde <b>tonmåleri</b>.</p>
        
        <div style="background:#f9f9f9; padding:15px; border-left: 4px solid #e67e22; margin: 20px 0;">
            <b>Vad är tonmåleri?</b><br>
            Det är när musiken målar upp texten. Om texten handlar om att "springa upp och ner", så går melodin också upp och ner!
        </div>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Josquin des Prez (1440–1521):</b> En superstjärna under sin tid. Han var så känd att Leonardo da Vinci målade av honom.</li>
            <li><b>Giovanni Pierluigi da Palestrina (1525–1594):</b> Mästare på kyrkomusik och mässor.</li>
            <li><b>Thomas Tallis (1505–1585):</b> Skrev bland annat ett stycke för hela 40 stämmor (Spem in alium).</li>
        </ul>

        <h3>Begreppslista</h3>
        <ul>
            <li><b>Polyfoni:</b> Flerstämmighet där alla stämmor är lika viktiga.</li>
            <li><b>A cappella:</b> Sång utan instrument.</li>
            <li><b>Sakral musik:</b> Musik för kyrkan/religiöst bruk.</li>
            <li><b>Profan musik:</b> Världslig musik (fest, kärlekssånger).</li>
            <li><b>Imitation:</b> När en stämma härmar en annan.</li>
        </ul>
      `
    }
  ];


  // --- 3. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail history-container">
      <h1>Musikhistoria 📜</h1>
      <p style="color: #ccc; max-width:600px; margin: 0 auto 40px auto;">
        Välkommen till arkivet. Här kan du läsa fördjupande texter om olika epoker eller utforska interaktiva berättelser.
      </p>

      <h2 style="text-align:left; border-bottom:1px solid #ddd; padding-bottom:10px;">Utforska</h2>
      <div class="grid-section">
        
        <div class="history-card card-game" id="open-storybook-btn">
          <span class="card-