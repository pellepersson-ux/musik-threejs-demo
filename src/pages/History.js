export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // ==========================================
  // 1. DATA: KLASSISK MUSIK
  // ==========================================
  const classicalData = [
    {
      title: "Renässansen (1450–1600)",
      img: "/images/Renassansen.jpg",
      content: `
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Det man ville väcka till liv igen var idéer och ideal från de gamla grekerna och romarna (antiken).</p>
        <h3>1. Samtiden – Nytänkarnas tid</h3>
        <ul>
          <li><strong>Kända personer:</strong> Columbus, Copernicus och Da Vinci.</li>
          <li><strong>Boktryckarkonsten:</strong> Gjorde att noter och musik kunde spridas enklare.</li>
        </ul>
        <h3>2. Musiken – Hur lät den?</h3>
        <ul>
          <li><strong>Polyfoni:</strong> Flerstämmighet med självständiga melodier.</li>
          <li><strong>A cappella:</strong> Sång utan instrument.</li>
        </ul>
      `
    },
    {
      title: "Barocken (1600–1750)",
      img: "/images/Barocken.jpg",
      content: `
        <h3>Vad betyder Barock?</h3>
        <p>Ordet barock kommer från "barocco", som betyder "ojämn pärla".</p>
        <h3>1. Musiken – Hur lät den?</h3>
        <ul>
          <li><strong>Generalbas:</strong> En basstämma som spelas genom hela låten.</li>
          <li><strong>Terassdynamik:</strong> Man växlade plötsligt mellan starkt och svagt.</li>
        </ul>
      `
    }
  ];

  // ==========================================
  // 2. DATA: POPULÄRMUSIK (Din nya text)
  // ==========================================
  const popularData = [
    {
      tabName: "50-talet",
      title: "1950-talet: När musiken förändrade världen",
      img: "https://images.unsplash.com/photo-1572061489710-18868673a559?auto=format&fit=crop&w=800&q=80",
      chapters: [
        {
          head: "1. Inledning: Rock ’n’ Roll som revolution",
          body: `<p>Välkomna till vår sida om 1950-talets musik! Det här var ett årtionde då populärmusiken blev en personlig revolution för unga människor. Genom att blanda rötter från Blues och Country skapades något helt nytt: <b>Rock ’n’ Roll</b>.</p>`
        },
        {
          head: "2. Rötterna: Blues och Country",
          body: `
            <p>Innan rocken tog över världen fanns det två huvudspår som lade grunden:</p>
            <ul>
              <li><b>Blues:</b> Föddes ur behovet att uttrycka sorg, smärta och hopp. Gav rocken dess hjärta.</li>
              <li><b>Country:</b> Handlade om vardagsliv. Skapade Rockabilly med tuffare beat.</li>
            </ul>`
        },
        {
          head: "3. Instrumenten som skapade soundet",
          body: `<p>Den typiska uppsättningen bestod av: Sångare, Sologitarr, Kompgitarr, Trummor och Bas.</p>`
        },
        {
          head: "4. Klassiska artister",
          body: `<ul><li>Elvis Presley – "Hound Dog"</li><li>Chuck Berry – "Johnny B. Goode"</li><li>Bill Haley – "Rock Around the Clock"</li></ul>`
        }
      ]
    },
    {
      tabName: "60-talet",
      title: "1960-talet: The British Invasion & Pop",
      img: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=800&q=80",
      chapters: [
        {
          head: "1. The Beatles och pop-explosionen",
          body: `<p>Under 60-talet dominerade brittiska band världskartan. Musiken blev mer experimentell mot slutet av årtiondet.</p>`
        }
      ]
    }
  ];

  // ==========================================
  // 3. CSS (Layouten från Bild 2)
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page { padding: 40px 20px; max-width: 900px; margin: 0 auto; color: #e0e0e0; }
    .history-header { text-align: center; margin-bottom: 30px; }
    
    .nav-container { display: flex; flex-direction: column; align-items: center; gap: 20px; margin-bottom: 40px; }
    .main-nav, .sub-nav { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
    
    .nav-btn { 
      background: transparent; border: 2px solid #4facfe; color: #fff; padding: 8px 20px; 
      border-radius: 20px; cursor: pointer; transition: 0.3s; font-size: 0.9rem;
    }
    .nav-btn.active { background: #4facfe; color: #000; font-weight: bold; box-shadow: 0 0 15px rgba(79, 172, 254, 0.4); }
    
    .era-content-title { color: #fca311; text-align: center; font-size: 2.2rem; margin-top: 10px; }
    .era-img { width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin: 25px 0; border: 1px solid #333; }

    .accordion-item { background: #1a1a1a; border: 1px solid #333; margin-bottom: 12px; border-radius: 8px; overflow: hidden; }
    .acc-header { 
      width: 100%; padding: 18px 25px; background: #222; border: none; color: #fca311; 
      text-align: left; font-size: 1.15rem; font-weight: bold; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center;
    }
    .acc-header:hover { background: #2a2a2a; }
    .acc-body { max-height: 0; overflow: hidden; transition: max-height 0.5s ease-out; background: rgba(0,0,0,0.1); }
    .accordion-item.open .acc-body { max-height: 2500px; }
    .acc-inner { padding: 25px; line-height: 1.8; color: #ddd; }
    .acc-inner h3 { color: #4facfe; margin-top: 20px; border-bottom: 1px solid #333; padding-bottom: 5px; }
  `;
  container.appendChild(style);

  // ==========================================
  // 4. LOGIK & STATE
  // ==========================================
  let currentCategory = 'classical'; // 'classical' eller 'popular'
  let currentIndex = 0;

  function renderContent() {
    // Rensa tidigare innehåll (behåll style)
    const existingContent = container.querySelector('.history-body');
    if (existingContent) existingContent.remove();

    const body = document.createElement('div');
    body.className = 'history-body';

    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-container';

    // Huvudrubrik
    const h1 = document.createElement('h1');
    h1.style.textAlign = 'center';
    h1.innerText = 'Musikhistoria 📜🎸';
    navWrapper.appendChild(h1);

    // Huvudval (Klassisk / Populär)
    const mainNav = document.createElement('div');
    mainNav.className = 'main-nav';
    mainNav.innerHTML = `
      <button class="nav-btn ${currentCategory === 'classical' ? 'active' : ''}" id="btn-classic">Klassisk Musik</button>
      <button class="nav-btn ${currentCategory === 'popular' ? 'active' : ''}" id="btn-popular">Populärmusik</button>
    `;
    navWrapper.appendChild(mainNav);

    // Epok-val (Flikar)
    const subNav = document.createElement('div');
    subNav.className = 'sub-nav';
    const activeData = currentCategory === 'classical' ? classicalData : popularData;

    activeData.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.className = `nav-btn ${currentIndex === index ? 'active' : ''}`;
      // Namn på fliken
      btn.innerText = currentCategory === 'classical' ? item.title.split(' ')[0] : item.tabName;
      btn.onclick = () => { currentIndex = index; renderContent(); };
      subNav.appendChild(btn);
    });
    navWrapper.appendChild(subNav);
    body.appendChild(navWrapper);

    // Visa vald epok
    const era = activeData[currentIndex];
    const eraDiv = document.createElement('div');

    if (currentCategory === 'classical') {
      // Layout för klassisk (enligt bild 1)
      eraDiv.innerHTML = `
        <h2 class="era-content-title">${era.title}</h2>
        <img src="${era.img}" class="era-img" onerror="this.src='https://images.unsplash.com/photo-1507838596016-a94bcba79708?w=800'">
        <div class="accordion-item open">
          <div class="acc-inner">${era.content}</div>
        </div>
      `;
    } else {
      // Layout för populär (med flera dragspelsmenyer)
      eraDiv.innerHTML = `
        <h2 class="era-content-title">${era.title}</h2>
        <img src="${era.img}" class="era-img">
        ${era.chapters.map((ch, i) => `
          <div class="accordion-item">
            <button class="acc-header">${ch.head} <span>▼</span></button>
            <div class="acc-body">
              <div class="acc-inner">${ch.body}</div>
            </div>
          </div>
        `).join('')}
      `;
    }
    body.appendChild(eraDiv);
    container.appendChild(body);

    // Koppla knappar för huvudkategori
    container.querySelector('#btn-classic').onclick = () => { currentCategory = 'classical'; currentIndex = 0; renderContent(); };
    container.querySelector('#btn-popular').onclick = () => { currentCategory = 'popular'; currentIndex = 0; renderContent(); };

    // Koppla dragspels-logik
    container.querySelectorAll('.acc-header').forEach(btn => {
      btn.onclick = () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('open');
        // Stäng andra om man vill (valfritt)
        // container.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
        else item.classList.remove('open');
      };
    });
  }

  // Första körningen
  setTimeout(renderContent, 0);

  return container;
}