export function Home() {
  const container = document.createElement('div');
  container.className = 'home-page';

  // ==========================================
  // 1. DATA: KORT (Nu uppdelade och med bilder)
  // ==========================================
  const features = [
    {
      title: "Musikhistoria",
      desc: "Res genom tiden från Barocken till Rock 'n' Roll.",
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=800&q=80",
      linkId: 'historia-link' // Måste matcha ID på din menyknapp om du har sådana, annars hanterar vi det nedan
    },
    {
      title: "Teori",
      desc: "Lär dig noternas språk, takter och skalor.",
      img: "https://images.unsplash.com/photo-1514119688622-5a5665a9e62d?auto=format&fit=crop&w=800&q=80",
      linkId: 'teori-link'
    },
    {
      title: "Ensemble & Instrument",
      desc: "Kolla in våra filmer och lär dig spela olika instrument.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      linkId: 'ensemble-link'
    },
    {
      title: "Spel",
      desc: "Utmana ditt taktsinne och samla poäng!",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      linkId: 'spel-link'
    }
  ];

  // ==========================================
  // 2. CSS STYLING (DARK MODE)
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .home-page {
      padding: 60px 20px;
      max-width: 1100px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      text-align: center;
    }

    /* HERO SECTION - NU MÖRK OCH STILREN */
    .hero-section {
      margin-bottom: 80px;
      padding: 40px 20px;
      animation: fadeIn 0.8s ease-out;
      /* Ingen grön bakgrund längre! */
    }

    .hero-title {
      font-size: 4rem;
      margin-bottom: 20px;
      font-weight: 800;
      /* Gradient text-effekt */
      background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: #aaa;
      max-width: 700px;
      margin: 0 auto 40px auto;
      line-height: 1.6;
    }

    .cta-btn {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: #000;
      padding: 16px 45px;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    }

    .cta-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(79, 172, 254, 0.6);
    }

    /* GRID FÖR KORTEN */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 30px;
    }

    /* KORT DESIGN */
    .feature-card {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      border-color: #4facfe;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    /* Bilden i kortet */
    .card-img-wrapper {
      height: 180px;
      overflow: hidden;
      border-bottom: 1px solid #333;
    }

    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .feature-card:hover .card-img {
      transform: scale(1.1); /* Zoom-effekt på bilden */
    }

    .card-content {
      padding: 25px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card-content h3 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 1.4rem;
    }

    .card-content p {
      margin: 0;
      color: #bbb;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .card-arrow {
      color: #4facfe;
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Mobilanpassning */
    @media (max-width: 600px) {
      .hero-title { font-size: 2.5rem; }
    }
  `;
  container.appendChild(style);

  // ==========================================
  // 3. LOGIK & RENDERING
  // ==========================================

  // --- HERO SEKTION ---
  const hero = document.createElement('div');
  hero.className = 'hero-section';
  hero.innerHTML = `
    <h1 class="hero-title">Välkommen till<br>Tonverkstan 🎵</h1>
    <p class="hero-subtitle">
      Din digitala plattform för musikutbildning. Utforska instrument, 
      dyk ner i historien eller spela med i vår ensemble.
    </p>
    <button class="cta-btn" id="start-btn">Kom igång</button>
  `;
  container.appendChild(hero);

  // --- FUNKTION FÖR ATT HANTERA LÄNKAR ---
  // Detta försöker hitta dina knappar i menyn och klicka på dem
  const handleNavClick = (linkId) => {
    // 1. Försök hitta menylänken (om de har IDn)
    const menuLink = document.getElementById(linkId);
    if (menuLink) {
      menuLink.click();
      return;
    }

    // 2. Fallback: Om vi inte hittar menyn, logga det (här kan vi behöva justera beroende på din meny-kod)
    console.log("Försökte navigera till:", linkId);

    // 3. Alternativ: Skicka ett 'hash'-byte som många sidor lyssnar på
    const hashPart = linkId.replace('-link', '');
    window.location.hash = hashPart;

    // 4. Dispatcha ett event som din main.js kan lyssna på
    const event = new CustomEvent('navigate', { detail: hashPart });
    document.dispatchEvent(event);
  };

  // Klick på "Kom igång" leder till Ensemble (exempelvis)
  hero.querySelector('#start-btn').onclick = () => handleNavClick('ensemble-link');


  // --- FEATURES GRID ---
  const grid = document.createElement('div');
  grid.className = 'features-grid';

  features.forEach(item => {
    const card = document.createElement('div');
    card.className = 'feature-card';

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${item.img}" class="card-img" alt="${item.title}">
      </div>
      <div class="card-content">
        <div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="card-arrow">Gå till sidan <span>→</span></div>
      </div>
    `;

    // När man klickar på kortet
    card.onclick = () => handleNavClick(item.linkId);

    grid.appendChild(card);
  });

  container.appendChild(grid);

  return container;
}