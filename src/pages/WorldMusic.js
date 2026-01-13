export function WorldMusic() {
    const section = document.createElement('section');
    section.style.height = "100vh"; // Full höjd
    section.style.background = "#000"; // Rymd-svart bakgrund
    section.style.position = "relative";
    section.style.overflow = "hidden";

    // --- 1. DATA: Här lägger vi in faktan om musiken ---
    // Nyckeln är landets "ISO-kod" (två bokstäver). 
    // SE = Sverige, BR = Brasilien, US = USA, etc.
    const musicData = {
        SE: {
            title: "Sverige: Folkmusik & Polska",
            text: "Svensk folkmusik kännetecknas ofta av fiol och nyckelharpa. En vanlig dansform är 'polskan' (tretakt), som har en speciell rytm där man betonar första och tredje slaget. Vallmusik (kulning) användes förr för att locka på djur i skogen."
        },
        IE: {
            title: "Irland: Jigs & Reels",
            text: "Irländsk folkmusik är känd för sitt snabba tempo och instrument som fiol, tin whistle (flöjt), bodhrán (trumma) och uilleann pipes (säckpipa). Man spelar ofta på pubar i så kallade 'sessions'."
        },
        BR: {
            title: "Brasilien: Samba & Bossa Nova",
            text: "Brasiliansk musik är rytmisk och full av liv. Samban har sina rötter i afrikanska trummor och spelas ofta under karnevalen. Bossa Nova är en lugnare, jazzigare variant som blev världskänd på 1960-talet."
        },
        IN: {
            title: "Indien: Raga & Tala",
            text: "Indisk klassisk musik bygger på 'Raga' (melodiska ramverk) och 'Tala' (rytmiska cykler). Instrument som Sitar och Tabla är centrala. Musiken är ofta improviserad och djupt andlig."
        },
        US: {
            title: "USA: Blues & Jazz",
            text: "USA är smältdegeln för många genrer. Bluesen föddes i söderns plantager och lade grunden för Jazz, Rock och R&B. Jazzen handlar mycket om improvisation och sväng (swing)."
        },
        ES: {
            title: "Spanien: Flamenco",
            text: "Flamenco är en passionerad konstform från Andalusien som kombinerar sång (cante), dans (baile) och gitarrspel (toque). Det är känt för sina dramatiska gester och stampande fötter."
        },
        CN: {
            title: "Kina: Opera & Tradition",
            text: "Kinesisk musik använder ofta en pentatonisk skala (fem toner). Pekingoperan är en känd konstform som blandar sång, akrobatik och kampsport med färgstarka dräkter."
        }
        // Du kan lägga till fler länder här senare!
    };

    // --- 2. HTML STRUKTUR (Modalen återanvänds) ---
    section.innerHTML = `
    <style>
      #globe-viz { width: 100%; height: 100%; }
      
      .overlay-title {
        position: absolute; top: 20px; left: 20px;
        color: #fff; font-family: 'Outfit', sans-serif; 
        text-shadow: 0 2px 4px rgba(0,0,0,0.8); pointer-events: none;
      }

      /* Modal (Samma stil som Historien för enhetlighet) */
      .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85); z-index: 3000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px;
        opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
      }
      .modal-overlay.active { opacity: 1; pointer-events: all; }

      .modal-box {
        background: #fff; max-width: 500px; width: 100%;
        padding: 30px; border-radius: 12px; position: relative;
        text-align: left; box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
      }
      .modal-box h2 { color: #e67e22; margin-bottom: 15px; font-family: 'Outfit', sans-serif;}
      .modal-box p { color: #333; line-height: 1.6; }
      .close-btn {
        position: absolute; top: 10px; right: 15px;
        font-size: 2rem; cursor: pointer; color: #888;
      }
      .close-btn:hover { color: #e74c3c; }

      .hint-text {
        position: absolute; bottom: 20px; width: 100%; text-align: center;
        color: rgba(255,255,255,0.6); pointer-events: none; font-style: italic;
      }
    </style>

    <div class="overlay-title">
      <h1>Världsmusik 🌏</h1>
      <p>Snurra på jorden och klicka på ett land.</p>
    </div>

    <div id="globe-viz"></div>
    <div class="hint-text">Laddar 3D-karta... (Kräver internet)</div>

    <div id="modal" class="modal-overlay">
      <div class="modal-box">
        <span class="close-btn">&times;</span>
        <h2 id="modal-title">Land</h2>
        <p id="modal-text">Fakta...</p>
      </div>
    </div>
  `;

    // --- 3. LOGIK: Ladda in 3D-biblioteket dynamiskt ---
    // Vi kollar om biblioteket redan finns, annars hämtar vi det.
    if (!window.Globe) {
        const script = document.createElement('script');
        script.src = '//unpkg.com/globe.gl';
        script.onload = initGlobe;
        document.head.appendChild(script);
    } else {
        // Vänta lite så DOM hinner ritas upp
        setTimeout(initGlobe, 100);
    }

    function initGlobe() {
        const vizDiv = section.querySelector('#globe-viz');
        const hint = section.querySelector('.hint-text');
        hint.textContent = "Klicka och dra för att rotera. Scrolla för att zooma.";

        // Skapa Globen
        const world = Globe()
            (vizDiv)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg') // Natt-tema
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .lineHoverPrecision(0)

            // Hämta landsgränser (GeoJSON) från en öppen källa
            .polygonsData(null) // Vi laddar data nedan
            .polygonAltitude(0.06)
            .polygonCapColor(() => 'rgba(200, 200, 200, 0.6)') // Färg på länder
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .polygonStrokeColor(() => '#111')
            .polygonLabel(({ properties: d }) => `
        <div style="background: #333; color: #fff; padding: 4px 8px; border-radius: 4px;">
          <b>${d.NAME}</b> <br />
          ${musicData[d.ISO_A2] ? '<span style="color:#e67e22">🎵 Klicka för musikfakta</span>' : ''}
        </div>
      `)
            .onPolygonClick(({ properties: d }) => {
                const countryCode = d.ISO_A2; // T.ex. "SE"
                if (musicData[countryCode]) {
                    showModal(musicData[countryCode]);
                } else {
                    // Valfritt: Visa meddelande om inget data finns
                    // alert(`Ingen musikdata inlagd för ${d.NAME} än.`);
                }
            })
            .onPolygonHover(hoverD => {
                world
                    .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
                    .polygonCapColor(d => d === hoverD ? '#e67e22' : 'rgba(200, 200, 200, 0.6)');
            });

        // Ladda GeoJSON data (Kartan)
        fetch('//unpkg.com/world-atlas/countries-110m.json').then(res => res.json()).then(data => {
            const countries = window.topojson.feature(data, data.objects.countries).features;
            world.polygonsData(countries);

            // Rotera automatiskt sakta tills användaren klickar
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.5;
        });

        // Hantera fönsterstorlek
        window.addEventListener('resize', () => {
            world.width([window.innerWidth]);
            world.height([window.innerHeight]);
        });
    }

    // --- 4. MODAL FUNKTIONER ---
    const modal = section.querySelector('#modal');
    const closeBtn = section.querySelector('.close-btn');
    const mTitle = section.querySelector('#modal-title');
    const mText = section.querySelector('#modal-text');

    function showModal(data) {
        mTitle.textContent = data.title;
        mText.textContent = data.text;
        modal.classList.add('active');
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Stäng om man klickar utanför rutan
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // Vi behöver också ladda TopoJSON för att läsa kartdatan (hjälp-bibliotek)
    if (!window.topojson) {
        const s2 = document.createElement('script');
        s2.src = '//unpkg.com/topojson-client';
        document.head.appendChild(s2);
    }

    return section;
}