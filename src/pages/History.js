export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // --- 1. DATA: KLASSISK MUSIK (Alla 5 epoker) ---
  const classicalData = [
    {
      title: "Renässansen (1450–1600)",
      year: "1450–1600",
      desc: "Musikens pånyttfödelse! Kyrkomusiken blomstrade med flerstämmig sång (polyfoni). Boktryckarkonsten gjorde att noter kunde spridas snabbare. Instrument som lutan var populära.",
      composers: "Palestrina, Josquin des Prez, Tallis",
      // Bild: Gammal målning / Luta
      img: "https://images.unsplash.com/photo-1596201309322-927909033333?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Barocken (1600–1750)",
      year: "1600–1750",
      desc: "Musiken blev pampig, tung och dekorativ – precis som tidens peruker och arkitektur. 'Generalbas' och cembalon var grunden i nästan allt. Operan föddes under denna tid.",
      composers: "J.S. Bach, Vivaldi, Händel",
      // Bild: Cembalo / Barockkyrka
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wienklassicismen (1750–1820)",
      year: "1750–1820",
      desc: "Balans och elegans. Musiken blev lättare och melodin hamnade i fokus. Pianot ersatte cembalon och den moderna symfoniorkestern tog form i Wien.",
      composers: "Mozart, Haydn, Beethoven (tidig)",
      // Bild: Violin / Noter
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Romantiken (1820–1900)",
      year: "1820–1900",
      desc: "Känslorna tog över! Musiken skulle vara dramatisk, drömsk och berätta sagor. Orkestrarna blev enorma och solisterna blev superstjärnor (virtuoser).",
      composers: "Chopin, Wagner, Tchaikovsky, Grieg",
      // Bild: Dramatisk pianospelare / Konst
      img: "https://images.unsplash.com/photo-1552422535-c4581306965b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modernismen (1900–Nutid)",
      year: "1900–Nutid",
      desc: "Alla regler bröts. Tonsättare experimenterade med dissonanser (falska toner), nya ljud och rytmer. Allt från impressionism till tolvtonsmusik och elektronisk musik ryms här.",
      composers: "Stravinsky, Schönberg, Cage, Reich",
      // Bild: Abstrakt / Modern konst
      img: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // --- 2. DATA: ROCK 'N' ROLL (Din text) ---
  const rockChapters = [
    {
      title: "1. Inledning: Rock’n’roll som fenomen",
      content: `<p>Rock’n’roll uppstod under 1950-talet som en musikalisk hybridform och utvecklades till ett kulturellt fenomen som bröt mot normer kring ras, klass och ungdomskultur.</p>`
    },
    {
      title: "2. Musikaliska rötter: R&B och Gospel",
      content: `<p>Genren växte fram ur Rhythm & Blues (stark rytm, backbeat) och Gospel (vokala uttryck, intensitet). Artister som Muddy Waters och Sister Rosetta Tharpe lade grunden.</p>`
    },
    {
      title: "3. Elvis Presley: Symbol och katalysator",
      img: "https://images.unsplash.com/photo-1621360841011-d76eb697196d?auto=format&fit=crop&w=800&q=80",
      content: `<p>Elvis kombinerade svart R&B med vit Country. Han blev symbolen för rockens genombrott, men också för den rassegregation som präglade USA.</p>`
    },
    {
      title: "4. Ungdomskultur och Moralpanik",
      content: `<p>Rocken kopplades till kriminalitet och sexuell frigörelse. Media och kyrkan varnade för musiken, vilket paradoxalt nog gjorde den ännu mer populär bland unga.</p>`
    },
    {
      title: "5. Instrumenten: Gitarrens intåg",
      img: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=800&q=80",
      content: `<p>Chuck Berry gjorde elgitarren till rockens huvudinstrument. Det handlade inte längre bara om att sjunga, utan om riff, solon och show.</p>`
    }
  ];

  // --- 3. CSS ---
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page {
      padding: 40px 20px;
      max-width: 900px;
      margin: 0 auto;
      color: #e0e0e0;
    }
    
    /* TAB MENU */
    .tab-menu {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 40px;
      border-bottom: 1px solid #444;
      padding-bottom: 20px;
      flex-wrap: wrap; /* För små skärmar */
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

    /* CONTENT AREAS */
    .content-section {
      display: none;
      animation: fadeIn 0.5s;
    }
    .content-section.active {
      display: block;
    }

    /* KLASSISK STIL (Timeline Cards) */
    .classical-card {
      display: flex;
      flex-direction: column;
      background: rgba(255,255,255,0.05);
      margin-bottom: 30px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #333;
    }
    .c-img {
      height: 250px;
      object-fit: cover;
      width: 100%;
    }
    .c-info {
      padding: 20px;
    }
    .c-year {
      color: #4facfe;
      font-weight: bold;
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
    .c-info h2 {
      margin-top: 0;
      color: white;
    }
    .c-desc {
      margin-bottom: 15px;
      line-height: 1.5;
    }
    .c-composers {
      font-style: italic;
      color: #aaa;
      border-top: 1px solid #444;
      padding-top: 10px;
    }

    /* ROCK STIL (Accordion) */
    .accordion-item {
      background: #1a1a1a;
      border: 1px solid #333;
      margin-bottom: 10px;
      border-radius: 8px;
      overflow: hidden;
    }
    .accordion-header {
      padding: 15px 20px;
      background: #222;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accordion-header:hover {
      background: #2a2a2a;
    }
    .accordion-title {
      font-weight: bold;
      color: #fca311; 
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      padding: 0 20px;
    }
    .accordion-content.open {
      padding: 20px;
      max-height: 800px; 
    }
    .rock-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      margin-bottom: 15px;
      border-radius: 4px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Desktop layout för klassiska kort */
    @media (min-width: 700px) {
      .classical-card {
        flex-direction: row;
        align-items: stretch;
      }
      .c-img {
        width: 40%;
        height: auto;
      }
      .c-info {
        width: 60%;
      }
    }
  `;
  container.appendChild(style);

  // --- 4. RENDER STRUCTURE ---

  // Header
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

  // --- 5. CONTENT SECTIONS ---

  // KLASSISK SECTION
  const classicalSection = document.createElement('div');
  classicalSection.className = 'content-section active';

  // Här bygger vi korten för ALLA 5 epoker
  classicalData.forEach(period => {
    const card = document.createElement('div');
    card.className = 'classical-card';
    card.innerHTML = `
      <img src="${period.img}" class="c-img" alt="${period.title}">
      <div class="c-info">
        <h2>${period.title}</h2>
        <div class="c-year">${period.year}</div>
        <p class="c-desc">${period.desc}</p>
        <div class="c-composers"><strong>Kända namn:</strong> ${period.composers}</div>
      </div>
    `;
    classicalSection.appendChild(card);
  });
  container.appendChild(classicalSection);

  // ROCK SECTION
  const rockSection = document.createElement('div');
  rockSection.className = 'content-section';

  const rockIntro = document.createElement('div');
  rockIntro.innerHTML = `
    <h2 style="color:#fca311; text-align:center;">The History of Rock & Roll</h2>
    <p style="text-align:center; max-width:600px; margin:0 auto 30px auto; font-style:italic;">
      En djupdykning i hur 1950-talet förändrade musiken för alltid.
    </p>
  `;
  rockSection.appendChild(rockIntro);

  rockChapters.forEach(chap => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const imgHtml = chap.img ? `<img src="${chap.img}" class="rock-img">` : '';

    item.innerHTML = `
      <div class="accordion-header">
        <span class="accordion-title">${chap.title}</span>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        ${imgHtml}
        ${chap.content}
      </div>
    `;

    // Click logic
    const headerEl = item.querySelector('.accordion-header');
    const contentEl = item.querySelector('.accordion-content');

    headerEl.addEventListener('click', () => {
      const isOpen = contentEl.classList.contains('open');
      rockSection.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      if (!isOpen) {
        contentEl.classList.add('open');
      }
    });

    rockSection.appendChild(item);
  });
  container.appendChild(rockSection);

  // --- 6. TAB LOGIC ---
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