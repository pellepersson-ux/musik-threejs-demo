export function Home() {
  const container = document.createElement('div');
  container.className = 'home-page';

  // ==========================================
  // 1. "NUCLEAR OPTION" FÖR FÄRGEN
  // ==========================================
  // Detta skriver över sidans globala bakgrundsfärg direkt via JS
  document.body.style.backgroundColor = "#121212";
  document.body.style.backgroundImage = "none";

  // ==========================================
  // 2. DATA (Bara de 3 viktigaste)
  // ==========================================
  const features = [
    {
      title: "Instrument",
      desc: "Lär dig grunderna på gitarr, piano, bas och trummor.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      targetText: "instrument"
    },
    {
      title: "Ensemble",
      desc: "Spela med i våra låtar med din stämma.",
      img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
      targetText: "ensemble"
    },
    {
      title: "Spel",
      desc: "Utmana ditt taktsinne och samla poäng!",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      targetText: "spel"
    }
  ];

  // ==========================================
  // 3. CSS
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .home-page {
      padding: 40px 20px;
      max-width: 1100px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      text-align: center;
      min-height: 100vh; /* Säkerställer höjden */
    }

    /* HERO SECTION */
    .hero-section {
      margin-top: 40px; /* Lite luft från menyn */
      margin-bottom: 60px;
      animation: fadeIn 0.8s ease-out;
      display: flex;
      flex-direction: column;
      align-items: center; /* Centrerar allt, inklusive knappen */
    }

    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 15px;
      font-weight: 800;
      background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #aaa;
      max-width: 650px;
      margin: 0 auto 30px auto; /* 30px ner till knappen */
      line-height: 1.5;
    }

    .cta-btn {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: #000;
      padding: 14px 40px; /* Lite tajtare padding */
      border-radius: 50px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    }

    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(79, 172, 254, 0.6);
    }

    /* GRID FÖR DE 3 KORTEN */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Lite bredare kort nu när de är färre */
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

    .card-img-wrapper {
      height: 200px; /* Lite högre bilder */
      overflow: hidden;
      border-bottom: 1px solid #333;
    }
    
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    .feature-card:hover .card-img { transform: scale(1.05); }

    .card-content { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .card-content h3 { margin: 0 0 10px 0; color: #fff; font-size: 1.5rem; }
    .card-content p { color: #bbb; font-size: 1rem; margin-bottom: 20px; }
    .card-arrow { color: #4facfe; font-weight: bold; text-transform: uppercase; font-size: 0.9rem; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @media (max-width: 600px) { .hero-title { font-size: 2.5rem; } }
  `;
  container.appendChild(style);

  // ==========================================
  // 4. LOGIK & NAVIGATION
  // ==========================================

  // Hero-sektionen
  const hero = document.createElement('div');
  hero.className = 'hero-section';
  hero.innerHTML = `
    <h1 class="hero-title">Välkommen till<br>Tonverkstan 🎵</h1>
    <p class="hero-subtitle">
      Din digitala plattform för musikutbildning. Välj ett område nedan för att starta din resa.
    </p>
    <button class="cta-btn" id="start-btn">Kom igång</button>
  `;
  container.appendChild(hero);

  // Grid-sektionen
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
        <div class="card-arrow">Gå till sidan →</div>
      </div>
    `;

    card.onclick = () => simulateMenuClick(item.targetText);
    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Koppla knappen "Kom igång" till Instrument-sidan
  setTimeout(() => {
    const btn = hero.querySelector('#start-btn');
    if (btn) btn.onclick = () => simulateMenuClick("instrument");
  }, 0);

  // --- NAVIGATIONSHJÄLP ---
  // Denna funktion letar efter en länk/knapp i din meny som innehåller ordet (t.ex "ensemble")
  function simulateMenuClick(keyword) {
    const allLinks = document.querySelectorAll('nav a, nav button, .menu-item'); // Försöker träffa olika typer av menyer

    let matchFound = false;
    for (let link of allLinks) {
      // Gör både länktexten och sökordet till små bokstäver för att matcha säkert
      const text = link.innerText.toLowerCase();
      const search = keyword.toLowerCase();

      if (text.includes(search)) {
        link.click();
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      console.log(`Hittade ingen länk för: ${keyword}. Testar fallback.`);
      // Fallback: Ändra URL-hash om menyn inte hittades
      window.location.hash = keyword;
    }
  }

  return container;
}