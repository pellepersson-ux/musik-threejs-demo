export function Instrument() {
  const container = document.createElement('div');
  container.className = 'instrument-page';

  // --- 1. DATA ---
  const instruments = [
    {
      id: 'piano',
      name: 'Piano & Keyboard',
      desc: 'Från vackra melodier till svängiga ackord.',
      // Bild på tangenter
      img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80',
      videos: [
        { title: 'Introduktion: Hitta på tangenterna', id: '71-cFCI-v14' },
        { title: 'Dina första ackord (C, F, G)', id: '4I_nY6t-XoA' },
        { title: 'Spela bastoner med vänster hand', id: 'vG-2q-k_OQ8' }
      ]
    },
    {
      id: 'guitar',
      name: 'Gitarr',
      desc: 'Lär dig ackord, riff och olika kompstilar.',
      // Bild på akustisk/elgitarr
      img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80',
      videos: [
        { title: 'Introduktion: Strängarna & Greppbrädan', id: 'CgVqX0a49HM' },
        { title: 'Nybörjarackord (Em, A, D)', id: 'BBz-Jyr23M4' },
        { title: 'Kompstil: Pop & Rock (8-delar)', id: 'p6Vz4qL0Y6I' }
      ]
    },
    {
      id: 'bass',
      name: 'Elbas',
      desc: 'Det tunga fundamentet. Coolast i bandet.',
      // NY BILD: Tydlig Elbas (tjocka strängar)
      img: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=600&q=80',
      videos: [
        { title: 'Introduktion till Elbas', id: 'PYU7tJ6s5V8' },
        { title: 'Spela med plektrum vs fingrar', id: 'D5h3q8T6r4k' },
        { title: 'Gångbas: Grunderna', id: 'I5X8x5z9w6w' }
      ]
    },
    {
      id: 'drums',
      name: 'Trummor',
      desc: 'Håll takten! Lär dig grundkomp och fills.',
      // Bild på trumset
      img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80',
      videos: [
        { title: 'Första trumkompet (Basic Rock)', id: 'htblwKyO4t4' },
        { title: 'Fills: Hur man gör övergångar', id: 'X7X2S_3wL0E' },
        { title: 'Hi-hat teknik', id: 'k9y4kXq2q9A' }
      ]
    }
  ];

  // --- 2. CSS (Samma snygga design som förut) ---
  const style = document.createElement('style');
  style.innerHTML = `
    .instrument-page {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      color: white;
    }
    .inst-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Lite smalare kort för att få plats med fler */
      gap: 30px;
      margin-top: 40px;
    }
    .inst-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
    .inst-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      border-color: #4facfe;
    }
    .inst-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .inst-content {
      padding: 20px;
      flex-grow: 1; /* Gör att alla kort blir lika höga */
    }
    .inst-content h3 {
      margin: 0 0 10px 0;
      color: #4facfe;
    }
    .library-badge {
      display: inline-block;
      margin-top: 15px;
      padding: 6px 12px;
      background: rgba(79, 172, 254, 0.2);
      color: #4facfe;
      border-radius: 20px;
      font-size: 0.8rem;
      border: 1px solid rgba(79, 172, 254, 0.3);
    }

    /* MODAL STYLING */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.95);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
    }
    .modal-overlay.active {
      opacity: 1;
      pointer-events: all;
    }
    .modal-content {
      position: relative;
      width: 95%;
      max-width: 1000px;
      height: 80vh;
      background: #111;
      border-radius: 12px;
      box-shadow: 0 0 30px rgba(79, 172, 254, 0.2);
      border: 1px solid #333;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .video-area {
      flex: 2;
      background: #000;
      position: relative;
    }
    .video-area iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .playlist-area {
      flex: 1;
      background: #1a1a1a;
      padding: 20px;
      overflow-y: auto;
      border-top: 1px solid #333;
    }
    .playlist-title {
      color: white;
      margin-top: 0;
      font-size: 1.2rem;
      border-bottom: 1px solid #444;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    .playlist-btn {
      display: block;
      width: 100%;
      text-align: left;
      padding: 12px;
      margin-bottom: 8px;
      background: #2a2a2a;
      color: #ccc;
      border: 1px solid transparent;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .playlist-btn:hover {
      background: #333;
      color: white;
    }
    .playlist-btn.active {
      background: #4facfe;
      color: #000;
      font-weight: bold;
    }
    .playlist-btn span {
      display: block;
      font-size: 0.8rem;
      opacity: 0.7;
      margin-top: 2px;
    }

    .close-modal {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 2rem;
      color: white;
      cursor: pointer;
      background: rgba(0,0,0,0.5);
      border-radius: 50%;
      width: 40px; height: 40px;
      line-height: 40px;
      text-align: center;
      z-index: 10;
    }

    /* Desktop layout: Video till vänster, lista till höger */
    @media (min-width: 800px) {
      .modal-content {
        flex-direction: row;
        height: 600px;
      }
      .playlist-area {
        width: 350px;
        flex: none;
        border-top: none;
        border-left: 1px solid #333;
      }
      .video-area {
        flex: 1;
      }
    }
  `;
  container.appendChild(style);

  // --- 3. RENDERING AV SIDAN ---
  const headerDiv = document.createElement('div');
  headerDiv.innerHTML = `
    <h1>Instrument & Lektioner 🎸🎹</h1>
    <p>Välj ett instrument för att se våra filmer om ackord, komp och teknik.</p>
  `;
  container.appendChild(headerDiv);

  const grid = document.createElement('div');
  grid.className = 'inst-grid';

  instruments.forEach(inst => {
    const card = document.createElement('div');
    card.className = 'inst-card';
    card.innerHTML = `
      <img src="${inst.img}" alt="${inst.name}" class="inst-img">
      <div class="inst-content">
        <h3>${inst.name}</h3>
        <p>${inst.desc}</p>
        <span class="library-badge">📚 ${inst.videos.length} lektioner</span>
      </div>
    `;

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(inst);
    });

    grid.appendChild(card);
  });
  container.appendChild(grid);

  // --- 4. MODAL ELEMENT ---
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="close-modal">✖</div>
      <div class="video-area">
        <iframe id="yt-player" src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="playlist-area">
        <h3 id="playlist-title" class="playlist-title">Lektioner</h3>
        <div id="playlist-container"></div>
      </div>
    </div>
  `;
  container.appendChild(modal);

  // --- 5. LOGIK ---
  const iframe = modal.querySelector('#yt-player');
  const playlistContainer = modal.querySelector('#playlist-container');
  const playlistTitleHeader = modal.querySelector('#playlist-title');
  const closeBtn = modal.querySelector('.close-modal');

  function openModal(instrument) {
    playlistTitleHeader.innerText = `Lektioner: ${instrument.name}`;
    playlistContainer.innerHTML = '';

    instrument.videos.forEach((video, index) => {
      const btn = document.createElement('button');
      btn.className = 'playlist-btn';
      btn.innerHTML = `
        ${index + 1}. ${video.title}
        <span>Klicka för att spela</span>
      `;

      btn.onclick = () => {
        iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
        modal.querySelectorAll('.playlist-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };

      playlistContainer.appendChild(btn);
    });

    // Starta första videon
    if (instrument.videos.length > 0) {
      const firstVideo = instrument.videos[0];
      iframe.src = `https://www.youtube.com/embed/${firstVideo.id}?autoplay=1`;
      playlistContainer.children[0].classList.add('active');
    }

    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => { iframe.src = ''; }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  return container;
}