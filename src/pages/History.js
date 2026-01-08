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

      /* --- KORT DESIGN --- */
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

      /* Specialfärg för spelet/boken */
      .card-game {
        border-left-color: #9b59b6; /* Lila */
        background: #fdfafec0;
      }
      .card-game .read-more-btn { color: #9b59b6; }


      /* --- ARTIKEL-MODAL --- */
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

  // --- 2. DATA: EPOKER & ARTIKLAR ---
  const epochs = [
    {
      id: "renassans",
      title: "Renässansen",
      period: "ca 1450-1600",
      summary: "Pånyttfödelse, upptäcktsresor och polyfoni.",
      content: `
        <p><b>- Pånyttfödelsen -</b></p>
        
        <h3>Vad var renässansen?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Under den här tiden vaknade ett nytt intresse för antikens Grekland och Rom. Man ville utforska världen, människan och kulturen på nytt. Det var en tid av upptäckter och nya idéer.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <p>Medan medeltiden ofta fokuserade på Gud och kyrkan, handlade renässansen mer om <b>humanism</b> - en vilja att lära sig om människan och omvärlden.</p>
        <ul>
          <li><b>Upptäcktsresor:</b> Christofer Columbus "upptäckte" Amerika.</li>
          <li><b>Vetenskap:</b> Nicolaus Copernicus räknade ut att jorden snurrar runt solen (och inte tvärtom).</li>
          <li><b>Konst & Uppfinningar:</b> Leonardo da Vinci (känd som ett "universalgeni") målade, uppfann och studerade kroppen.</li>
        </ul>

        <h3>Musiken - Hur lät den?</h3>
        <p>Under renässansen blev musiken mer "tät" och fyllig än under medeltiden. Här är de viktigaste kännetecknen:</p>
        <ul>
          <li><b>Polyfoni (Flerstämmighet):</b> Istället för en ensam melodi hade man nu ofta 4-5 olika stämmor som sjöngs samtidigt. Varje stämma hade sin egen melodi (detta kallas självständiga stämmor).</li>
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
        
        <div style="background:#f9f9f9; padding:15px; border-left: 4px solid #e67e22; margin: 20px 0; color:#333;">
            <b>Vad är tonmåleri?</b><br>
            Det är när musiken målar upp texten. Om texten handlar om att "springa upp och ner", så går melodin också upp och ner!
        </div>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Josquin des Prez (1440-1521):</b> En superstjärna under sin tid. Han var så känd att Leonardo da Vinci målade av honom.</li>
            <li><b>Giovanni Pierluigi da Palestrina (1525-1594):</b> Mästare på kyrkomusik och mässor.</li>
            <li><b>Thomas Tallis (1505-1585):</b> Skrev bland annat ett stycke för hela 40 stämmor (Spem in alium).</li>
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
    },
    {
      id: "barock",
      title: "Barocken",
      period: "ca 1600-1750",
      summary: "Pampig stil, opera, generalbas och giganter som Bach och Vivaldi.",
      content: `
        <p><b>- Den pampiga och utsmyckade stilen -</b></p>

        <h3>Vad var Barocken?</h3>
        <p>Ordet barock beskriver en stil som var utsmyckande (ornamental) och teatralisk. Vissa menade att den var pompös och överdriven, och ordet hade från början en ganska negativ klang. Men idag räknas denna tid som en av de viktigaste i musikhistorien med några av våra mest kända kompositörer.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <p>Under den här tiden var kyrkan och kungliga hov fortfarande de viktigaste platserna för musik, men efterfrågan på musik ökade även utanför dessa.</p>
        <ul>
            <li><b>Musiken som "färskvara":</b> Det blev viktigt att kunna skriva musik snabbt! Ibland spelades ett stycke bara en enda gång innan det kastades bort.</li>
            <li><b>Instrumentbyggarkonst:</b> I staden Cremona i Italien byggde mästare som Stradivari fioler som än idag räknas som världens bästa.</li>
        </ul>

        <h3>Musiken - Hur lät den?</h3>
        <p>Barockmusiken är ofta energisk och dekorativ. Här är de viktigaste kännetecknen:</p>
        <ul>
            <li><b>Generalbas (Basso Continuo):</b> En basstämma som spelar genom hela låten (ofta cello eller fagott) tillsammans med ett instrument som spelar ackord (t.ex. cembalo eller orgel). Det fungerade som den tidens "kompgrupp".</li>
            <li><b>Terrassdynamik:</b> Man växlade plötsligt mellan starkt och svagt (som trappsteg), istället för att gradvis öka eller minska styrkan.</li>
            <li><b>Motorisk rytm:</b> Musiken har ofta en stadig, "tuffande" puls som driver framåt, nästan lite mekaniskt.</li>
            <li><b>Polyfoni (Kontrapunkt):</b> Precis som under renässansen var det populärt med flera samtidiga melodier som flätas samman.</li>
        </ul>

        <h3>Instrument</h3>
        <p>Under barocken fick instrumenten en större roll.</p>
        <ul>
            <li><b>Cembalo:</b> Ett tangentinstrument där strängarna knäpps (inte slås an som på ett piano). Det ger ett spetsigt ljud som är typiskt för barocken.</li>
            <li><b>Violin (Fiol):</b> Blev mycket populärt under 1600-talet.</li>
            <li><b>Orgel:</b> Kyrkans viktigaste instrument.</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <p>Här föddes flera former som vi fortfarande lyssnar på idag.</p>
        
        <p><b>1. Opera (Profan musik)</b><br>
        En "teater med musik" som blev en stor succé.</p>
        <ul>
            <li><b>Kastratsångare:</b> Manliga sångare som kastrerades som barn för att behålla sina ljusa röster. De blev tidens stora idoler och sexsymboler.</li>
            <li><b>Recitativ & Aria:</b> Operan delades upp i <i>recitativ</i> (pratsång som för handlingen framåt) och <i>aria</i> (vacker sång där sångaren fick briljera med sin teknik).</li>
        </ul>

        <p><b>2. Kyrklig musik</b></p>
        <ul>
            <li><b>Oratorium:</b> Kyrkans motsvarighet till opera. Man sjöng en berättelse (ofta ur Bibeln) men utan kostymer och skådespel.</li>
            <li><b>Kantat:</b> Ett kortare sångverk som kunde vara både kyrkligt eller världsligt.</li>
        </ul>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Johann Sebastian Bach (1685-1750):</b> Barockens store mästare. Han var en oerhört skicklig organist men blev inte känd som kompositör förrän efter sin död. Han skrev Toccata & Fuga i d-moll och Air.</li>
            <li><b>Georg Friedrich Händel (1685-1759):</b> Tysk kompositör som flyttade till London och blev superstjärna på opera och oratorier. Hans mest kända verk är Messias (där sången "Halleluja" ingår).</li>
            <li><b>Antonio Vivaldi (1678-1741):</b> Italienare som arbetade på en skola för föräldralösa flickor. Han skrev massor av musik, bland annat De fyra årstiderna.</li>
            <li><b>Johann Pachelbel:</b> Känd för Pachelbels Kanon.</li>
        </ul>

        <h3>Begreppslista (Bra för prov/läxa)</h3>
        <ul>
            <li><b>Generalbas:</b> Ett instrument som spelar baslinjen + ett som lägger ackord (t.ex. cello + cembalo).</li>
            <li><b>Terrassdynamik:</b> Plötsliga växlingar mellan stark och svag volym.</li>
            <li><b>Opera:</b> Musikteater med kostym och handling.</li>
            <li><b>Oratorium:</b> Stor berättande körsång/musik för kyrkan (utan teater/kostym).</li>
            <li><b>Aria:</b> En sång i en opera där känslorna och sångtekniken är i fokus.</li>
            <li><b>Recitativ:</b> "Pratsång" i opera som berättar vad som händer.</li>
        </ul>
      `
    }
  ];

  // --- 3. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail history-container">
      <h1>Musikhistoria 📜</h1>
      <p style="color: #444; max-width:600px; margin: 0 auto 40px auto; font-size: 1.1rem;">
        Välkommen till arkivet. Här kan du läsa fördjupande texter om olika epoker eller utforska interaktiva berättelser.
      </p>

      <h2 style="text-align:left; border-bottom:1px solid #ddd; padding-bottom:10px; color:#333;">Utforska</h2>
      <div class="grid-section">
        
        <div class="history-card card-game" id="open-storybook-btn">
          <span class="card-label">Interaktiv Berättelse</span>
          <h3 class="card-title">Rockens Historia</h3>
          <p style="color:#444;">En lättläst bilderbok om hur rockmusiken föddes.</p>
          <span class="read-more-btn">Öppna boken ➡</span>
        </div>

      </div>

      <h2 style="text-align:left; border-bottom:1px solid #ddd; padding-bottom:10px; margin-top:50px; color:#333;">Epoker & Artiklar</h2>
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

  closeArticleBtn.addEventListener('click', () => {
    articleModal.classList.add('hidden-force');
  });

  articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) articleModal.classList.add('hidden-force');
  });

  const bookBtn = section.querySelector('#open-storybook-btn');
  bookBtn.addEventListener('click', () => {
    alert("Här kan vi koppla in bilderboken igen!");
  });

  return section;
}