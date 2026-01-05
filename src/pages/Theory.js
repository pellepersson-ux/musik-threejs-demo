export function Theory() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  const styles = `
    <style>
      .hidden-theory { display: none !important; }

      /* Behållare för allt innehåll */
      .theory-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        text-align: left; /* Vänsterjustera för läsbarhet */
      }

      /* Sektionsrubriker (T.ex. "Grunderna") */
      .category-title {
        font-family: 'Outfit', sans-serif;
        font-size: 1.8rem;
        color: #2c3e50;
        margin-top: 50px;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #eee;
      }
      
      /* Grid för korten */
      .theory-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
      }

      .theory-card {
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        border-top: 4px solid transparent; /* För färgkodning */
      }

      .theory-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }

      .theory-icon {
        font-size: 2.5rem;
        margin-bottom: 10px;
        display: block;
      }

      /* Färger för olika kategorier (valfritt) */
      .cat-grunderna { border-top-color: #3498db; } /* Blå */
      .cat-tonarter { border-top-color: #9b59b6; }  /* Lila */
      .cat-harmoni { border-top-color: #2ecc71; }   /* Grön */
      .cat-ovrigt { border-top-color: #f1c40f; }    /* Gul */

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
        max-height: 90vh; /* Max 90% av skärmhöjden */
        overflow-y: auto; /* SCROLLA om texten är lång */
        border-radius: 8px;
        position: relative;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      /* Responsiv Video */
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; 
        height: 0;
        background: #000;
        margin-bottom: 25px;
        border-radius: 5px;
        overflow: hidden;
      }
      .video-wrapper iframe {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;
      }

      /* Bilder i modalen */
      .theory-image {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 20px auto; /* Centrera */
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      }

      .close-theory {
        position: absolute; top: 15px; right: 20px;
        font-size: 2.5rem; cursor: pointer; color: #888;
      }
      .close-theory:hover { color: #e74c3c; }

      /* Textformatering i modalen */
      #lesson-text h3 { margin-top: 25px; color: #2c3e50; }
      #lesson-text p { line-height: 1.7; color: #444; margin-bottom: 15px; font-size: 1.05rem; }
      #lesson-text ul { margin-bottom: 20px; padding-left: 20px; }
      #lesson-text li { margin-bottom: 8px; color: #444; }

    </style>
  `;

  // --- 2. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail" style="text-align: center;">
      <h1>Musiklära & Teori 🎼</h1>
      <p style="max-width: 600px; margin: 0 auto 10px auto; color: #ccc;">
        Här hittar du allt från noternas grunder till harmonilära.
      </p>

      <div id="theory-main-container" class="theory-container">
        </div>

    </div>

    <div id="theory-modal" class="theory-modal-overlay hidden-theory">
      <div class="theory-content">
        <span class="close-theory">&times;</span>
        
        <div id="lesson-video-container" class="video-wrapper hidden-theory">
           <iframe id="lesson-iframe" src="" allowfullscreen></iframe>
        </div>

        <h2 id="lesson-title" style="margin-top:0;">Rubrik</h2>
        
        <img id="lesson-image" class="theory-image hidden-theory" src="" alt="Illustration">

        <div id="lesson-text">
           </div>
      </div>
    </div>
  `;

  // --- 3. DATA: DITT INNEHÅLL ---
  // Jag har delat in dina punkter i kategorier: 'basics', 'tonality', 'harmony', 'misc'

  const lessons = [
    // --- KATEGORI: GRUNDERNA ---
    {
      id: 1,
      category: 'basics',
      title: "Notlinjer, G-klav & Notnamn",
      icon: "🎼",
      description: "Vad heter tonerna och var sitter de?",
      text: `
        <h3>Notlinjerna</h3>
        <p>Noter skrivs på fem linjer. Vi räknar dem nerifrån och upp. Ju högre upp en not placeras, desto ljusare låter tonen.</p>
        
        <h3>G-klaven</h3>
        <p>I början av notraden sitter ofta en G-klav (diskantklav). Den snurrar sig runt den andra linjen nerifrån och markerar att tonen G sitter där.</p>
        
        <h3>Notnamnen (Stamtonerna)</h3>
        <p>Musiken använder sju grundtoner som upprepas: <b>C, D, E, F, G, A, B</b> (ibland kallad H i Sverige).</p>
      `,
      image: "/images/notnamn.jpg",
      youtubeId: null
    },
    {
      id: 2,
      category: 'basics',
      title: "Notvärden & Pauser",
      icon: "⏱️",
      description: "Helnot, halvnot och fjärdedelsnot.",
      text: `
        <p>Notvärdet bestämmer hur länge en ton ska klinga.</p>
        <ul>
          <li><b>Helnot:</b> En ring. Håller i 4 slag.</li>
          <li><b>Halvnot:</b> En ring med skaft. Håller i 2 slag.</li>
          <li><b>Fjärdedelsnot:</b> Ifylld ring med skaft. Håller i 1 slag.</li>
          <li><b>Åttondelsnot:</b> Har en flagga på skaftet. Håller i en halv (0,5) slag.</li>
        </ul>
      `,
      image: "/images/notvarden.jpg",
      youtubeId: null
    },
    {
      id: 3,
      category: 'basics',
      title: "Taktarter",
      icon: "1️⃣",
      description: "Vad betyder 4/4 egentligen?",
      text: `
        <p>I början av ett notstycke står ofta två siffror, t.ex. 4/4.</p>
        <ul>
            <li><b>Övre siffran:</b> Hur många slag det är i varje takt (t.ex. 4).</li>
            <li><b>Undre siffran:</b> Vilken not som räknas som ett slag (4 betyder fjärdedelsnot).</li>
        </ul>
        <p>I valstakt (3/4) räknar vi till tre: ETT-två-tre.</p>
      `,
      image: null,
      youtubeId: null
    },
    {
      id: 4,
      category: 'basics',
      title: "Oktaver",
      icon: "🎹",
      description: "Låga C, Nyckelhåls-C och Höga C.",
      text: "<p>Här kan du förklara oktavregistren...</p>",
      image: null,
      youtubeId: null
    },

    // --- KATEGORI: TONARTER & SKALOR ---
    {
      id: 5,
      category: 'tonality',
      title: "Tonart & Förtecken",
      icon: "#️⃣",
      description: "Vad gör kors (#) och b-förtecken (b)?",
      text: `
        <h3>Korsförtecken (#)</h3>
        <p>Ett kors höjer tonen ett halvt steg. F blir F# (Fiss).</p>
        <h3>B-förtecken (b)</h3>
        <p>Ett b sänker tonen ett halvt steg. B blir Bb (Bess).</p>
      `,
      image: null,
      youtubeId: null
    },
    {
      id: 6,
      category: 'tonality',
      title: "Kvintcirkeln",
      icon: "⭕",
      description: "Musikens karta över alla tonarter.",
      text: "<p>Här lägger du in en bild på kvintcirkeln och förklarar hur man läser den.</p>",
      image: "/images/kvintcirkeln.jpg",
      youtubeId: null
    },
    {
      id: 7,
      category: 'tonality',
      title: "Dur & Parallell Moll",
      icon: "😊",
      description: "Glada C-dur och sorgsna A-moll.",
      text: `
        <p>Varje Dur-tonart har en "släkting" som heter parallelltonart i Moll. De delar exakt samma toner och förtecken, men börjar på olika ställen.</p>
        <p>Exempel: C-dur och A-moll har inga svarta tangenter alls.</p>
      `,
      image: null,
      youtubeId: null
    },

    // --- KATEGORI: HARMONILÄRA ---
    {
      id: 8,
      category: 'harmony',
      title: "Ackord & Treklanger",
      icon: "🎸",
      description: "Hur man bygger Dur och Moll-ackord.",
      text: `
        <p>Ett ackord består oftast av minst tre toner som spelas samtidigt.</p>
        <h3>Dur-ackord (Glad)</h3>
        <p>Grundton + Stor ters + Liten ters.</p>
        <h3>Moll-ackord (Ledsen)</h3>
        <p>Grundton + Liten ters + Stor ters.</p>
      `,
      image: null,
      youtubeId: null
    },

    // --- KATEGORI: ÖVRIGT (Dina gamla kort) ---
    {
      id: 9,
      category: 'misc',
      title: "Lagar & Upphovsrätt",
      icon: "⚖️",
      description: "Om att använda andras musik.",
      text: "<p>Text om STIM och upphovsrätt...</p>",
      image: null,
      youtubeId: null
    },
    {
      id: 10,
      category: 'misc',
      title: "Musik i Media",
      icon: "📺",
      description: "Musikens påverkan i film och reklam.",
      text: "<p>Text om filmmusik...</p>",
      image: null,
      youtubeId: null
    }
  ];

  // DEFINIERA DINA RUBRIKER HÄR
  const categories = [
    { id: 'basics', title: 'Grunderna', class: 'cat-grunderna' },
    { id: 'tonality', title: 'Tonarter & Skalor', class: 'cat-tonarter' },
    { id: 'harmony', title: 'Harmonilära', class: 'cat-harmoni' },
    { id: 'misc', title: 'Samhälle & Media', class: 'cat-ovrigt' }
  ];

  // --- 4. LOGIK (Generera Sektioner och Kort) ---

  const mainContainer = section.querySelector('#theory-main-container');
  const modal = section.querySelector('#theory-modal');
  const closeBtn = section.querySelector('.close-theory');

  // Element i modalen
  const titleEl = section.querySelector('#lesson-title');
  const textEl = section.querySelector('#lesson-text');
  const imgEl = section.querySelector('#lesson-image');
  const videoContainer = section.querySelector('#lesson-video-container');
  const iframeEl = section.querySelector('#lesson-iframe');

  // Loopa igenom varje kategori och skapa en sektion
  categories.forEach(cat => {

    // 1. Hitta alla lektioner som tillhör denna kategori
    const catLessons = lessons.filter(l => l.category === cat.id);

    // Om inga lektioner finns i kategorin, hoppa över den
    if (catLessons.length === 0) return;

    // 2. Skapa HTML för rubriken
    const titleHTML = `<h2 class="category-title">${cat.title}</h2>`;

    // 3. Skapa HTML för grid-containern
    const gridDiv = document.createElement('div');
    gridDiv.className = 'theory-grid';

    // 4. Skapa korten för denna kategori
    catLessons.forEach(lesson => {
      const card = document.createElement('div');
      card.className = `theory-card ${cat.class}`; // Lägg till färgklass
      card.innerHTML = `
        <span class="theory-icon">${lesson.icon}</span>
        <h3>${lesson.title}</h3>
        <p style="font-size: 0.9rem; color:#666;">${lesson.description}</p>
      `;

      card.addEventListener('click', () => openLesson(lesson));
      gridDiv.appendChild(card);
    });

    // 5. Lägg in rubrik och grid i huvudcontainern (måste använda element, ej innerHTML += för att behålla events)
    const sectionWrapper = document.createElement('div');
    sectionWrapper.innerHTML = titleHTML;
    sectionWrapper.appendChild(gridDiv);
    mainContainer.appendChild(sectionWrapper);
  });

  // --- FUNKTIONER FÖR MODAL ---

  function openLesson(lesson) {
    titleEl.innerText = lesson.title;
    textEl.innerHTML = lesson.text;

    // Bild
    if (lesson.image) {
      imgEl.src = lesson.image;
      imgEl.classList.remove('hidden-theory');
    } else {
      imgEl.classList.add('hidden-theory');
    }

    // Video
    if (lesson.youtubeId) {
      iframeEl.src = `https://www.youtube.com/embed/${lesson.youtubeId}`;
      videoContainer.classList.remove('hidden-theory');
    } else {
      videoContainer.classList.add('hidden-theory');
      iframeEl.src = "";
    }

    modal.classList.remove('hidden-theory');
  }

  const closeModal = () => {
    modal.classList.add('hidden-theory');
    iframeEl.src = "";
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  return section;
}