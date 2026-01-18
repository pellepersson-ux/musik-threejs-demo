export function Home() {
  const container = document.createElement('div');
  container.className = 'home-page';

  // ==========================================
  // 1. DATA: KORT FÖR STARTSIDAN
  // ==========================================
  const features = [
    {
      title: "Musikhistoria",
      desc: "Res genom tiden från Barocken till Rock 'n' Roll.",
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?auto=format&fit=crop&w=800&q=80",
      link: 'historia' // Används för logik om du vill bygga vidare
    },
    {
      title: "Instrument & Ensemble",
      desc: "Lär dig om instrument och spela med i våra låtar.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      link: 'instrument'
    },
    {
      title: "Teori & Spel",
      desc: "Utmana ditt taktsinne och lär dig noternas språk.",
      img: "https://images.unsplash.com/photo-1514119688622-5a5665a9e62d?auto=format&fit=crop&w=800&q=80",
      link: 'teori'
    }
  ];

  // ==========================================
  // 2. CSS STYLING
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .home-page {
      padding: 60px 20px;
      max-width: 1000px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      text-align: center;
    }

    /* HERO SECTION */
    .hero-section {
      margin-bottom: 60px;
      animation: fadeIn 0.8s ease-out;
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      /* Samma snygga gradient som på Ensemble-sidan */
      background: linear-gradient(to right, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #aaa;
      max-width: 600px;
      margin: 0 auto 30px auto;
      line-height: 1.6;
    }

    .cta-btn {
      background: #4facfe;
      color: #000;
      padding: 15px 40px;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
      display: inline-block;
    }

    .cta-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(79, 172, 254, 0.6);
    }

    /* GRID FÖR KORTEN */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    /* KORT DESIGN (Samma som Ensemble) */
    .feature-card {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s, border-color 0.3s;
      text-align: left;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      border-color: #4facfe;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .card-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-bottom: 1px solid #333;
    }

    .card-content {
      padding: 25px;
      flex-grow: 1;
    }

    .card-content h3 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 1.4rem;
    }

    .card-content p {
      margin: 0;
      color: #aaa;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .card-arrow {
      margin-top: 15px;
      color: #4facfe;
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
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
    <h1>Välkommen till<br>Tonverkstan 🎵</h1>
    <p class="hero-subtitle">
      Din digitala plattform för musikutbildning. Utforska instrument, 
      dyk ner i historien eller spela med i vår ensemble.
    </p>
    <button class="cta-btn">Kom igång</button>
  `;
  container.appendChild(hero);

  // --- FEATURES GRID ---
  const grid = document.createElement('div');
  grid.className = 'features-grid';

  features.forEach(item => {
    const card = document.createElement('div');
    card.className = 'feature-card';

    card.innerHTML = `
      <img src="${item.img}" class="card-img" alt="${item.title}">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="card-arrow">Läs mer →</div>
      </div>
    `;

    // Här kan du lägga till navigation om du vill
    // t.ex. card.onclick = () => navigateTo(item.link);

    grid.appendChild(card);
  });

  container.appendChild(grid);

  return container;
}