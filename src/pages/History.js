export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // ==========================================
  // 1. DATA: KLASSISK MUSIK
  // ==========================================
  const classicalData = [
    {
      title: "Renässansen (1450–1600)",
      img: "https://images.unsplash.com/photo-1596201309322-927909033333?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Det man ville väcka till liv igen var idéer och ideal från de gamla grekerna och romarna (antiken). Perioden präglades av en nyfikenhet på människan, kulturen och världen.</p>

        <h3>1. Samtiden – Nytänkarnas tid</h3>
        <p>Under renässansen hände mycket som förändrade hur människor såg på världen. Det var en tid för upptäckter och vetenskap.</p>
        <ul>
          <li><strong>Kända personer:</strong> Upptäckaren Christofer Columbus, astronomen Nicolaus Copernicus och universalgeniet Leonardo da Vinci (som var både konstnär och uppfinnare) verkade under denna tid.</li>
          <li><strong>Boktryckarkonsten:</strong> Man kunde nu trycka böcker, vilket gjorde att noter och musik kunde spridas enklare. Till exempel publicerades böcker med Josquin des Prez mässor.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken under renässansen utvecklades och blev mer komplex än under medeltiden. Här är de viktigaste dragen:</p>
        <ul>
          <li><strong>Polyfoni (Flerstämmighet):</strong> Istället för en enda melodi hade musiken ofta 4–5 olika stämmor som var lika viktiga och hade självständiga melodier.</li>
          <li><strong>Imitation:</strong> En vanlig teknik var att stämmorna härmade (imiterade) varandra. En stämma kunde börja med en melodi, och strax efter kom nästa stämma in med samma melodi.</li>
          <li><strong>A cappella:</strong> Renässansen kallas ofta för a cappella-musikens gyllene era. Det betyder sång utan instrument (ordagrant "som i kapellet").</li>
          <li><strong>Modala skalor:</strong> Man använde inte dur och moll som vi gör idag, utan så kallade kyrkotonarter eller modala skalor. (Prova själv: Spela på vita tangenter från D till D eller E till E).</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <p>Även om sång var väldigt viktigt användes också instrument:</p>
        <ul>
          <li><strong>Luta:</strong> Ett stränginstrument som påminner om en gitarr.</li>
          <li><strong>Viola da gamba:</strong> Ett stråkinstrument (föregångare till cellon, men med band på greppbrädan).</li>
          <li><strong>Krumhorn:</strong> Ett blåsinstrument med en speciell klang.</li>
        </ul>

        <h3>4. Musikstilar och Genrer</h3>
        <p>Man skiljde på sakral (kyrklig) och profan (folklig/världslig) musik.</p>
        <p><strong>Sakral musik:</strong></p>
        <ul>
          <li><strong>Mässa:</strong> Tonsättning av gudstjänstens texter, t.ex. "Kyrie" och "Gloria".</li>
          <li><strong>Motett:</strong> En mindre körsång med religiös text, ofta på latin.</li>
        </ul>
        <p><strong>Profan musik:</strong></p>
        <ul>
          <li><strong>Madrigal:</strong> En mycket populär sångform som startade i Italien men blev en enorm trend i England efter 1588. Madrigaler innehöll ofta <em>tonmåleri</em>, där musiken beskriver texten.</li>
          <li>Andra former var <em>Chanson</em> (Frankrike) och <em>Lied</em> (Tyskland).</li>
        </ul>

        <h3>5. Viktiga Tonsättare</h3>
        <ul>
          <li><strong>Josquin des Prez (1440–1521):</strong> En superstjärna under sin tid. Älskades av både Martin Luther och da Vinci.</li>
          <li><strong>Giovanni Pierluigi da Palestrina (1525–1594):</strong> Mästare på kyrkomusik, särskilt mässor.</li>
          <li><strong>Thomas Tallis (1505–1585):</strong> Engelsk kompositör, känd för ett verk med 40 stämmor.</li>
          <li><strong>William Byrd (1543–1623):</strong> Känd för sin polyfona musik.</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Ave Maria ... Virgo serena" av Josquin des Prez</li>
          <li>"Spem in alium" av Thomas Tallis (40 stämmor!)</li>
          <li>"Fair Phyllis I Saw" av John Farmer (Madrigal med humor)</li>
          <li>"Missa Brevis" (Credo) av Palestrina</li>
        </ul>
      `
    },
    {
      title: "Barocken (1600–1750)",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      content: `
        <p><strong>Sammanfattning (Inväntar fullständig text):</strong></p>
        <p>Musiken blev pampig, tung och dekorativ – precis som tidens peruker och arkitektur. 'Generalbas' var grunden i nästan allt och cembalon hördes överallt. Det var nu operan föddes och orkestermusiken började ta form.</p>
        <p><strong>Tonsättare:</strong> Bach, Vivaldi, Händel.</p>
      `
    },
    {
      title: "Wienklassicismen (1750–1820)",
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=800&q=80",
      content: `
        <p><strong>Sammanfattning (Inväntar fullständig text):</strong></p>
        <p>Balans, klarhet och elegans. Melodin hamnade i fokus. Pianot konkurrerade ut cembalon och den moderna symfoniorkestern etablerades i Wien.</p>
        <p><strong>Tonsättare:</strong> Mozart, Haydn, Beethoven (tidig).</p>
      `
    },
    {
      title: "Romantiken (1820–1900)",
      img: "https://images.unsplash.com/photo-1552422535-c4581306965b?auto=format&fit=crop&w=800&q=80",
      content: `
        <p><strong>Sammanfattning (Inväntar fullständig text):</strong></p>
        <p>Känslorna tog över! Musiken skulle vara dramatisk, drömsk och berätta sagor. Orkestrarna växte till enorma storlekar.</p>
        <p><strong>Tonsättare:</strong> Chopin, Wagner, Tchaikovsky.</p>
      `
    },
    {
      title: "Modernismen (1900–Nutid)",
      img: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80",
      content: `
        <p><strong>Sammanfattning (Inväntar fullständig text):</strong></p>
        <p>Alla regler bröts. Dissonanser, nya klanger och komplexa rytmer. Allt från impressionism till elektronisk musik.</p>
        <p><strong>Tonsättare:</strong> Stravinsky, Schönberg, Cage.</p>
      `
    }
  ];

  // ==========================================
  // 2. DATA: ROCK 'N' ROLL
  // ==========================================
  const rockChapters = [
    {
      title: "1. Inledning: Rock’n’roll som historiskt fenomen",
      img: "https://images.unsplash.com/photo-1572061489710-18868673a559?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Rock’n’roll uppstod under 1950-talet i USA som en musikalisk hybridform, men utvecklades snabbt till ett omfattande kulturellt, socialt och politiskt fenomen. Musikstilen representerade inte bara ett nytt sound, utan också ett brott mot tidigare normer kring ras, klass, ungdomskultur och sexualitet.</p>
        <p>Filmen <em>History of Rock & Roll – The 1950s</em> placerar denna utveckling i sitt historiska sammanhang och analyserar hur rock’n’roll växte fram ur afroamerikanska musiktraditioner och spreds till en bred, i huvudsak vit, ungdomspublik.</p>
        <p>1950-talet präglades av efterkrigstidens ekonomiska expansion, kalla kriget, ökad konsumtion och framväxten av tonåringen som en egen social kategori. Rock’n’roll blev ett uttryck för denna nya generation och deras behov av identitet, självständighet och emotionellt utlopp.¹</p>
      `
    },
    {
      title: "2. Musikaliska rötter: Afroamerikanska traditioner",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>2.1 Rhythm & Blues och blues</h3>
        <p>Rock’n’rollens direkta föregångare var rhythm & blues (R&B), en genre som i sin tur utvecklades ur blues, gospel och jazz. R&B kännetecknades av:</p>
        <ul>
          <li>Tydlig backbeat (betoning på slag 2 och 4)</li>
          <li>Elektrifierade instrument</li>
          <li>Repetitiva harmoniska strukturer</li>
          <li>Stark rytmisk energi</li>
        </ul>
        <p>Artister som Muddy Waters, Howlin’ Wolf och Big Joe Turner lade grunden för den musikaliska estetik som senare skulle populariseras som rock’n’roll.²</p>
        
        <h3>2.2 Gospelns inflytande</h3>
        <p>Gospelmusiken bidrog främst med:</p>
        <ul>
          <li>Vokala uttryck (rop, melismer)</li>
          <li>Call-and-response-strukturer</li>
          <li>Emotionell intensitet</li>
        </ul>
        <p>Denna bakgrund är särskilt tydlig hos artister som Little Richard, vars sångstil kombinerade kyrklig extas med sekulär sexualitet — något som uppfattades som både fascinerande och hotfullt av samtida moralväktare.³</p>
      `
    },
    {
      title: "3. Ras, segregation och musikindustrin",
      content: `
        <h3>3.1 Jim Crow-systemet</h3>
        <p>Under 1950-talet var USA fortfarande djupt segregerat. Svarta artister fick sällan tillträde till vita radiostationer, skivbolag eller konsertscener. Rock’n’rollens spridning blev därför en indirekt utmaning mot Jim Crow-systemet.⁴</p>
        
        <h3>3.2 “Cover versions” och kulturell appropriering</h3>
        <p>Ett centralt tema i filmen är hur vita artister ofta spelade in covers av svarta artisters låtar — exempelvis Pat Boone, vars versioner ansågs “säkrare” för vit publik. Detta ledde till:</p>
        <ul>
          <li>Kommersiell framgång för vita artister</li>
          <li>Ekonomisk marginalisering av svarta upphovspersoner</li>
          <li>En omdebatterad form av kulturell appropriering⁵</li>
        </ul>
      `
    },
    {
      title: "4. Alan Freed och begreppet “rock’n’roll”",
      content: `
        <p>Radiopersonligheten Alan Freed spelade en avgörande roll i att popularisera termen “rock’n’roll”. Han använde uttrycket för att marknadsföra R&B-musik till en vit publik, samtidigt som han arrangerade konserter där svarta och vita ungdomar deltog tillsammans — något radikalt för sin tid.⁶</p>
        <p>Freed bidrog till:</p>
        <ul>
          <li>Genredefinitionen</li>
          <li>Kommersiell spridning</li>
          <li>Normalisering av interracial ungdomskultur</li>
        </ul>
      `
    },
    {
      title: "5. Elvis Presley: Symbol och katalysator",
      img: "https://images.unsplash.com/photo-1621360841011-d76eb697196d?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>5.1 Musikaliskt uttryck</h3>
        <p>Elvis Presley kombinerade:</p>
        <ul>
          <li>Svart R&B-sångstil</li>
          <li>Countrymusikens harmonik</li>
          <li>Gospelns emotionella intensitet</li>
        </ul>
        <p>Hans röst, frasering och kroppsspråk skapade en ny artisttyp som var både sexuell och rebellisk.⁷</p>
        
        <h3>5.2 Kulturell betydelse</h3>
        <p>Elvis blev en symbol för:</p>
        <ul>
          <li>Generationskonflikt</li>
          <li>Vit appropriering av svart kultur</li>
          <li>Rock’n’rollens kommersiella genombrott</li>
        </ul>
        <p>Filmen betonar både hans betydelse och de strukturella ojämlikheter som möjliggjorde hans framgång.</p>
      `
    },
    {
      title: "6. Andra nyckelartister",
      img: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>6.1 Chuck Berry</h3>
        <p>Chuck Berry utvecklade:</p>
        <ul>
          <li>Den elektriska gitarrens roll som soloinstrument</li>
          <li>Narrativa texter om ungdomsliv</li>
          <li>Ett sceniskt uttryck som blev mall för senare rockartister⁸</li>
        </ul>
        
        <h3>6.2 Little Richard</h3>
        <p>Little Richard utmanade könsnormer, sexualmoral och religiösa gränser. Hans musik var snabb, aggressiv och extatisk — ett tydligt brott mot 1950-talets konservativa ideal.⁹</p>
        
        <h3>6.3 Buddy Holly</h3>
        <p>Buddy Holly representerade en mer “intellektuell” rock’n’roll-tradition: låtskrivande artist, experimentella inspelningstekniker och inflytande på framtida bandformat.¹⁰</p>
      `
    },
    {
      title: "7. Ungdomskultur och moralpanik",
      content: `
        <p>Rock’n’roll kopplades tidigt till kriminalitet, sexuell omoral och våld. Media, kyrkor och politiker beskrev musiken som ett hot mot samhällets stabilitet. Filmen analyserar hur denna moralpanik paradoxalt nog ökade musikens attraktionskraft bland ungdomar.¹¹</p>
      `
    },
    {
      title: "8. Kön, sexualitet och scenuttryck",
      content: `
        <p>Rock’n’roll innebar ett nytt sätt att använda kroppen på scen: höftrörelser, intensiv blickkontakt och fysiskt uttryck av begär. Detta var särskilt kontroversiellt i televisionens barndom, där artister ofta censurerades eller filmades endast från midjan och uppåt.¹²</p>
      `
    },
    {
      title: "9. Musikindustrins institutionalisering",
      content: `
        <p>Mot slutet av 1950-talet började rock’n’roll standardiseras, kommersialiseras och integreras i mainstream-kulturen. Skivbolag, managers och TV-program formade genren till en mer kontrollerad produkt, vilket lade grunden för 1960-talets popindustri.¹³</p>
      `
    },
    {
      title: "10. Sammanfattande analys och slutsats",
      content: `
        <p>Filmen visar att rock’n’roll under 1950-talet inte enbart var en musikstil, utan ett historiskt brott. Den förändrade relationen mellan svart och vit kultur, ungdomars sociala roll, musikens ekonomiska strukturer och normer kring kropp, sexualitet och identitet.</p>
        <p>Rock’n’rollens arv lever vidare som ett exempel på hur populärkultur kan fungera som en kraft för både konflikt och förändring.</p>
      `
    }
  ];

  const rockFootnotes = [
    "Gillett, C. The Sound of the City. Pantheon Books, 1970.",
    "Wald, E. How the Beatles Destroyed Rock ’n’ Roll. Oxford University Press, 2009.",
    "MacDonald, I. Revolution in the Head. Pimlico, 1994.",
    "Lipsitz, G. Footsteps in the Dark. University of Minnesota Press, 2007.",
    "Ward, B. Just My Soul Responding. University of California Press, 1998.",
    "Miller, J. Flowers in the Dustbin. Simon & Schuster, 1999.",
    "Marcus, G. Mystery Train. Plume, 1997.",
    "Szatmary, D. Rockin’ in Time. Pearson, 2013.",
    "White, C. The Life and Times of Little Richard. Harmony Books, 2003.",
    "Norman, P. Buddy Holly. Pan Books, 1996.",
    "Springhall, J. Youth, Popular Culture and Moral Panics. Palgrave, 1998.",
    "Frith, S. Performing Rites. Harvard University Press, 1996.",
    "Peterson, R. Creating Country Music. University of Chicago Press, 1997."
  ];

  // ==========================================
  // 3. CSS
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page {
      padding: 40px 20px;
      max-width: 900px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
    }
    
    /* TAB MENU */
    .tab-menu {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 40px;
      border-bottom: 1px solid #444;
      padding-bottom: 20px;
      flex-wrap: wrap; 
    }
    .tab-btn {
      background: transparent;
      border: 2px solid #4facfe;
      color: #fff;
      padding: 10px 25px;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
    }
    .tab-btn:hover {
      background: rgba(79, 172, 254, 0.2);
    }
    .tab-btn.active {
      background: #4facfe;
      color: #000;
      font-weight: bold;
    }

    /* SECTION CONTAINERS */
    .content-section {
      display: none;
      animation: fadeIn 0.5s;
    }
    .content-section.active {
      display: block;
    }

    /* ACCORDION STYLES (Används nu för BÅDA flikarna) */
    .accordion-item {
      background: #1a1a1a;
      border: 1px solid #333;
      margin-bottom: 15px;
      border-radius: 8px;
      overflow: hidden;
    }
    .accordion-header {
      padding: 18px 25px;
      background: #222;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s;
    }
    .accordion-header:hover {
      background: #2a2a2a;
    }
    .accordion-title {
      font-weight: bold;
      color: #fca311; /* Accentfärg */
      font-size: 1.2rem;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
      background: rgba(0,0,0,0.2);
    }
    .accordion-content.open {
      max-height: 2500px; /* Tillräckligt högt för långa texter */
      transition: max-height 0.6s ease-in;
    }
    .accordion-inner {
      padding: 30px;
      line-height: 1.8;
      font-size: 1.05rem;
      color: #ddd;
    }
    
    /* Text formatting inside accordion */
    .accordion-inner h3 {
      color: #4facfe;
      margin-top: 25px;
      margin-bottom: 15px;
      font-size: 1.3rem;
      border-bottom: 1px solid #444;
      padding-bottom: 5px;
    }
    .accordion-inner p {
      margin-bottom: 15px;
    }
    .accordion-inner ul {
      margin-bottom: 20px;
      padding-left: 20px;
    }
    .accordion-inner li {
      margin-bottom: 8px;
    }
    .accordion-inner strong {
      color: white;
    }

    /* Images */
    .section-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 25px;
      border-radius: 6px;
      border: 1px solid #444;
    }

    /* Footnotes */
    .footnotes {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #444;
      font-size: 0.85rem;
      color: #888;
    }
    .footnotes ol {
      padding-left: 20px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  container.appendChild(style);

  // ==========================================
  // 4. RENDERING & LOGIC
  // ==========================================

  // Title
  const header = document.createElement('div');
  header.style.textAlign = 'center';
  header.innerHTML = `<h1>Musikhistoria 📜🎸</h1>`;
  container.appendChild(header);

  // Tabs
  const tabContainer = document.createElement('div');
  tabContainer.className = 'tab-menu';

  const btnClassical = document.createElement('button');
  btnClassical.className = 'tab-btn active';
  btnClassical.innerText = 'Klassisk Musik';

  const btnRock = document.createElement('button');
  btnRock.className = 'tab-btn';
  btnRock.innerText = "Rock 'n' Roll (50-tal)";

  tabContainer.appendChild(btnClassical);
  tabContainer.appendChild(btnRock);
  container.appendChild(tabContainer);

  // --- Helper Function to Create Accordions ---
  function createAccordionItem(title, content, imgUrl) {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const imgHtml = imgUrl ? `<img src="${imgUrl}" class="section-img">` : '';

    item.innerHTML = `
      <div class="accordion-header">
        <span class="accordion-title">${title}</span>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-inner">
          ${imgHtml}
          ${content}
        </div>
      </div>
    `;
    return item;
  }

  // --- SEKTION 1: KLASSISK MUSIK ---
  const classicalSection = document.createElement('div');
  classicalSection.className = 'content-section active';

  classicalData.forEach(period => {
    const item = createAccordionItem(period.title, period.content, period.img);

    // Click logic
    const headerEl = item.querySelector('.accordion-header');
    const contentEl = item.querySelector('.accordion-content');
    headerEl.addEventListener('click', () => {
      const isOpen = contentEl.classList.contains('open');
      // Stäng andra i samma sektion
      classicalSection.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      if (!isOpen) contentEl.classList.add('open');
    });

    classicalSection.appendChild(item);
  });
  container.appendChild(classicalSection);

  // --- SEKTION 2: ROCK 'N' ROLL ---
  const rockSection = document.createElement('div');
  rockSection.className = 'content-section';

  const rockIntro = document.createElement('div');
  rockIntro.style.textAlign = "center";
  rockIntro.style.marginBottom = "30px";
  rockIntro.innerHTML = `
    <h2 style="color:#fca311;">History of Rock & Roll – The 1950s</h2>
    <p style="font-style:italic; color:#aaa;">En akademisk sammanfattning.</p>
  `;
  rockSection.appendChild(rockIntro);

  rockChapters.forEach(chap => {
    const item = createAccordionItem(chap.title, chap.content, chap.img);

    // Click logic
    const headerEl = item.querySelector('.accordion-header');
    const contentEl = item.querySelector('.accordion-content');
    headerEl.addEventListener('click', () => {
      const isOpen = contentEl.classList.contains('open');
      rockSection.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      if (!isOpen) contentEl.classList.add('open');
    });

    rockSection.appendChild(item);
  });

  // Fotnoter för Rock
  const footDiv = document.createElement('div');
  footDiv.className = 'footnotes';
  footDiv.innerHTML = `
    <h4>Källförteckning & Referenser</h4>
    <ol>
      ${rockFootnotes.map(note => `<li>${note}</li>`).join('')}
    </ol>
  `;
  rockSection.appendChild(footDiv);

  container.appendChild(rockSection);

  // --- TAB NAVIGATION LOGIC ---
  btnClassical.addEventListener('click', () => {
    btnClassical.classList.add('active');
    btnRock.classList.remove('active');
    classicalSection.classList.add('active');
    rockSection.classList.remove('active');
  });

  btnRock.addEventListener('click', () => {
    btnRock.classList.add('active');
    btnClassical.classList.remove('active');
    rockSection.classList.add('active');
    classicalSection.classList.remove('active');
  });

  return container;
}