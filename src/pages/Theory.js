export function Theory() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  // Här lägger vi in all design för korten och modalen (fönstret som öppnas)
  const styles = `
    <style>
      .hidden-theory { display: none !important; }

      /* Kort-Grid för ämnen */
      .theory-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .theory-card {
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        border-bottom: 4px solid #3498db; /* Blå accent */
      }

      .theory-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }

      .theory-icon {
        font-size: 3rem;
        margin-bottom: 15px;
        display: block;
      }

      /* --- MODAL (Lektionen) --- */
      .theory-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 2000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px;
      }

      .theory-content {
        background: #fff;
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto; /* Scrolla om innehållet är långt */
        border-radius: 8px;
        position: relative;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      /* Responsiv Video-container (16:9 format) */
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 ratio */
        height: 0;
        background: #000;
        margin-bottom: 20px;
        border-radius: 5px;
        overflow: hidden;
      }
      
      .video-wrapper iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        border: 0;
      }

      /* Bilder (Noter) */
      .theory-image {
        max-width: 100%;
        height: auto;
        margin: 20px 0;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      }

      .close-theory {
        position: absolute;
        top: 15px; right: 20px;
        font-size: 2rem;
        cursor: pointer;
        color: #333;
        transition: color 0.2s;
      }
      .close-theory:hover { color: #e74c3c; }

      h2 { color: #2c3e50; margin-bottom: 10px; }
      p { line-height: 1.6; color: #555; margin-bottom: 15px; }
      ul { text-align: left; margin-bottom: 15px; color: #555; }
      li { margin-bottom: 5px; }

    </style>
  `;

  // --- 2. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail" style="text-align: center;">
      <h1>Teori & Samhälle 🎼</h1>
      <p style="max-width: 600px; margin: 0 auto 40px auto; color: #ccc;">
        Musikens byggstenar, instruktioner och hur musiken påverkar oss.
      </p>

      <div id="theory-grid-container" class="theory-grid"></div>

    </div>

    <div id="theory-modal" class="theory-modal-overlay hidden-theory">
      <div class="theory-content">
        <span class="close-theory">&times;</span>
        
        <div id="lesson-video-container" class="video-wrapper hidden-theory">
           <iframe id="lesson-iframe" src="" allowfullscreen></iframe>
        </div>

        <h2 id="lesson-title">Rubrik</h2>
        
        <img id="lesson-image" class="theory-image hidden-theory" src="" alt="Teori illustration">

        <div id="lesson-text">Textinnehåll...</div>
      </div>
    </div>
  `;

  // --- 3. DATA & INNEHÅLL (Dina lektioner) ---
  const lessons = [
    {
      id: 1,
      title: "Grundläggande Notvärden",
      icon: "🎵",
      description: "Lär dig skillnaden på helnot, halvnot och fjärdedelsnot.",
      text: `
        <p>Noter visar hur länge en ton ska spelas. Här är de vanligaste:</p>
        <ul>
            <li><b>Helnot:</b> 4 slag (en hel takt i 4/4)</li>
            <li><b>Halvnot:</b> 2 slag</li>
            <li><b>Fjärdedelsnot:</b> 1 slag</li>
        </ul>
        <p>Bilden nedan visar hur noterna ser ut jämfört med pauser.</p>
      `,
      image: "/images/notvarden.jpg", // Byt till din bildfil eller sätt till null
      youtubeId: null
    },
    {
      id: 2,
      title: "Lagar & Upphovsrätt",
      icon: "⚖️",
      description: "Vad får man egentligen göra med andras musik?",
      text: `
        <p>Upphovsrättslagen skyddar musik, texter och konst. Det betyder att du inte får använda någon annans låt i din video utan tillstånd, om den inte är "Royalty Free".</p>
        <p>Detta är viktigt för dig som vill lägga upp covers på YouTube eller använda musik i skolprojekt.</p>
      `,
      image: null,
      youtubeId: null
    },
    {
      id: 3,
      title: "Instruktion: Stämma gitarren",
      icon: "🎸",
      description: "En snabb videoguide hur du stämmer rätt.",
      text: "<p>Att ha en stämd gitarr är A och O. Följ videon för att stämma strängarna E A D G B E.</p>",
      image: null,
      youtubeId: "M0g8q6lY3Xk" // Exempel-ID (byt till din video)
    },
    {
      id: 4,
      title: "Musik i Media",
      icon: "📺",
      description: "Hur musik påverkar oss i film och reklam.",
      text: `
        <p>Musiken i en skräckfilm kan få oss att känna rädsla innan vi ens sett monstret. I reklam används musik för att få oss att köpa saker.</p>
        <p>Här analyserar vi hur olika instrument skapar olika känslor.</p>
      `,
      image: null,
      youtubeId: null
    }
  ];

  // --- 4. LOGIK (Få allt att fungera) ---

  const gridContainer = section.querySelector('#theory-grid-container');
  const modal = section.querySelector('#theory-modal');
  const closeBtn = section.querySelector('.close-theory');

  // Element i modalen
  const titleEl = section.querySelector('#lesson-title');
  const textEl = section.querySelector('#lesson-text');
  const imgEl = section.querySelector('#lesson-image');
  const videoContainer = section.querySelector('#lesson-video-container');
  const iframeEl = section.querySelector('#lesson-iframe');

  // Generera korten
  lessons.forEach(lesson => {
    const card = document.createElement('div');
    card.className = 'theory-card';
    card.innerHTML = `
      <span class="theory-icon">${lesson.icon}</span>
      <h3>${lesson.title}</h3>
      <p style="font-size: 0.9rem;">${lesson.description}</p>
    `;

    // Klick på kort öppnar modal
    card.addEventListener('click', () => {
      openLesson(lesson);
    });

    gridContainer.appendChild(card);
  });

  // Funktion: Öppna lektion
  function openLesson(lesson) {
    titleEl.innerText = lesson.title;
    textEl.innerHTML = lesson.text;

    // Hantera Bild
    if (lesson.image) {
      imgEl.src = lesson.image;
      imgEl.classList.remove('hidden-theory');
    } else {
      imgEl.classList.add('hidden-theory');
    }

    // Hantera Video
    if (lesson.youtubeId) {
      iframeEl.src = `https://www.youtube.com/embed/${lesson.youtubeId}`;
      videoContainer.classList.remove('hidden-theory');
    } else {
      videoContainer.classList.add('hidden-theory');
      iframeEl.src = "";
    }

    modal.classList.remove('hidden-theory');
  }

  // Stäng modal
  const closeModal = () => {
    modal.classList.add('hidden-theory');
    iframeEl.src = ""; // Stänger av ljudet
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  return section;
}