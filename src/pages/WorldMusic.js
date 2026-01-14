import Globe from 'globe.gl';

export function WorldMusic() {
    const section = document.createElement('section');
    section.style.height = "100vh";
    section.style.background = "#000";
    section.style.position = "relative";
    section.style.overflow = "hidden";

    // --- 1. DIN SVENSKA DATA ---
    // Här lägger du bara in de länder du har specifik musikinfo om.
    // Alla andra länder får sitt engelska namn automatiskt.
    const musicData = {
        SE: { name: "Sverige", title: "Sverige: Folkmusik", text: "Fiol, nyckelharpa och polska.", lat: 62.0, lng: 15.0 },
        IE: { name: "Irland", title: "Irland: Folk", text: "Jigs, reels och pubkultur.", lat: 53.0, lng: -8.0 },
        BR: { name: "Brasilien", title: "Brasilien: Samba", text: "Karneval och Bossa Nova.", lat: -14.2, lng: -51.9 },
        IN: { name: "Indien", title: "Indien: Raga", text: "Sitar och Tabla.", lat: 20.5, lng: 78.9 },
        US: { name: "USA", title: "USA: Blues & Jazz", text: "Musikhistoriens vagga.", lat: 39.0, lng: -100.0 },
        ES: { name: "Spanien", title: "Spanien: Flamenco", text: "Gitarr och dans.", lat: 40.0, lng: -3.7 },
        CN: { name: "Kina", title: "Kina: Opera", text: "Pekingopera.", lat: 35.0, lng: 104.0 }
    };

    // --- 2. HTML STRUKTUR ---
    section.innerHTML = `
    <style>
      #globe-viz { width: 100%; height: 100%; }
      .overlay-title {
        position: absolute; top: 100px; left: 20px;
        color: #fff; font-family: 'Outfit', sans-serif; 
        pointer-events: none; z-index: 10;
      }
      .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85); z-index: 3000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.3s;
      }
      .modal-overlay.active { opacity: 1; pointer-events: all; }
      .modal-box {
        background: #fff; max-width: 500px; width: 100%;
        padding: 30px; border-radius: 12px; position: relative; color: #333;
      }
      .close-btn {
        position: absolute; top: 10px; right: 15px;
        font-size: 2rem; cursor: pointer; color: #333;
      }
      .hint-text {
        position: absolute; bottom: 20px; width: 100%; text-align: center;
        color: rgba(255,255,255,0.6); pointer-events: none;
      }
    </style>

    <div class="overlay-title">
      <h1>Världsmusik 🌏</h1>
      <p>Håll musen över länderna för att se namn!</p>
    </div>

    <div id="globe-viz"></div>
    <div class="hint-text">Laddar karta...</div>

    <div id="modal" class="modal-overlay">
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <h2 id="modal-title">Land</h2>
        <p id="modal-text">Fakta...</p>
      </div>
    </div>
  `;

    // --- 3. LOGIK ---
    setTimeout(() => {
        const vizDiv = section.querySelector('#globe-viz');
        if (!window.Globe) return;

        const world = Globe()
            (vizDiv)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')

            // Konfigurera länderna
            .polygonAltitude(0.06)
            .polygonCapColor(() => 'rgba(200, 200, 200, 0.6)')
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .onPolygonHover(hoverD => {
                world.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
                    .polygonCapColor(d => d === hoverD ? '#3498db' : 'rgba(200, 200, 200, 0.6)');
            })

            // --- HÄR ÄR FIXEN FÖR NAMNEN ---
            .polygonLabel(d => {
                // d = hela dataobjektet för landet
                // d.properties = där infon ligger i GeoJSON-filen

                const code = d.properties.ISO_A2; // Landskod (t.ex SE)
                const geoJsonName = d.properties.ADMIN || d.properties.NAME; // Namn från filen (t.ex Sweden)

                // 1. Kolla om vi har ett svenskt namn i vår lista
                let displayName = geoJsonName;
                if (musicData[code]) {
                    displayName = musicData[code].name;
                }

                // 2. Returnera HTML-rutan
                return `
                    <div style="background: #333; color: #fff; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;">
                      <b>${displayName}</b>
                    </div>
                `;
            })

            .onPolygonClick(d => {
                const code = d.properties.ISO_A2;
                if (musicData[code]) {
                    showModal(musicData[code]);
                }
            });

        // Hämta kartdata som garanterat har 'ADMIN' och 'ISO_A2'
        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(countries => {
                world.polygonsData(countries.features);

                // Rotera långsamt
                world.controls().autoRotate = true;
                world.controls().autoRotateSpeed = 0.5;
            });

        // Modal (Popup) hantering
        const modal = section.querySelector('#modal');
        const closeBtn = section.querySelector('.close-btn');
        const showModal = (data) => {
            section.querySelector('#modal-title').textContent = data.title;
            section.querySelector('#modal-text').textContent = data.text;
            modal.classList.add('active');
        };
        closeBtn.onclick = () => modal.classList.remove('active');
        modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };

    }, 100);

    return section;
}