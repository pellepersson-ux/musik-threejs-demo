export function Ensemble() {
  const container = document.createElement('div');
  container.className = 'ensemble-page';

  // ==========================================
  // 1. DATA: DINA LÅTAR OCH STÄMMOR
  // ==========================================
  // Här lägger du in sökvägarna till dina videofiler.
  const songs = [
    {
      id: 1,
      title: 'Smoke on the Water',
      desc: 'Klassisk rocklåt. Fokus på det ikoniska riffet.',
      // Huvudvideo (Hela bandet)
      fullMix: '/videos/smoke_full.mp4',
      // Instrument-specifika videor
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
      fullMix: '/videos/billie_full.mp4',
      parts: {
        guitar: '/videos/billie_guitar.mp4',
        keys: '/videos/billie_keys.mp4',
        bass: '/videos/billie_bass.mp4',
        drums: '/videos/billie_drums.mp4'
      }
    },
    // Lägg till fler låtar här...
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

    /* LÅTLISTA (KORT) */
    .song-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .song-card {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 10px;
      padding: 25px;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
    }
    .song-card:hover {
      transform: translateY(-5px);
      border-color: #4facfe;
    }
    .song-card h3 { margin: 0 0 10px 0; color: #fff; }
    .song-card p { margin: 0; color: #aaa; font-size: 0.9rem; }

    /* VIDEOSPELARE VY */
    .player-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeIn 0.5s;
    }

    /* DEN SNYGGA TILLBAKA-KNAPPEN */
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
      margin-bottom: 20px;
      align-self: flex-start; /* Sätt den till vänster */
    }

    .back-btn:hover {
      background: #4facfe;
      color: #000; 
      box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
      transform: translateX(-5px);
    }

    /* VIDEORUTA */
    .video-wrapper {
      width: 100%;
      max-width: 800px;
      background: #000;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 30px rgba(0,0,0,0.5);
      margin-bottom: 30px;
    }
    video { width: 100%; display: block; }

    /* INSTRUMENT-KNAPPAR CONTAINER */
    .instrument-controls {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;
    }

    /* INSTRUMENT-KNAPP STYLE */
    .inst-btn {
      background: #222;
      color: #fff;
      border: 1px solid #444;
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      min-width: 100px;
      transition: all 0.2s;
    }
    .inst-btn:hover {
      background: #333;
      border-color: #fff;
    }
    .inst-btn.active {
      background: #4facfe;
      color: #000;
      border-color: #4facfe;
      font-weight: bold;
    }
    
    /* Mix-knappen (för att se hela bandet igen) */
    .mix-btn {
      background: #333; 
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

  // Titel
  const titleEl = document.createElement('h1');
  titleEl.innerText = "Låtarkiv";
  container.appendChild(titleEl);

  const contentArea = document.createElement('div');
  container.appendChild(contentArea);

  // ----------------------------------------
  // VY 1: LÅTLISTAN
  // ----------------------------------------
  function renderSongList() {
    contentArea.innerHTML = '';
    titleEl.innerText = "Välj en låt att öva på";
    titleEl.style.display = 'block';

    const grid = document.createElement('div');
    grid.className = 'song-grid';

    songs.forEach(song => {
      const card = document.createElement('div');
      card.className = 'song-card';
      card.innerHTML = `
        <h3>${song.title}</h3>
        <p>${song.desc}</p>
      `;
      card.onclick = () => renderSongDetail(song);
      grid.appendChild(card);
    });

    contentArea.appendChild(grid);
  }

  // ----------------------------------------
  // VY 2: SPELAREN & INSTRUMENTEN
  // ----------------------------------------
  function renderSongDetail(song) {
    contentArea.innerHTML = '';
    titleEl.style.display = 'none'; // Dölj stora rubriken för renare look

    const wrapper = document.createElement('div');
    wrapper.className = 'player-view';

    // 1. TILLBAKA-KNAPP
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = `<span>←</span> Tillbaka till listan`;
    backBtn.onclick = renderSongList;
    wrapper.appendChild(backBtn);

    // Rubrik för låten
    const songTitle = document.createElement('h2');
    songTitle.innerText = song.title;
    songTitle.style.marginBottom = '20px';
    wrapper.appendChild(songTitle);

    // 2. VIDEO ELEMENT
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';

    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.src = song.fullMix; // Börja med hela bandet

    videoWrapper.appendChild(videoEl);
    wrapper.appendChild(videoWrapper);

    // 3. INSTRUMENT-KNAPPAR
    const controls = document.createElement('div');
    controls.className = 'instrument-controls';

    // Lista över knapparna vi vill skapa
    const instruments = [
      { label: 'Hela Bandet (Mix)', src: song.fullMix, isMix: true },
      { label: 'Elgitarr', src: song.parts.guitar },
      { label: 'Keyboard', src: song.parts.keys },
      { label: 'Bas', src: song.parts.bass },
      { label: 'Trummor', src: song.parts.drums }
    ];

    instruments.forEach(inst => {
      const btn = document.createElement('button');
      btn.className = 'inst-btn';
      if (inst.isMix) btn.classList.add('active', 'mix-btn'); // Mixen är aktiv från start
      btn.innerText = inst.label;

      btn.onclick = () => {
        // Byt video
        const currentTime = videoEl.currentTime; // Spara tiden så vi fortsätter där vi var
        videoEl.src = inst.src;
        videoEl.currentTime = currentTime;
        videoEl.play();

        // Uppdatera aktiv klass på knapparna
        const allBtns = controls.querySelectorAll('.inst-btn');
        allBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };

      controls.appendChild(btn);
    });

    wrapper.appendChild(controls);

    // Instruktionstext under knapparna
    const infoText = document.createElement('p');
    infoText.style.marginTop = "20px";
    infoText.style.color = "#888";
    infoText.style.fontStyle = "italic";
    infoText.innerText = "Klicka på ett instrument för att se den stämman.";
    wrapper.appendChild(infoText);

    contentArea.appendChild(wrapper);
  }

  // Kör igång listan
  renderSongList();

  return container;
}