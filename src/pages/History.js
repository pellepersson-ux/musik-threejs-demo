
export function History() {
  const section = document.createElement('section');

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

      /* Specialfärg för spelet/boken (LILA) */
      .card-game {
        border-left-color: #9b59b6; 
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

  // --- DATA: EPOKER ---
  const epochs = [
    {
      id: "renassans",
      title: "Renässansen",
      period: "ca 1450-1600",
      summary: "Pånyttfödelse, upptäcktsresor och polyfoni.",
      content: `
        <p><b>- Pånyttfödelsen -</b></p>
        <h3>Vad var renässansen?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Under den här tiden vaknade ett nytt intresse för antikens Grekland och Rom.</p>
        <h3>Musiken</h3>
        <ul>
          <li><b>Polyfoni:</b> Flerstämmighet med självständiga stämmor.</li>
          <li><b>Imitation:</b> Stämmor härmar varandra.</li>
          <li><b>A Cappella:</b> Sång utan instrument.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Josquin des Prez</li><li>Palestrina</li></ul>
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
            <li><b>Terrassdynamik:</b> Plötsliga växlingar mellan starkt/svagt.</li>
        </ul>
        <h3>Kända Kompositörer</h3>
        <ul><li>Bach</li><li>Händel</li><li>Vivaldi</li></ul>
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
            <li><b>Homofoni:</b> Tydlig melodi med enkelt komp.</li>
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
        <h3>Stilar</h3>
        <p>Impressionism, Expressionism, Avantgarde.</p>
        <h3>Kända Kompositörer</h3>
        <ul><li>Stravinsky</li><li>Schönberg</li><li>John Cage</li></ul>
      `
    }
  ];

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

  // --- LOGIK ---
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
2. Ny / Uppdaterad src / pages / Theory.js
  (Här lägger vi Upphovsrättstexten.Jag har lagt in ett par "placeholder" - kort också så att sidan inte ser tom ut).

  JavaScript

export function Theory() {
  const section = document.createElement('section');

  // --- 1. CSS (Blått färgtema istället för orange) ---
  const styles = `
    <style>
      .hidden-force { display: none !important; }

      .theory-container {
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

      /* KORT DESIGN (Blå) */
      .theory-card {
        background: #fff;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-left: 5px solid #3498db; /* Blå för teori */
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
        padding: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-family: 'Georgia', serif; 
      }

      .article-content h2 { font-family: 'Outfit', sans-serif; color: #3498db; margin-bottom: 5px; }
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
    </style>
  `;

  // --- DATA: TEORI ARTIKLAR ---
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
        <p>Upphovsrätten är en lag som skyddar skapande. Den som har skapat ett "litterärt eller konstnärligt verk" har automatiskt upphovsrätt till det. Det spelar ingen roll om det är en topplistelåt, en film, ett datorprogram eller en text du skrivit i skolan – principen är densamma.</p>
        <p>Lagen ger skaparen ensamrätt att bestämma över sitt verk. Det innebär att ingen annan får sprida det eller göra om det utan tillstånd.</p>

        <h4>Två delar av upphovsrätten</h4>
        <ul>
          <li><b>Den ekonomiska rätten:</b> Rätten att tjäna pengar på verket och bestämma hur det ska spridas (t.ex. tryckas, spelas in eller läggas ut på nätet).</li>
          <li><b>Den ideella rätten:</b> Rätten att bli namngiven. När någon använder din musik eller text måste de ange att det är du som har gjort den. Ingen får heller ändra i ditt verk på ett sätt som är kränkande för dig.</li>
        </ul>

        <h3>2. Vem äger musiken?</h3>
        <p>I musikbranschen är det ofta flera personer inblandade i en enda låt. Det är viktigt att skilja på vilka som gör vad, eftersom de företräds av olika organisationer.</p>

        <h4>Upphovspersoner (Låtskrivarna)</h4>
        <p>Detta är de som skrivit texten och musiken/kompositionen. De äger själva verket (låten).</p>
        <ul>
          <li><b>Organisation: Stim</b> bevakar deras rättigheter. När musik spelas offentligt ser Stim till att låtskrivarna får betalt.</li>
        </ul>

        <h4>Utövande konstnärer (Artisterna)</h4>
        <p>Detta är de som framför musiken – sångare och musiker som spelar på inspelningen.</p>
        <ul>
          <li><b>Organisation: SAMI</b> bevakar artisternas och musikernas rättigheter.</li>
        </ul>

        <p><i>Viktigt att veta: Om du spelar upp en låt offentligt (t.ex. på ett disco där ni tar inträde) behöver ni ofta licens från både Stim (för låtskrivaren) och SAMI (för artisten).</i></p>

        <h3>3. Dina rättigheter – När du skapar musik</h3>
        <p>När du gör en egen låt, spelar in en video eller skriver en text i skolan har du samma skydd som kända artister.</p>
        <ul>
          <li><b>Du bestämmer:</b> Ingen får ta din låt och lägga upp den på Spotify eller YouTube utan att fråga dig.</li>
          <li><b>Du ska nämnas:</b> Om någon citerar din text eller använder din musik ska ditt namn finnas med.</li>
          <li><b>Privat bruk:</b> Du får göra kopior av andras verk för privat bruk (t.ex. spara en låtlistan offline till dig själv), men du får inte sprida dem till hela världen.</li>
        </ul>

        <h3>4. Dina skyldigheter – När du använder andras musik</h3>
        <p>Vad får du göra i skolan och på fritiden?</p>

        <h4>I skolan (Undervisning)</h4>
        <p>Det finns ett undantag i lagen för skolor. Lärare och elever får använda verk i undervisningen för att "illustrera" något. Ni får också spela in era egna framträdanden av andras låtar om det är för utbildningssyfte, men dessa inspelningar får inte spridas utanför skolan.</p>

        <h4>På internet och sociala medier</h4>
        <p>Här gäller strikta regler. Att lägga ut något på internet räknas som att göra det "tillgängligt för allmänheten".</p>
        <ul>
          <li>Du får inte ta en känd låt och lägga som bakgrundsmusik i en video du publicerar öppet (t.ex. på YouTube eller TikTok) utan tillstånd.</li>
          <li>Plattformar som TikTok och YouTube har ofta egna avtal med musikbolagen, men om avtal saknas kan din video tas bort eller så kan du bli skyldig pengar.</li>
        </ul>

        <h4>Konsert vs. Musikal (Stora och små rättigheter)</h4>
        <p>Om ni ska sätta upp en föreställning i skolan är det skillnad på hur musiken används:</p>
        <ul>
          <li><b>Små rättigheter:</b> Om ni spelar musik på en konsert, eller som pausmusik, täcks detta ofta av en vanlig Stim-licens.</li>
          <li><b>Stora rättigheter:</b> Om ni sätter upp en musikal eller teater där musiken driver handlingen framåt (t.ex. Grease eller Lejonkungen), räcker inte en vanlig licens. Då måste man söka tillstånd direkt från de som äger musikalen. Detta kallas "stora rättigheter".</li>
        </ul>

        <h3>Sammanfattning</h3>
        <ul>
          <li><b>Fråga om lov:</b> Huvudregeln är att du måste ha tillstånd för att använda andras musik offentligt.</li>
          <li><b>Namnge källan:</b> Ange alltid vem som skrivit musiken eller tagit bilden.</li>
          <li><b>Skilj på privat och offentligt:</b> Det du gör hemma för dig själv är oftast okej. Det du lägger ut på nätet räknas som offentligt och kräver att du följer lagen.</li>
        </ul>
        <p style="font-size:0.9rem; color:#666; margin-top:30px;">Källor: Lag (1960:729) om upphovsrätt till litterära och konstnärliga verk, samt information från Stim och SAMI.</p>
      `
    },
    {
      id: "basics",
      title: "Noter & Rytm",
      subtitle: "Grundläggande musikteori",
      summary: "Lär dig läsa noter, förstå taktarter och vad som skiljer dur från moll.",
      content: `
        <h3>Musikens byggstenar</h3>
        <p>Här kommer snart en guide om G-klav, pulsslag och hur man räknar takter.</p>
        <p><i>Innehåll under konstruktion...</i></p>
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
        Här lär du dig hur musik fungerar, vilka lagar som gäller och grunderna i musikteori.
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

  // --- LOGIK ---
  const lawGrid = section.querySelector('#law-grid');
  const theoryGrid = section.querySelector('#theory-grid');
  const articleModal = section.querySelector('#article-modal');
  const closeArticleBtn = section.querySelector('#close-article');
  const artTitle = section.querySelector('#article-title');
  const artBody = section.querySelector('#article-body');

  // Funktion för att skapa kort
  const createCard = (item, container) => {
    const card = document.createElement('div');
    card.className = 'theory-card';
    card.innerHTML = `
      <span class="card-label">Ämne</span>
      <h3 class="card-title">${item.title}</h3>
      <p style="font-weight:bold; color:#3498db; margin-bottom:10px;">${item.subtitle}</p>
      <p style="color:#444;">${item.summary}</p>
      <span class="read-more-btn">Läs mer ➡</span>
    `;
    card.addEventListener('click', () => {
      artTitle.innerText = item.title;
      artBody.innerHTML = item.content;
      articleModal.classList.remove('hidden-force');
    });
    container.appendChild(card);
  };

  // 1. Lägg in Upphovsrätt i "Samhälle"-grid
  createCard(theoryArticles[0], lawGrid);

  // 2. Lägg in övriga i "Musikteori"-grid
  createCard(theoryArticles[1], theoryGrid);
  createCard(theoryArticles[2], theoryGrid);


  closeArticleBtn.addEventListener('click', () => { articleModal.classList.add('hidden-force'); });
  articleModal.addEventListener('click', (e) => { if (e.target === articleModal) articleModal.classList.add('hidden-force'); });

  return section;
}