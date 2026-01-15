export function Instrument() {
  const container = document.createElement('div');
  container.className = 'instrument-page';

  // --- 1. DATA: Instrumentlistan (Nu utan Fiol) ---
  const instruments = [
    {
      id: 'piano',
      name: 'Piano',
      desc: 'Kungen av instrument. 88 tangenter av möjligheter.',
      img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80',
      videoId: '71-cFCI-v14'
    },
    {
      id: 'guitar',
      name: 'Gitarr',
      desc: 'Från lägereld till rockscen. Strängar som berör.',
      img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80',
      videoId: 'CgVqX0a49HM'
    },
    {
      id: 'drums',
      name: 'Trummor',
      desc: 'Bandets hjärta. Det är du som sätter pulsen.',
      img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80',
      videoId: 'htblwKyO4t4'
    },
    {
      id: 'sax',
      name: 'Saxofon',
      desc: 'Jazzens själ. Ett blåsinstrument med attityd.',
      img: 'https://images.unsplash.com/photo-1573871666457-7c7329118cf9?auto=format&fit=crop&w=600&q=80',
      videoId: '3s25y8VjD2c'
    },
    {
      id: 'bass',
      name: 'Elbas',
      desc: 'Det tunga fundamentet. Coolast i bandet.',
      img: 'https://images.unsplash.com/photo-1563983389645-09c3149479b6?auto=format&fit=crop&w=600&q=80',
      videoId: 'PYU7tJ6s5V8'
    }
  ];

  // --- 2. LAYOUT & CSS ---
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    }
    .inst-content h3 {
      margin: 0 0 10px 0;
      color: #4facfe;
    }
    .play-btn {
      margin-top: 15px;
      display: inline-block;
      padding: 8px 16px;
      background: #4facfe;
      color: #000;
      border-radius: 20px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.8rem;
    }

    /* MODAL (VIDEOSPELAREN) */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.9);
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
      width: 90%;
      max-width: 800px;
      background: #000;
      border-radius: 10px;
      box-shadow: 0 0 30px rgba(79, 172, 254, 0.3);
    }
    .close-modal {
      position: absolute;
      top: -40px;
      right: 0;
      font-size: 2rem;
      color: white;
      cursor: pointer;
      background: none;
      border: none;
    }
    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      overflow: hidden;
      border-radius: 10px;
    }
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  container.appendChild(style);

  // --- 3. HTML STRUKTUR ---
  const headerDiv = document.createElement('div');
  headerDiv.innerHTML = `
    <h1>Upptäck Instrumenten 🎹🎸</h1>
    <p>Klicka på ett instrument för att se och höra hur det låter!</p>
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
        <span class="play-btn">▶ Spela video</span>
      </div>
    `;

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(inst.videoId);
    });

    grid.appendChild(card);
  });
  container.appendChild(grid);

  // --- 4. MODAL & LOGIK ---
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">✖</button>
      <div class="video-wrapper">
        <iframe id="yt-player" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  `;
  container.appendChild(modal);

  const iframe = modal.querySelector('#yt-player');
  const closeBtn = modal.querySelector('.close-modal');

  function openModal(videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
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