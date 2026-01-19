import Globe from 'globe.gl';

export function WorldMusic() {
  const section = document.createElement('section');
  section.style.height = "100vh";
  section.style.background = "#000";
  section.style.position = "relative";
  section.style.overflow = "hidden";

  // --- DIN DATA (Dessa koder MÅSTE matcha ISO_A2 i filen) ---
  const musicData = {
    SE: { name: "Sverige", title: "Sverige: Folkmusik", text: "Fiol, nyckelharpa och polska." },
    IE: { name: "Irland", title: "Irland: Folk", text: "Jigs, reels och pubkultur." },
    BR: { name: "Brasilien", title: "Brasilien: Samba", text: "Karneval och Bossa Nova." },
    IN: { name: "Indien", title: "Indien: Raga", text: "Sitar och Tabla." },
    US: { name: "USA", title: "USA: Blues & Jazz", text: "Musikhistoriens vagga." },
    ES: { name: "Spanien", title: "Spanien: Flamenco", text: "Gitarr och dans." },
    CN: { name: "Kina", title: "Kina: Opera", text: "Pekingopera." }
  };

  // --- HTML ---
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
    </style>

    <div class="overlay-title">
      <h1>Världsmusik 🌏</h1>
      <p>Håll musen över länderna!</p>
    </div>

    <div id="globe-viz"></div>

    <div id="modal" class="modal-overlay">
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <h2 id="modal-title">Land</h2>
        <p id="modal-text">Fakta...</p>
      </div>
    </div>
  `;

  setTimeout(() => {
    const vizDiv = section.querySelector('#globe-viz');
    if (!window.Globe) return;

    const world = Globe()
      (vizDiv)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .polygonAltitude(0.06)
      .polygonCapColor(() => 'rgba(200, 200, 200, 0.6)')
      .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')

      // --- HÄR ÄR FIXEN ---
      .polygonLabel(d => {
        // Vi hämtar datan från 'd.properties'
        // 'ADMIN' är standardnamnet i denna fil
        // 'ISO_A2' är landskoden (SE, US, etc)
        const p = d.properties;

        // Namn från filen (fallback om inget annat finns)
        let labelName = p.ADMIN || "Okänt land";

        // Har vi ett svenskt namn i vår lista? Använd det!
        if (p.ISO_A2 && musicData[p.ISO_A2]) {
          labelName = musicData[p.ISO_A2].name;
        }

        return `
                    <div style="background: #333; color: #fff; padding: 5px 10px; border-radius: 4px; font-family: sans-serif;">
                       <b>${labelName}</b>
                    </div>
                `;
      })

      .onPolygonHover(hoverD => {
        world
          .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
          .polygonCapColor(d => d === hoverD ? '#3498db' : 'rgba(200, 200, 200, 0.6)');
      })
      .onPolygonClick(d => {
        // Klick-funktion
        if (d.properties.ISO_A2 && musicData[d.properties.ISO_A2]) {
          showModal(musicData[d.properties.ISO_A2]);
        }
      });

    // Hämta den korrekta kartfilen (GeoJSON) som innehåller ADMIN och ISO_A2
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(countries => {
        world.polygonsData(countries.features);
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.5;
      });

    // Modal hantering
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