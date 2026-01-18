export function Ensemble() {
  const container = document.createElement('div');
  container.className = 'ensemble-page';

  // ==========================================
  // 1. DATA: LÅTLISTA
  // ==========================================
  const videos = [
    {
      id: 'video1',
      title: 'Hjältarna - (Ensemble)',
      src: '/videos/Hjaltarna.mp4',
      desc: 'En energifylld öppningslåt med hela ensemblen.'
    },
    {
      id: 'video2',
      title: 'Stjärnorna - (Kör)',
      src: '/videos/Stjarnorna.mp4',
      desc: 'Enstämmig körsång med fokus på klang.'
    },
    {
      id: 'video3',
      title: 'Nattens ljus - (Solo)',
      src: '/videos/NattensLjus.mp4',
      desc: 'Ett stämningsfullt solo med pianoackompanjemang.'
    }
  ];

  // ==========================================
  // 2. CSS STYLING
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .ensemble-page {
      padding: 40px 20px;
      max-width: 1000px; /* Lite bredare för videons skull */
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      text-align: center;
    }

    h1 {
      margin-bottom: 40px;
      font-size: 2.5rem;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* GRID FÖR LISTAN */
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
      margin-top: 20px;
    }

    /* VIDEOCARD (FÖRANVISNING) */
    .video-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #333;
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      position: relative;
      overflow: hidden;
    }

    .video-card:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-5px);
      border-color: #4facfe;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }

    .video-card h3 {
      margin: 0 0 10px 0;
      color: #fff;
    }

    .video-card p {
      font-size: 0.9rem;
      color: #aaa;
      margin: 0;
    }

    .play-icon {
      font-size: 2rem;
      color: #4facfe;
      margin-bottom: 15px;
    }

    /* VIDEOSPELARE VY */
    .player-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeIn 0.5s;
    }

    .video-wrapper {
      width: 100%;
      max-width: 800px;
      background: #000;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 30px rgba(79, 172, 254, 0.2);
      margin-bottom: 20px;
    }

    video {
      width: 100%;
      display: block;
    }

    .video-info {
      text-align: left;
      max-width: 800px;
      width: 100%;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,0.03);
      border-radius: 8px;
    }

    /* SNYGGA KNAPPAR */
    .back-btn {
      background: transparent;
      border: 2px solid #4facfe;
      color: #fff;
      padding: 10px 25px;
      border-radius: 50px; /* Piller-form */
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .back-btn:hover {
      background: #4facfe;
      color: #000; /* Svart text mot blå bakgrund */
      box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
      transform: translateX(-5px); /* Rör sig lite åt vänster */
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

  // Huvudrubrik
  const title = document.createElement('h1');
  title.innerText = "Vår Ensemble";
  container.appendChild(title);

  // Behållare för innehåll (Lista eller Spelare)
  const contentContainer = document.createElement('div');
  container.appendChild(contentContainer);

  // Funktion: Visa listan
  function renderList() {
    contentContainer.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'video-grid';

    videos.forEach(video => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `
        <div class="play-icon">▶</div>
        <h3>${video.title}</h3>
        <p>${video.desc}</p>
      `;

      card.onclick = () => renderPlayer(video);
      grid.appendChild(card);
    });

    contentContainer.appendChild(grid);
  }

  // Funktion: Visa videospelare
  function renderPlayer(videoData) {
    contentContainer.innerHTML = ''; // Rensa listan

    const playerView = document.createElement('div');
    playerView.className = 'player-view';

    // 1. Tillbaka-knapp (NU UPPDATERAD DESIGN)
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = `<span>←</span> Tillbaka till låtlistan`;
    backBtn.onclick = renderList;
    playerView.appendChild(backBtn);

    // 2. Videorutan
    const wrapper = document.createElement('div');
    wrapper.className = 'video-wrapper';

    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.autoplay = true; // Startar direkt

    // Fallback om videon inte finns
    videoEl.innerHTML = `Din webbläsare stödjer inte video.`;
    videoEl.src = videoData.src;

    wrapper.appendChild(videoEl);
    playerView.appendChild(wrapper);

    // 3. Info under videon
    const info = document.createElement('div');
    info.className = 'video-info';
    info.innerHTML = `
      <h2 style="color: #4facfe; margin-top: 0;">${videoData.title}</h2>
      <p>${videoData.desc}</p>
    `;
    playerView.appendChild(info);

    contentContainer.appendChild(playerView);
  }

  // Starta med att visa listan
  renderList();

  return container;
}