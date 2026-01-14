import Globe from 'globe.gl';

export function WorldMusic() {
    const section = document.createElement('section');
    section.style.height = "100vh";
    section.style.background = "#000";
    section.style.position = "relative";
    section.style.overflow = "hidden";

    // --- 1. DATA: Nu med KOORDINATER (lat/lng) för texten ---
    const musicData = {
        SE: {
            title: "Sverige: Folkmusik",
            text: "Fiol, nyckelharpa och dansen 'polska'.",
            lat: 62.0, lng: 15.0 // Koordinater för texten
        },
        IE: {
            title: "Irland: Jigs & Reels",
            text: "Snabba fioler, tin whistle och pubkultur.",
            lat: 53.0, lng: -8.0
        },
        BR: {
            title: "Brasilien: Samba",
            text: "Rytmisk karnevalsmusik och Bossa Nova.",
            lat: -14.2, lng: -51.9
        },
        IN: {
            title: "Indien: Raga",
            text: "Sitar, Tabla och meditativa toner.",
            lat: 20.5, lng: 78.9
        },
        US: {
            title: "USA: Blues & Jazz",
            text: "Rötterna till modern pop och rock.",
            lat: 39.0, lng: -100.0
        },
        ES: {
            title: "Spanien: Flamenco",
            text: "Passionerad gitarr, sång och dans.",
            lat: 40.0, lng: -3.7
        },
        CN: {
            title: "Kina: Opera",
            text: "Pekingopera och pentatoniska skalor.",
            lat: 35.0, lng: 104.0
        }
    };

    // Skapa en lista av länderna för att kunna rita ut texten
    // Vi gör om objektet ovan till en array
    const labels = Object.keys(musicData).map(key => ({
        iso: key,
        ...musicData[key]
    }));

    // --- 2. HTML STRUKTUR ---
    section.innerHTML = `
    <style>
      #globe-viz { width: 100%; height: 100%; }
      .overlay-title {
        position: absolute; top: 100px; left: 20px; /* Flyttad ner lite pga menyn */
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
        padding: 30px; border-radius: 12px; position: relative;
      }
      .close-btn {
        position: absolute; top: 10px; right: 15px;
        font-size: 2rem; cursor: pointer;
      }
      .hint-text {
        position: absolute; bottom: 20px; width: 100%; text-align: center;
        color: rgba(255,255,255,0.6); pointer-events: none;
      }
    </style>

    <div class="overlay-title">
      <h1>Världsmusik 🌏</h1>
      <p>Snurra på jorden och klicka på texterna!</p>
    </div>

    <div id="globe-viz"></div>
    <div class="hint-text">Laddar 3D-karta...</div>

    <div id="modal" class="modal-overlay">
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <h2 id="modal-title">Land</h2>
        <p id="modal-text">Fakta...</p>
      </div>
    </div>
  `;

    // --- 3. INITIERA GLOBEN ---
    // Vi använder setTimeout för att vara säkra på att div:en finns
    setTimeout(() => {
        const vizDiv = section.querySelector('#globe-viz');

        // Hämta biblioteken om de inte finns (Säkerhetsåtgärd)
        if (!window.Globe) return;

        const world = Globe()
            (vizDiv)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')

            // --- HÄR ÄR NYHETEN: TEXT PÅ GLOBEN ---
            .labelsData(labels)
            .labelLat(d => d.lat)
            .labelLng(d => d.lng)
            .labelText(d => d.iso) // Visar landskoden (t.ex. "SE"). Ändra till d.title om du vill ha hela namnet!
            .labelSize(1.5)
            .labelDotRadius(0.5)
            .labelColor(() => '#ffcb77') // Gulaktig text
            .labelResolution(2)

            // Hantera klick på länder
            .polygonsData(null)
            .polygonAltitude(0.06)
            .polygonCapColor(() => 'rgba(200, 200, 200, 0.6)')
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .polygonLabel(({ properties: d }) => `
                <div style="background: #333; color: #fff; padding: 5px;">
                  <b>${d.NAME}</b>
                </div>
            `)
            .onPolygonClick(({ properties: d }) => {
                if (musicData[d.ISO_A2]) showModal(musicData[d.ISO_A2]);
            });

        // Ladda kartdata
        fetch('//unpkg.com/world-atlas/countries-110m.json').then(res => res.json()).then(data => {
            const countries = window.topojson.feature(data, data.objects.countries).features;
            world.polygonsData(countries);
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.5;
        });

        // Modal-logik
        const modal = section.querySelector('#modal');
        const closeBtn = section.querySelector('.close-btn');

        function showModal(data) {
            section.querySelector('#modal-title').textContent = data.title;
            section.querySelector('#modal-text').textContent = data.text;
            modal.classList.add('active');
        }
        closeBtn.onclick = () => modal.classList.remove('active');
        modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };

    }, 100);

    return section;
}