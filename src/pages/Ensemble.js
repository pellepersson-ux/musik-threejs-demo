export function Ensemble() {
  const container = document.createElement('div');
  container.className = 'ensemble-page';

  // ==========================================
  // 1. DATA: LÅTAR (Med omslagsbild/Poster)
  // ==========================================
  // OBS: För att videon ska funka måste filerna finnas i mappen 'public/videos/'
  const songs = [
    {
      id: 1,
      title: 'Smoke on the Water',
      desc: 'Klassiskt rockriff. Fokus på timing.',
      // Omslagsbild (visas innan man startar)
      poster: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80',
      fullMix: '/videos/smoke_full.mp4',
      parts: {
        guitar: '/videos/smoke_guitar.mp4',
        keys: '/videos/smoke_keys.mp4',
        bass: '/videos/smoke_bass.mp4',
        drums: '/videos/smoke_drums.mp4'
      }
    },
    {
      id: 2,
      title: 'Billie Jean',
      desc: 'Svängig basgång och tight trumkomp.',
      poster: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
      fullMix: '/videos/billie_full.mp4',
      parts: {
        guitar: '/videos/billie_guitar.mp4',
        keys: '/videos/billie_keys.mp4',
        bass: '/videos/billie_bass.mp4',
        drums: '/videos/billie_drums.mp4'
      }
    }
  ];

  // ==========================================
  // 2. CSS STYLING
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .ensemble-page {
      padding: 40px 20px;
      max-width: 900px;
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

    /* KORTEN I LÅTLISTAN */
    .song-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .song-card {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
      text-align: left;
    }
    .song-card:hover {
      transform: translateY(-5px);
      border-color: #4facfe;
    }
    .card-img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-bottom: 1px solid #333;
    }
    .card-info { padding: 20px; }
    .card-info h3 { margin: 0 0 10px 0; color: #fff; }
    .card-info p { margin: 0; color: #aaa; font-size: 0.9rem; }

    /* VY 2: SPELAREN */
    .player-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeIn 0.5s;
    }

    /* TILLBAKA-KNAPPEN (DIN DESIGN) */
    .back-btn {
      background: transparent;
      border: 2px solid #4facfe;
      color: #fff;
      padding: 10px 25px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 25px;
      align-self: flex-start; 
    }

    .back-btn:hover {
      background: #4facfe;
      color: #000; 
      box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
      transform: translateX(-5px);
    }

    /* VIDEO WRAPPER - NU MED FAST FORMAT 16:9 */
    .video-wrapper {
      width: 100%;
      max-width: 800px;
      aspect-ratio: 16 / 9; /* Tvingar rutan att vara widescreen */
      background: #000;     /* Svart bakgrund om videon laddar */
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 0 40px rgba(0,0,0,0.6);
      margin-bottom: 30px;
      position: relative;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: contain; /* Gör att hela videon syns */
      display: block;
    }

    /* INSTRUMENT KNAPPAR */
    .instrument-controls {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .inst-btn {
      background: #222;
      color: #ccc;
      border: 1px solid #444;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s;
    }
    .inst-btn:hover {
      background: #333;
      border-color: #fff;
      color: #fff;
    }
    .inst-btn.active {
      background: #4facfe;
      color: #000;
      border-color: #4facfe;
      font-weight: bold;
      box-shadow: 0 0 10px rgba(79, 172, 254, 0.4);
    }
    .mix-btn {
      border-color: #666;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  container.appendChild(style);

  // ==========================================
  // 3. LOGIK
  // ==========================================
  const titleEl = document.createElement('h1');
  titleEl.innerText = "Replokal Online";
  container.appendChild(titleEl);

  const contentArea = document.createElement('div');
  container.appendChild(contentArea);

  // --- VY 1: LISTAN ---
  function renderSongList() {
    contentArea.innerHTML = '';
    titleEl.style.display = 'block';
    titleEl.innerText = "Välj låt att öva på";

    const grid = document.createElement('div');
    grid.className = 'song-grid';

    songs.forEach(song => {
      const card = document.createElement('div');
      card.className = 'song-card';

      // Vi lägger till en bild i kortet också för snyggare look
      card.innerHTML = `
        <img src="${song.poster}" class="card-img" alt="Omslag">
        <div class="card-info">
          <h3>${song.title}</h3>
          <p>${song.desc}</p>
        </div>
      `;
      card.onclick = () => renderPlayer(song);
      grid.appendChild(card);
    });

    contentArea.appendChild(grid);
  }

  // --- VY 2: SPELAREN ---
  function renderPlayer(song) {
    contentArea.innerHTML = '';
    titleEl.style.display = 'none';

    const wrapper = document.createElement('div');
    wrapper.className = 'player-view';

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = `<span>←</span> Tillbaka till listan`;
    backBtn.onclick = renderSongList;
    wrapper.appendChild(backBtn);

    // Låttitel
    const songHeader = document.createElement('h2');
    songHeader.innerText = song.title;
    songHeader.style.marginBottom = '15px';
    wrapper.appendChild(songHeader);

    // VIDEO ELEMENT
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';

    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.poster = song.poster; // Visar bilden innan play trycks
    videoEl.src = song.fullMix;   // Startar med full mix

    videoWrapper.appendChild(videoEl);
    wrapper.appendChild(videoWrapper);

    // KNAPPAR
    const controls = document.createElement('div');
    controls.className = 'instrument-controls';

    const instruments = [
      { label: 'Hela Bandet', src: song.fullMix, isMix: true },
      { label: '🎸 Elgitarr', src: song.parts.guitar },
      { label: '🎹 Keyboard', src: song.parts.keys },
      { label: '🎸 Bas', src: song.parts.bass },
      { label: '🥁 Trummor', src: song.parts.drums }
    ];

    instruments.forEach(inst => {
      const btn = document.createElement('button');
      btn.className = 'inst-btn';
      if (inst.isMix) btn.classList.add('active', 'mix-btn');
      btn.innerText = inst.label;

      btn.onclick = () => {
        // Behåll tidpunkten när vi byter vinkel/instrument
        const time = videoEl.currentTime;
        const isPlaying = !videoEl.paused;

        videoEl.src = inst.src;
        videoEl.currentTime = time;

        // Om videon spelades, fortsätt spela. Annars vänta.
        if (isPlaying) videoEl.play();

        // Uppdatera knapparna
        wrapper.querySelectorAll('.inst-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };

      controls.appendChild(btn);
    });

    wrapper.appendChild(controls);

    // Text för feedback om inget händer
    const helpText = document.createElement('p');
    helpText.innerHTML = "<em>Obs: Om videon är svart saknas filen i mappen.</em>";
    helpText.style.color = "#555";
    helpText.style.marginTop = "30px";
    wrapper.appendChild(helpText);

    contentArea.appendChild(wrapper);
  }

  renderSongList();
  return container;
}