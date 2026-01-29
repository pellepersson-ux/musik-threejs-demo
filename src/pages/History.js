export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // ==========================================
  // 1. DATA: KLASSISK MUSIK
  // ==========================================
  const classicalData = [
    {
      title: "Renässansen (1450–1600)",
      img: "/images/Renassansen.jpg", // Se till att denna bild finns, annars ta bort raden
      content: `
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Det man ville väcka till liv igen var idéer och ideal från de gamla grekerna och romarna (antiken).</p>
        <h3>Musiken – Hur lät den?</h3>
        <ul>
          <li><strong>Polyfoni:</strong> Flera självständiga stämmor samtidigt.</li>
          <li><strong>A cappella:</strong> Sång utan instrument.</li>
          <li><strong>Modala skalor:</strong> Kyrkotonarter.</li>
        </ul>
        <h3>Viktiga Tonsättare</h3>
        <p>Josquin des Prez, Palestrina, Thomas Tallis.</p>
      `
    },
    {
      title: "Barocken (1600–1750)",
      img: "/images/Barocken.jpg",
      content: `
        <h3>Prakt och Makt</h3>
        <p>Barocken var de enväldiga kungarnas tid. Musiken var grandios, strukturerad och utsmyckad.</p>
        <h3>Viktiga begrepp</h3>
        <ul>
          <li><strong>Generalbas:</strong> En basstämma som spelas genom hela låten (Cello + Cembalo).</li>
          <li><strong>Terassdynamik:</strong> Växlingar mellan svagt och starkt.</li>
          <li><strong>Cembalo:</strong> Barockens piano.</li>
        </ul>
        <h3>Giganterna</h3>
        <p>Vivaldi (De fyra årstiderna), Bach (Fugor), Händel (Messias).</p>
      `
    },
    {
      title: "Wienklassicismen (1750–1820)",
      img: "/images/Klassicismen.jpg",
      content: `
        <h3>Förnuft och Balans</h3>
        <p>Under upplysningstiden ville man ha enkelhet, balans och elegans. Pianot uppfanns och ersatte cembalon.</p>
        <h3>Musiken</h3>
        <p>Melodin blev viktigare (homofoni) och orkestern växte. Man började använda crescendo och diminuendo.</p>
        <h3>Wienskolan</h3>
        <p>Haydn, Mozart och Beethoven.</p>
      `
    },
    {
      title: "Romantiken (1820–1900)",
      img: "/images/Romantiken.jpg",
      content: `
        <h3>Känslor och Frihet</h3>
        <p>Nu handlade allt om att uttrycka starka känslor. Tonsättaren blev en "fri konstnär".</p>
        <h3>Musiken</h3>
        <p>Friare former, större orkestrar och tekniskt svår musik (virtuositet).</p>
        <h3>Viktiga namn</h3>
        <p>Chopin, Schubert, Wagner, Grieg, Tjajkovskij.</p>
      `
    },
    {
      title: "Modernismen (1900–Nutid)",
      img: "/images/Modernismen.jpg",
      content: `
        <h3>Experimentens tid</h3>
        <p>Man bröt mot alla gamla regler. Musik kunde vara atonal (utan tonart) eller helt elektronisk.</p>
        <h3>Stilar</h3>
        <ul>
          <li><strong>Impressionism:</strong> Drömskt (Debussy).</li>
          <li><strong>Expressionism:</strong> Ångestladdat (Schönberg).</li>
          <li><strong>Minimalism:</strong> Upprepningar (Philip Glass).</li>
        </ul>
      `
    }
  ];

  // ==========================================
  // 2. DATA: ROCK 'N' ROLL (50-TAL)
  // ==========================================
  const rock50Data = [
    {
      title: "Rockens födelse & Rötter",
      img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Rock’n’roll uppstod under 1950-talet i USA som en blandning av Rhythm & Blues, Gospel och Country.</p>
        <h3>R&B och Blues</h3>
        <p>Artister som Muddy Waters lade grunden med elektrifierade instrument och stark rytm.</p>
        <h3>Alan Freed</h3>
        <p>Radioprataren som myntade begreppet "Rock'n'roll" för att nå ut till vit ungdom med svart musik.</p>
      `
    },
    {
      title: "Elvis & Kungarna",
      img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>Elvis Presley</h3>
        <p>Blev symbolen för genren. Han blandade svart R&B med vit country och skapade en sexuell och rebellisk image.</p>
        <h3>Chuck Berry</h3>
        <p>Gjorde elgitarren till huvudinstrumentet och skrev texter om tonårslivet.</p>
        <h3>Little Richard</h3>
        <p>Utmanade alla normer med sitt vilda pianospel och androgyna stil.</p>
      `
    },
    {
      title: "Moralpanik",
      content: `
        <p>Vuxenvärlden, kyrkan och politiker var livrädda. De kopplade musiken till kriminalitet och sexuell omoral. Men detta gjorde bara musiken mer populär bland ungdomar.</p>
      `
    }
  ];

  // ==========================================
  // 3. DATA: ROCK (60-TAL) - NYTT!
  // ==========================================
  const rock60Data = [
    {
      title: "Den tidiga 60-talsvågen",
      img: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Om 50-talet var födelsen, var 60-talet renässansen.</p>
        <h3>Dansfeber</h3>
        <p>Chubby Checker startade twist-vågen som fick alla att dansa.</p>
        <h3>Wall of Sound</h3>
        <p>Producenten Phil Spector skapade enorma ljudbilder ("Ljudväggen") för tjejgrupper som The Ronettes.</p>
      `
    },
    {
      title: "Motown: Soul från Detroit",
      img: "https://images.unsplash.com/photo-1471565661785-f241e75250cc?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Berry Gordy startade det första stora svarta skivbolaget som fick global framgång.</p>
        <ul>
          <li><strong>Soundet:</strong> Stadigt beat (tambo på 2 & 4), stråkar och soul sång.</li>
          <li><strong>Artister:</strong> The Supremes, Stevie Wonder, Jackson 5, Marvin Gaye.</li>
        </ul>
      `
    },
    {
      title: "The British Invasion",
      img: "https://images.unsplash.com/photo-1599912079069-450f38d1544a?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>The Beatles</h3>
        <p>Från Liverpool kom bandet som förändrade världen. De gick från enkel pop till att skapa historiens kanske bästa album: <em>Sgt. Pepper's Lonely Hearts Club Band</em>.</p>
        <h3>The Rolling Stones</h3>
        <p>Beatles farliga motsats. Råare, bluesigare och kaxigare.</p>
      `
    },
    {
      title: "Hippie & Psykedelia",
      img: "https://images.unsplash.com/photo-1534330207526-9e4e7577237f?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>San Francisco blev centrum för "Peace and Love". Musiken blev flummig och experimentell.</p>
        <h3>Jimi Hendrix</h3>
        <p>Elgitarr-guden som använde distorsion och feedback som ingen annan.</p>
        <h3>Mot Hårdrocken</h3>
        <p>Band som Cream och låtar som "Born to be Wild" lade grunden för 70-talets tunga rock.</p>
      `
    }
  ];

  // ==========================================
  // 4. CSS (Styles)
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
      gap: 15px;
      margin-bottom: 40px;
      border-bottom: 1px solid #444;
      padding-bottom: 20px;
      flex-wrap: wrap; 
    }
    .tab-btn {
      background: transparent;
      border: 2px solid #4facfe;
      color: #fff;
      padding: 10px 20px;
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
      transform: scale(1.05);
    }

    /* SECTIONS */
    .content-section {
      display: none;
      animation: fadeIn 0.5s;
    }
    .content-section.active {
      display: block;
    }

    /* ACCORDION */
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
      color: #fca311;
      font-size: 1.2rem;
    }
    .icon {
      font-size: 1.5rem;
      transition: transform 0.3s;
    }
    .accordion-item.open .icon {
      transform: rotate(45deg);
      color: #ff6b6b;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-out;
      background: rgba(255,255,255,0.05);
    }
    .accordion-inner {
      padding: 30px;
      line-height: 1.6;
      color: #ddd;
    }
    
    /* Content Styling */
    .accordion-inner h3 { color: #4facfe; margin-top: 20px; margin-bottom: 10px; }
    .accordion-inner ul { padding-left: 20px; margin-bottom: 20px; }
    .accordion-inner li { margin-bottom: 5px; }
    
    .section-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 25px;
      border-radius: 6px;
      border: 1px solid #444;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  container.appendChild(style);

  // ==========================================
  // 5. RENDERING LOGIC
  // ==========================================

  // Header
  const header = document.createElement('div');
  header.style.textAlign = 'center';
  header.innerHTML = `<h1>Musikhistoria 📜🎸</h1><p style="color:#aaa;">Välj epok nedan</p>`;
  container.appendChild(header);

  // Skapa meny-knappar
  const tabContainer = document.createElement('div');
  tabContainer.className = 'tab-menu';

  const tabs = [
    { name: 'Klassisk Musik', id: 'classic' },
    { name: "Rock 'n' Roll (50-tal)", id: 'rock50' },
    { name: "Rock (60-tal)", id: 'rock60' }
  ];

  tabs.forEach((t, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = t.name;
    btn.dataset.target = t.id;

    btn.onclick = () => switchTab(t.id, btn);
    tabContainer.appendChild(btn);
  });
  container.appendChild(tabContainer);

  // Funktion för att skapa Accordions
  function createSection(id, data, isActive) {
    const sectionDiv = document.createElement('div');
    sectionDiv.id = id;
    sectionDiv.className = `content-section ${isActive ? 'active' : ''}`;

    data.forEach(item => {
      const accItem = document.createElement('div');
      accItem.className = 'accordion-item';

      // Header
      const accHeader = document.createElement('div');
      accHeader.className = 'accordion-header';
      accHeader.innerHTML = `
        <span class="accordion-title">${item.title}</span>
        <span class="icon">+</span>
      `;

      // Content Body
      const accContent = document.createElement('div');
      accContent.className = 'accordion-content';

      let imgHTML = '';
      if (item.img) {
        imgHTML = `<img src="${item.img}" class="section-img" loading="lazy" alt="${item.title}" />`;
      }

      accContent.innerHTML = `
        <div class="accordion-inner">
          ${imgHTML}
          ${item.content}
        </div>
      `;

      // Click Event för öppna/stänga
      accHeader.onclick = () => {
        const isOpen = accItem.classList.contains('open');

        // Stäng alla andra i samma sektion (valfritt, men snyggt)
        sectionDiv.querySelectorAll('.accordion-item').forEach(d => {
          d.classList.remove('open');
          d.querySelector('.accordion-content').style.maxHeight = null;
          d.querySelector('.icon').innerText = '+';
        });

        if (!isOpen) {
          accItem.classList.add('open');
          accContent.style.maxHeight = accContent.scrollHeight + "px";
          accHeader.querySelector('.icon').innerText = '×';
        }
      };

      accItem.appendChild(accHeader);
      accItem.appendChild(accContent);
      sectionDiv.appendChild(accItem);
    });

    return sectionDiv;
  }

  // Skapa de tre sektionerna
  const sectionClassic = createSection('classic', classicalData, true);
  const sectionRock50 = createSection('rock50', rock50Data, false);
  const sectionRock60 = createSection('rock60', rock60Data, false);

  container.appendChild(sectionClassic);
  container.appendChild(sectionRock50);
  container.appendChild(sectionRock60);

  // Funktion för att byta flik
  function switchTab(targetId, clickedBtn) {
    // Uppdatera knappar
    container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    clickedBtn.classList.add('active');

    // Uppdatera sektioner
    container.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === targetId) {
        sec.classList.add('active');
      }
    });
  }

  return container;
}