export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // --- 1. DATA (Din text) ---
  const chapters = [
    {
      title: "1. Inledning: Rock’n’roll som historiskt fenomen",
      image: "https://images.unsplash.com/photo-1572061489710-18868673a559?auto=format&fit=crop&w=800&q=80", // 50-tals känsla/vinyl
      content: `
        <p>Rock’n’roll uppstod under 1950-talet i USA som en musikalisk hybridform, men utvecklades snabbt till ett omfattande kulturellt, socialt och politiskt fenomen. Musikstilen representerade inte bara ett nytt sound, utan också ett brott mot tidigare normer kring ras, klass, ungdomskultur och sexualitet.</p>
        <p>Filmen <em>History of Rock & Roll – The 1950s</em> placerar denna utveckling i sitt historiska sammanhang och analyserar hur rock’n’roll växte fram ur afroamerikanska musiktraditioner och spreds till en bred, i huvudsak vit, ungdomspublik.</p>
        <p>1950-talet präglades av efterkrigstidens ekonomiska expansion, kalla kriget, ökad konsumtion och framväxten av tonåringen som en egen social kategori. Rock’n’roll blev ett uttryck för denna nya generation och deras behov av identitet, självständighet och emotionellt utlopp.¹</p>
      `
    },
    {
      title: "2. Musikaliska rötter: Afroamerikanska traditioner",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", // Mikrofon/Blues känsla
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
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80", // Gammal radio/svartvitt
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
      image: "https://images.unsplash.com/photo-1621360841011-d76eb697196d?auto=format&fit=crop&w=800&q=80", // 50-tals mikrofon/stil
      content: `
        <h3>5.1 Musikaliskt uttryck</h3>
        <p>Elvis Presley kombinerade svart R&B-sångstil, countrymusikens harmonik och gospelns emotionella intensitet. Hans röst, frasering och kroppsspråk skapade en ny artisttyp som var både sexuell och rebellisk.⁷</p>

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
      image: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=800&q=80", // Gitarr
      content: `
        <h3>6.1 Chuck Berry</h3>
        <p>Chuck Berry utvecklade den elektriska gitarrens roll som soloinstrument, narrativa texter om ungdomsliv och ett sceniskt uttryck som blev mall för senare rockartister.⁸</p>

        <h3>6.2 Little Richard</h3>
        <p>Little Richard utmanade könsnormer, sexualmoral och religiösa gränser. Hans musik var snabb, aggressiv och extatisk — ett tydligt brott mot 1950-talets konservativa ideal.⁹</p>

        <h3>6.3 Buddy Holly</h3>
        <p>Buddy Holly representerade en mer “intellektuell” rock’n’roll-tradition: låtskrivande artist, experimentella inspelningstekniker och inflytande på framtida bandformat.¹⁰</p>
      `
    },
    {
      title: "7. Ungdomskultur och moralpanik",
      content: `
        <p>Rock’n’roll kopplades tidigt till kriminalitet, sexuell omoral och våld. Media, kyrkor och politiker beskrev musiken som ett hot mot samhällets stabilitet.</p>
        <p>Filmen analyserar hur denna moralpanik paradoxalt nog ökade musikens attraktionskraft bland ungdomar.¹¹</p>
      `
    },
    {
      title: "8. Kön, sexualitet och scenuttryck",
      content: `
        <p>Rock’n’roll innebar ett nytt sätt att använda kroppen på scen:</p>
        <ul>
          <li>Höftrörelser</li>
          <li>Intensiv blickkontakt</li>
          <li>Fysiskt uttryck av begär</li>
        </ul>
        <p>Detta var särskilt kontroversiellt i televisionens barndom, där artister ofta censurerades eller filmades endast från midjan och uppåt.¹²</p>
      `
    },
    {
      title: "9. Musikindustrins institutionalisering",
      content: `
        <p>Mot slutet av 1950-talet började rock’n’roll standardiseras, kommersialiseras och integreras i mainstream-kulturen.</p>
        <p>Skivbolag, managers och TV-program formade genren till en mer kontrollerad produkt, vilket lade grunden för 1960-talets popindustri.¹³</p>
      `
    },
    {
      title: "10. Sammanfattning och slutsats",
      content: `
        <p>Filmen visar att rock’n’roll under 1950-talet inte enbart var en musikstil, utan ett historiskt brott. Den förändrade relationen mellan svart och vit kultur, ungdomars sociala roll, musikens ekonomiska strukturer och normer kring kropp, sexualitet och identitet.</p>
        <p>Rock’n’rollens arv lever vidare som ett exempel på hur populärkultur kan fungera som en kraft för både konflikt och förändring.</p>
      `
    }
  ];

  const footnotes = [
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

  // --- 2. CSS ---
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page {
      padding: 40px 20px;
      max-width: 900px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Georgia', serif; /* Mer akademisk/bok-känsla */
    }
    .hero-header {
      text-align: center;
      margin-bottom: 50px;
      border-bottom: 2px solid #b71c1c; /* Mörkröd färg för rock-känsla */
      padding-bottom: 20px;
    }
    .hero-header h1 {
      font-family: sans-serif;
      font-size: 2.5rem;
      margin: 0;
      color: white;
    }
    .hero-header p {
      color: #aaa;
      font-style: italic;
      margin-top: 10px;
    }

    /* ACCORDION STYLES */
    .chapter {
      margin-bottom: 20px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }
    .chapter-header {
      padding: 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      transition: background 0.2s;
    }
    .chapter-header:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    .chapter-title {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 1.2rem;
      color: #fff;
    }
    .toggle-icon {
      font-size: 1.5rem;
      color: #b71c1c;
      transition: transform 0.3s;
    }
    .chapter.active .toggle-icon {
      transform: rotate(45deg);
    }

    .chapter-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
      background: rgba(0, 0, 0, 0.2);
    }
    .chapter.active .chapter-body {
      max-height: 1000px; /* Tillräckligt högt för innehållet */
      transition: max-height 0.5s ease-in;
    }
    
    .body-content {
      padding: 25px;
      line-height: 1.8;
      font-size: 1.1rem;
    }
    .body-content h3 {
      font-family: sans-serif;
      color: #b71c1c;
      margin-top: 25px;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    .body-content ul {
      margin-bottom: 20px;
      padding-left: 20px;
    }
    .body-content li {
      margin-bottom: 5px;
    }
    
    .chapter-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 20px;
      border: 1px solid #333;
    }

    .footnotes {
      margin-top: 60px;
      padding-top: 20px;
      border-top: 1px solid #333;
      font-size: 0.8rem;
      color: #777;
    }
    .footnotes h4 {
      color: #aaa;
    }
    .footnotes ol {
      padding-left: 20px;
    }
    .footnotes li {
      margin-bottom: 5px;
    }
  `;
  container.appendChild(style);

  // --- 3. RENDERING ---

  // Header
  const header = document.createElement('div');
  header.className = 'hero-header';
  header.innerHTML = `
    <h1>History of Rock & Roll</h1>
    <p>The 1950s – En akademisk sammanfattning av rockens födelse.</p>
  `;
  container.appendChild(header);

  // Chapters (Accordion)
  const listContainer = document.createElement('div');

  chapters.forEach((chapter) => {
    const chapterDiv = document.createElement('div');
    chapterDiv.className = 'chapter';

    // Om det finns en bild, lägg till den i HTML-strängen
    const imageHTML = chapter.image
      ? `<img src="${chapter.image}" alt="Illustration" class="chapter-img">`
      : '';

    chapterDiv.innerHTML = `
      <div class="chapter-header">
        <span class="chapter-title">${chapter.title}</span>
        <span class="toggle-icon">+</span>
      </div>
      <div class="chapter-body">
        <div class="body-content">
          ${imageHTML}
          ${chapter.content}
        </div>
      </div>
    `;

    // Click logic (Controller logic inside the loop)
    const headerEl = chapterDiv.querySelector('.chapter-header');
    headerEl.addEventListener('click', () => {
      // Toggle current
      chapterDiv.classList.toggle('active');

      // Optional: Stäng andra när man öppnar en? (Just nu tillåter vi flera öppna)
    });

    listContainer.appendChild(chapterDiv);
  });
  container.appendChild(listContainer);

  // Footnotes section
  const footer = document.createElement('div');
  footer.className = 'footnotes';
  footer.innerHTML = `
    <h4>Källförteckning & Referenser</h4>
    <ol>
      ${footnotes.map(note => `<li>${note}</li>`).join('')}
    </ol>
  `;
  container.appendChild(footer);

  return container;
}