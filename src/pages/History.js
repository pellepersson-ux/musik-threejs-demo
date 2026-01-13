export function History() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  const styles = `
    <style>
      .hidden-force { display: none !important; }

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
        color: #e67e22;
      }

      /* Specialfärg för spelet (LILA) */
      .card-game {
        border-left-color: #9b59b6; 
        background: #fdfafec0;
      }
      .card-game .read-more-btn { color: #9b59b6; }

      /* --- MODAL --- */
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
        font-family: 'Georgia', serif; 
      }

      .article-content h2 { font-family: 'Outfit', sans-serif; color: #e67e22; margin-bottom: 5px; }
      .article-content h3 { font-family: 'Outfit', sans-serif; margin-top: 30px; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px;}
      .article-content h4 { font-family: 'Outfit', sans-serif; margin-top: 20px; color: #444; font-size: 1.1rem; }
      .article-content p { line-height: 1.8; color: #222; font-size: 1.1rem; margin-bottom: 15px; }
      .article-content ul { margin-bottom: 20px; padding-left: 20px; line-height: 1.6; color: #222;}
      .article-content li { margin-bottom: 8px; }
      .article-period { font-size: 1.2rem; color: #444; font-style: italic; margin-bottom: 20px; display:block; }

      .close-btn {
        position: absolute; top: 15px; right: 25px;
        font-size: 3rem; cursor: pointer; color: #333;
        font-family: sans-serif;
        line-height: 0.8;
      }
      .close-btn:hover { color: #e74c3c; }
    </style>
  `;

  // --- 2. DATA: EPOKER ---
  const epochs = [
    {
      id: "renassans",
      title: "Renässansen",
      period: "ca 1450-1600",
      summary: "Pånyttfödelse, upptäcktsresor och polyfoni.",
      content: `
        <p><b>- FAKTABLAD: MUSIK UNDER RENÄSSANSEN -</b></p>
        
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Det man ville väcka till liv igen var idéer och ideal från de gamla grekerna och romarna (antiken). Perioden präglades av en nyfikenhet på människan, kulturen och världen.</p>

        <h3>1. Samtiden – Nytänkarnas tid</h3>
        <p>Under renässansen hände mycket som förändrade hur människor såg på världen. Det var en tid för upptäckter och vetenskap.</p>
        <ul>
            <li><b>Kända personer:</b> Upptäckaren Christofer Columbus, astronomen Nicolaus Copernicus och universalgeniet Leonardo da Vinci (som var både konstnär och uppfinnare) verkade under denna tid.</li>
            <li><b>Boktryckarkonsten:</b> Man kunde nu trycka böcker, vilket gjorde att noter och musik kunde spridas enklare. Till exempel publicerades böcker med Josquin des Prez mässor.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken under renässansen utvecklades och blev mer komplex än under medeltiden. Här är de viktigaste dragen:</p>
        <ul>
            <li><b>Polyfoni (Flerstämmighet):</b> Istället för en enda melodi hade musiken ofta 4–5 olika stämmor som var lika viktiga och hade självständiga melodier.</li>
            <li><b>Imitation:</b> En vanlig teknik var att stämmorna härmade (imiterade) varandra. En stämma kunde börja med en melodi, och strax efter kom nästa stämma in med samma melodi.</li>
            <li><b>A cappella:</b> Renässansen kallas ofta för a cappella-musikens gyllene era. Det betyder sång utan instrument (ordagrant "som i kapellet").</li>
            <li><b>Modala skalor:</b> Man använde inte dur och moll som vi gör idag, utan så kallade kyrkotonarter eller modala skalor.</li>
        </ul>
        <p><i>Prova själv: Du kan spela modala skalor på ett piano genom att bara använda de vita tangenterna. En skala är C till C, en annan D till D, en tredje E till E, osv.</i></p>

        <h3>3. Instrumenten</h3>
        <p>Även om sång var väldigt viktigt användes också instrument:</p>
        <ul>
            <li><b>Luta:</b> Ett stränginstrument som påminner om en gitarr.</li>
            <li><b>Viola da gamba:</b> Ett stråkinstrument (föregångare till cellon, men med band på greppbrädan).</li>
            <li><b>Krumhorn:</b> Ett blåsinstrument med en speciell klang.</li>
        </ul>

        <h3>4. Musikstilar och Genrer</h3>
        <p>Man skiljde på sakral (kyrklig) och profan (folklig/världslig) musik.</p>
        
        <h4>Sakral musik (Kyrklig)</h4>
        <ul>
            <li><b>Mässa:</b> Tonsättning av gudstjänstens texter, t.ex. "Kyrie" och "Gloria".</li>
            <li><b>Motett:</b> En mindre körsång med religiös text, ofta på latin.</li>
        </ul>

        <h4>Profan musik (Folklig/Världslig)</h4>
        <p>Denna musik var ofta mer varierad och fanns i olika former i olika länder:</p>
        <ul>
            <li><b>Madrigal:</b> En mycket populär sångform som startade i Italien men blev en enorm trend i England efter 1588. Madrigaler innehöll ofta tonmåleri, där musiken beskriver texten (t.ex. att melodin går neråt när man sjunger ordet "ner").</li>
            <li>Andra former var <b>Chanson</b> (Frankrike) och <b>Lied</b> (Tyskland).</li>
        </ul>

        <h3>5. Viktiga Tonsättare</h3>
        <ul>
            <li><b>Josquin des Prez (1440–1521):</b> En superstjärna under sin tid. Han reste runt i Europa och hans musik älskades av både Martin Luther och Leonardo da Vinci.</li>
            <li><b>Giovanni Pierluigi da Palestrina (1525–1594):</b> Mästare på kyrkomusik, särskilt mässor.</li>
            <li><b>Thomas Tallis (1505–1585):</b> Engelsk kompositör som skrev ett känt verk för hela 40 stämmor!</li>
            <li><b>William Byrd (1543–1623):</b> Känd för sin polyfona musik.</li>
        </ul>

        <h3>6. Exempel på kompositioner (Lyssningstips)</h3>
        <ul>
            <li><i>Ave Maria ... Virgo serena</i> – Josquin des Prez (Ett av hans mest kända verk).</li>
            <li><i>Spem in alium</i> – Thomas Tallis (Ett mäktigt verk för 40 stämmor).</li>
            <li><i>Fair Phyllis I Saw</i> – John Farmer (En engelsk madrigal med tydligt tonmåleri och humor).</li>
            <li><i>Missa Brevis (Credo)</i> – Palestrina.</li>
        </ul>
      `
    },
    {
      id: "barock",
      title: "Barocken",
      period: "ca 1600-1750",
      summary: "Pampig stil, motorisk rytm, opera och Bach.",
      content: `
        <p><b>- Den pampiga stilen -</b></p>
        <h3>Musiken</h3>
        <ul>
            <li><b>Motorisk rytm:</b> Stadig puls som en maskin.</li>
            <li><b>Generalbas:</b> Basstämma + ackord.</li>
            <li><b>Terrassdynamik:</b> Plötsliga växlingar mellan starkt och svagt.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Johann Sebastian Bach</li><li>Georg Friedrich Händel</li><li>Antonio Vivaldi</li></ul>
      `
    },
    {
      id: "klassicism",
      title: "Klassicismen",
      period: "ca 1750-1825",
      summary: "Förnuft, balans och giganterna Haydn, Mozart & Beethoven.",
      content: `
        <p><b>- Förnuft och balans -</b></p>
        <h3>Musiken</h3>
        <ul>
            <li><b>Homofoni:</b> En tydlig melodi med enkelt komp.</li>
            <li><b>Nyanser:</b> Crescendo och Diminuendo.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Haydn</li><li>Mozart</li><li>Beethoven</li></ul>
      `
    },
    {
      id: "romantik",
      title: "Romantiken",
      period: "ca 1815-1910",
      summary: "Känslor, fantasi, nationalromantik och jätteorkestrar.",
      content: `
        <p><b>- Känslor och fantasi -</b></p>
        <h3>Musiken</h3>
        <ul>
            <li><b>Friare form:</b> Inga strikta regler.</li>
            <li><b>Stora känslor:</b> Dramatiskt och passionerat.</li>
            <li><b>Programmusik:</b> Musik som berättar en saga.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Schubert</li><li>Chopin</li><li>Wagner</li><li>Grieg</li></ul>
      `
    },
    {
      id: "modernism",
      title: "Modernismen",
      period: "ca 1910-nutid",
      summary: "Reglerna rivs! Atonalitet, experiment och kaos.",
      content: `
        <p><b>- Tiden då reglerna revs -</b></p>
        <h3>Musiken</h3>
        <ul>
            <li><b>Dissonanser:</b> Det låter skevt och falskt.</li>
            <li><b>Atonalitet:</b> Ingen tonart alls.</li>
            <li><b>Nya ljud:</b> Syntar och inspelningar.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Stravinsky</li><li>Schönberg</li><li>John Cage</li></ul>
      `
    }
  ];

  // --- 3. RENDERING ---
  section.innerHTML = styles + `
    <div class="page-detail history-container">
      
      <h1 style="color: #ffffff;">Musikhistoria 📜</h1>
      <p style="color: #e0e0e0; max-width:600px; margin: 0 auto 40px auto; font-size: 1.1rem;">
        Res genom tiderna och upptäck hur musiken har utvecklats från medeltid till nutid.
      </p>

      <h2 style="text-align:left; border-bottom:1px solid #555; padding-bottom:10px; color:#ffffff;">Utforska</h2>
      <div class="grid-section">
        <div class="history-card card-game" id="open-storybook-btn">
          <span class="card-label">Interaktiv Berättelse</span>
          <h3 class="card-title">Rockens Historia</h3>
          <p style="color:#444;">En lättläst bilderbok om hur rockmusiken föddes.</p>
          <span class="read-more-btn">Öppna boken ➡</span>
        </div>
      </div>

      <h2 style="text-align:left; border-bottom:1px solid #555; padding-bottom:10px; margin-top:50px; color:#ffffff;">Musikhistoriens Epoker</h2>
      <div id="epoch-grid" class="grid-section"></div>

    </div>

    <div id="article-modal" class="article-modal-overlay hidden-force">
      <div class="article-content">
        <span class="close-btn" id="close-article">&times;</span>
        <h2 id="article-title">Titel</h2>
        <span id="article-period" class="article-period">Årtal</span>
        <div id="article-body">Text...</div>
      </div>
    </div>
  `;

  // --- 4. LOGIK ---
  const epochGrid = section.querySelector('#epoch-grid');
  const articleModal = section.querySelector('#article-modal');
  const closeArticleBtn = section.querySelector('#close-article');
  const artTitle = section.querySelector('#article-title');
  const artPeriod = section.querySelector('#article-period');
  const artBody = section.querySelector('#article-body');

  epochs.forEach(epoch => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <span class="card-label">Epok</span>
      <h3 class="card-title">${epoch.title}</h3>
      <p style="font-weight:bold; color:#e67e22; margin-bottom:10px;">${epoch.period}</p>
      <p style="color:#444;">${epoch.summary}</p>
      <span class="read-more-btn">Läs artikel ➡</span>
    `;
    card.addEventListener('click', () => {
      artTitle.innerText = epoch.title;
      artPeriod.innerText = epoch.period;
      artBody.innerHTML = epoch.content;
      articleModal.classList.remove('hidden-force');
    });
    epochGrid.appendChild(card);
  });

  closeArticleBtn.addEventListener('click', () => { articleModal.classList.add('hidden-force'); });
  articleModal.addEventListener('click', (e) => { if (e.target === articleModal) articleModal.classList.add('hidden-force'); });

  section.querySelector('#open-storybook-btn').addEventListener('click', () => {
    alert("Här laddas bilderboken!");
  });

  return section;
}