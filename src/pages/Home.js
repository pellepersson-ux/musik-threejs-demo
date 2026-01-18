export function Home() {
  const container = document.createElement('div');
  container.className = 'home-page';

  // ==========================================
  // 1. DATA
  // ==========================================
  const features = [
    {
      title: "Musikhistoria",
      desc: "Res genom tiden från Barocken till Rock 'n' Roll.",
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=800&q=80",
      targetText: "Historia" // Texten som står i din meny
    },
    {
      title: "Teori",
      desc: "Lär dig noternas språk, takter och skalor.",
      img: "https://images.unsplash.com/photo-1514119688622-5a5665a9e62d?auto=format&fit=crop&w=800&q=80",
      targetText: "Teori"
    },
    {
      title: "Instrument",
      desc: "Kolla in våra filmer och lär dig spela.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      targetText: "Instrument"
    },
    {
      title: "Ensemble",
      desc: "Spela med i våra låtar!",
      img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
      targetText: "Ensemble"
    },
    {
      title: "Spel",
      desc: "Utmana ditt taktsinne och samla poäng!",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      targetText: "Spel"
    }
  ];

  // ==========================================
  // 2. CSS (FIXAR DEN GRÖNA FÄRGEN)
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    /* Tvingar bort det gröna genom att sätta bakgrund på hela denna vy */
    .home-page {
      background-color: #121212 !important; /* Mörk bakgrund */
      min-height: 100vh; /* Täcker hela höjden */
      width: 100%;
      padding: 60px 20px;
      box-sizing: border-box;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      text-align: center;
      position: absolute; /* Säkerställer att den lägger sig överst */
      top: 0;
      left: 0;
      z-index: 1; /* Ligger under menyn men över bakgrunden */
    }

    /* Justering så innehållet inte hamnar bakom menyn */
    .content-wrapper {
      max-width: 1100px;
      margin: 60px auto 0 auto; /* Extra marginal i toppen */
    }

    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 20px;
      font-weight: 800;
      background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #aaa;
      max-width: 700px;
      margin: 0 auto 40px auto;
    }

    .cta-btn {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: #000;
      padding: 15px 45px;
      border-radius: 50px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      transition: transform 0.2s;
    }
    .cta-btn:hover { transform: scale(1.05); }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
    }

    .feature-card {
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
    .feature-card:hover {
      transform: translateY(-8px);
      border-color: #4facfe;
    }

    .card-img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-content { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .card-content h3 { margin: 0 0 10px 0; color: #fff; }
    .card-content p { color: #bbb; font-size: 0.9rem; margin-bottom: 15px; }
    .card-arrow { color: #4facfe; font-weight: bold; font-size: 0.9rem; text-transform: uppercase; }

    @media (max-width: 600px) { .hero-title { font-size: 2.5rem; } }
  `;
  container.appendChild(style);

  // ==========================================
  // 3. LOGIK FÖR ATT KUNNA NAVIGERA
  // ==========================================

  // Wrapper för att centrera innehållet snyggt
  const wrapper = document.createElement('div');
  wrapper.className = 'content-wrapper';

  // --- HERO ---
  const hero = document.createElement('div');
  hero.innerHTML = `
    <h1 class="hero-title">Välkommen till<br>Tonverkstan 🎵</h1>
    <p class="hero-subtitle">
      Din digitala plattform för musikutbildning. Utforska instrument, 
      dyk ner i historien eller spela med i vår ensemble.
    </p>
    <button class="cta-btn" id="start-btn">Kom igång</button>
  `;
  wrapper.appendChild(hero);

  // --- GRID ---
  const grid = document.createElement('div');
  grid.className = 'features-grid';

  features.forEach(item => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
      <img src="${item.img}" class="card-img">
      <div class="card-content">
        <div><h3>${item.title}</h3><p>${item.desc}</p></div>
        <div class="card-arrow">Gå till sidan →</div>
      </div>
    `;

    // Klick-event: Leta efter menyknappen och klicka på den
    card.onclick = () => simulateMenuClick(item.targetText);
    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
  container.appendChild(wrapper);

  // Klick på "Kom igång" går till Instrument (exempelvis)
  setTimeout(() => {
    const btn = hero.querySelector('#start-btn');
    if (btn) btn.onclick = () => simulateMenuClick("Instrument");
  }, 0);

  // --- HJÄLPFUNKTION: Simulerar klick i menyn ---
  function simulateMenuClick(textToFind) {
    // 1. Hämta alla knappar eller länkar på sidan
    const allButtons = document.querySelectorAll('button, a, nav div');

    let found = false;
    for (let btn of allButtons) {
      // Om knappen innehåller texten (t.ex. "Historia"), klicka på den!
      if (btn.innerText.includes(textToFind) && !btn.classList.contains('feature-card')) {
        btn.click();
        found = true;
        break;
      }
    }

    if (!found) {
      console.log(`Kunde inte hitta en menyknapp med texten "${textToFind}"`);
      alert(`Kunde inte navigera automatiskt. Klicka på "${textToFind}" i menyn högst upp.`);
    }
  }

  return container;
}