import Globe from 'globe.gl';

export function WorldMusic() {
    const section = document.createElement('section');
    section.style.height = "100vh";
    section.style.background = "#000"; // Svart rymd-bakgrund
    section.style.position = "relative";
    section.style.overflow = "hidden";

    // --- 1. DIN DATA (Koppla ISO-kod till Text) ---
    // Här lägger du in länderna. Koderna (SE, BR, US) måste matcha ISO_A2 standard.
    const musicData = {
        SE: {
            name: "Sverige",
            genre: "Nordisk Folkmusik",
            text: "Svensk folkmusik kännetecknas av fiol, nyckelharpa och dansrytmer som polska. Musiken har ofta en melankoliskt men drivande karaktär och har rötter i bondesamhällets festligheter."
        },
        IE: {
            name: "Irland",
            genre: "Irish Folk",
            text: "Irland är känt för sina pub-sessions med jigs och reels. Instrument som fiol (fiddle), tin whistle och bodhrán (trumma) skapar en snabb och glad musik som spridits över hela världen."
        },
        BR: {
            name: "Brasilien",
            genre: "Samba & Bossa Nova",
            text: "Samba är Brasiliens hjärta, född ur afro-brasilianska rytmer och karnevalskultur. Bossa Nova är den mjukare, jazziga kusinen med komplexa gitarrackord."
        },
        US: {
            name: "USA",
            genre: "Blues, Jazz & Country",
            text: "USA är en smältdegel. Från söderns bomullsfält föddes Bluesen, som lade grunden för nästan all modern popmusik. I New Orleans föddes Jazzen och i Appalacherna Countryn."
        },
        ES: {
            name: "Spanien",
            genre: "Flamenco",
            text: "Flamenco är en passionerad konstform från Andalusien som blandar sång (cante), gitarr (toque) och dans (baile). Den är intensiv, rytmisk och full av känslor."
        },
        IN: {
            name: "Indien",
            genre: "Klassisk Raga",
            text: "Indisk musik bygger på Ragas (melodiska ramverk) och Talas (rytmiska cykler). Instrument som Sitar och Tabla skapar meditativa och tekniskt avancerade ljudlandskap."
        },
        CU: {
            name: "Kuba",
            genre: "Salsa & Son",
            text: "Kubansk musik är motor för karibiska rytmer. Här blandas spanska gitarrer med afrikanska trummor. Son och Salsa inbjuder till dans och glädje."
        }
    };

    // --- 2. HTML för sidan + Modal (Informationsrutan) ---
    section.innerHTML = `
    <style>
      /* Titel överst */
      .overlay-title {
        position: absolute; top: 80px; left: 30px;
        color: #fff; font-family: 'Outfit', sans-serif; 
        pointer-events: none; z-index: 10;
        text-shadow: 0 2px 4px rgba(0,0,0,0.8);
      }
      .overlay-title h1 { margin: 0; font-size: 3rem; color: #4facfe; }
      
      /* Modal (Popup-rutan) */
      .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); z-index: 2000;
        display: flex; justify-content: center; align-items: center;
        opacity: 0; pointer-events: none; transition: opacity 0.3s;
      }
      .modal-overlay.active { opacity: 1; pointer-events: all; }
      
      .modal-box {
        background: #fff; width: 90%; max-width: 500px;
        padding: 30px; border-radius: 12px; position: relative;
        text-align: center; color: #333;
        box-shadow: 0 0 30px rgba(79, 172, 254, 0.5);
        transform: scale(0.8); transition: transform 0.3s;
      }
      .modal-overlay.active .modal-box { transform: scale(1); }

      .close-btn {
        position: absolute; top: 10px; right: 15px;
        font-size: 2rem; cursor: pointer; color: #555;
      }
      .close-btn:hover { color: #e74c3c; }
    </style>

    <div class="overlay-title">
      <h1>Världsmusik 🌏</h1>
      <p>Snurra på jorden och klicka på de färgade länderna!</p>
    </div>

    <div id="globe-viz" style="width:100%; height:100%;"></div>

    <div id="music-modal" class="modal-overlay">
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <h2 id="modal-country" style="color:#2c3e50; margin-top:0;">Land</h2>
        <h3 id="modal-genre" style="color:#3498db;">Genre</h3>
        <p id="modal-text" style="line-height:1.6; color:#555;">Info...</p>
      </div>
    </div>
  `;

    // --- 3. LOGIK FÖR GLOBEN ---
    setTimeout(() => {
        const vizDiv = section.querySelector('#globe-viz');

        // Säkerhetskoll om biblioteket inte laddats
        if (!window.Globe && !Globe) {
            vizDiv.innerHTML = "<p style='color:white; text-align:center; padding-top:20vh;'>Kunde inte ladda kartan. Se till att script-taggen finns i index.html</p>";
            return;
        }

        // Initiera globen (Använd window.Globe om du kör via script-tagg, annars Globe från import)
        const world = (window.Globe ? window.Globe() : Globe())
            (vizDiv)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .width(window.innerWidth)
            .height(window.innerHeight)

            // -- A. Etiketter (Namn när man hovrar) --
            .polygonLabel(d => {
                const code = d.properties.ISO_A2; // Hämta landskod (t.ex. SE)
                const data = musicData[code];

                if (data) {
                    // Om vi har data om landet, visa det snyggt
                    return `
                <div style="background: rgba(255, 255, 255, 0.9); color: #333; padding: 5px 10px; border-radius: 4px; font-family: sans-serif;">
                    <b>🎵 ${data.name}</b>: ${data.genre}
                </div>
             `;
                }
                // Annars visa bara landets namn
                return `
            <div style="background: #333; color: #ccc; padding: 4px 8px; border-radius: 4px; font-family: sans-serif; font-size: 12px;">
                ${d.properties.ADMIN}
            </div>
         `;
            })

            // -- B. Färgkodning --
            .polygonCapColor(d => {
                // Om landet finns i vår musicData-lista, gör det blått, annars grått/genomskinligt
                return musicData[d.properties.ISO_A2] ? 'rgba(79, 172, 254, 0.6)' : 'rgba(200, 200, 200, 0.1)';
            })
            .polygonSideColor(() => 'rgba(0, 50, 0, 0.05)')
            .polygonStrokeColor(() => '#111')

            // -- C. Hover-effekt --
            .onPolygonHover(hoverD => {
                world
                    .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
                    .polygonCapColor(d => {
                        // Behåll specialfärg om det är ett musik-land
                        if (d === hoverD) return '#3498db';
                        return musicData[d.properties.ISO_A2] ? 'rgba(79, 172, 254, 0.6)' : 'rgba(200, 200, 200, 0.1)';
                    });
            })

            // -- D. Klick-funktion (Öppna modal) --
            .onPolygonClick(d => {
                const code = d.properties.ISO_A2;
                const data = musicData[code];

                if (data) {
                    // Stanna rotationen när man läser
                    world.controls().autoRotate = false;

                    // Fyll modalen med info
                    section.querySelector('#modal-country').textContent = data.name;
                    section.querySelector('#modal-genre').textContent = data.genre;
                    section.querySelector('#modal-text').textContent = data.text;

                    // Visa modalen
                    section.querySelector('#music-modal').classList.add('active');
                }
            });

        // Ladda Geometrin (Ländernas former)
        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(countries => {
                world.polygonsData(countries.features);

                // Sätt startposition
                world.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
                world.controls().autoRotate = true;
                world.controls().autoRotateSpeed = 0.5;
            });

        // -- Hantera Modal-stängning --
        const modal = section.querySelector('#music-modal');
        const closeBtn = section.querySelector('.close-btn');

        const closeModal = () => {
            modal.classList.remove('active');
            world.controls().autoRotate = true; // Starta rotation igen
        };

        closeBtn.onclick = closeModal;
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };

    }, 100);

    return section;
}