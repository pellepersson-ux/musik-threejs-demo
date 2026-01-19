import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeGlobe from 'three-globe'; // VIKTIGT: Detta paket krävs för länderna

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-music-page';
  container.style.width = '100%';
  container.style.height = '100vh';
  container.style.backgroundColor = '#000';
  container.style.overflow = 'hidden';
  container.style.position = 'relative'; // För att kunna placera modaler/text ovanpå

  // ==========================================
  // 1. DINA MUSIK-LÄNDER (DATA)
  // ==========================================
  // Här lägger du in informationen som ska visas
  const musicCountries = {
    "Sweden": {
      info: "Sverige: Här är popundret, ABBA och Max Martin.",
      color: "#f6c138" // Gul
    },
    "Brazil": {
      info: "Brasilien: Hemlandet för Samba och Bossa Nova.",
      color: "#009c3b" // Grön
    },
    "Nigeria": {
      info: "Nigeria: Afrobeatens hemland med Fela Kuti och Burna Boy.",
      color: "#008751" // Mörkgrön
    }
    // Lägg till fler länder här vid behov
  };

  // ==========================================
  // 2. DETEKTERA CHROMEBOOK / PRESTANDA
  // ==========================================
  const isLowSpec = /CrOS/.test(navigator.userAgent) || navigator.hardwareConcurrency <= 4;

  const config = isLowSpec ? {
    mode: 'Lite Mode (Chromebook)',
    antialias: false,
    pixelRatio: 1, // Tvinga 1.0 (sparar massor av VRAM)
    enableAtmosphere: false, // Stäng av snyggt men tungt "glow"
    materialType: 'MeshBasicMaterial', // Inget ljus/skuggor = Snabbt
    globeImg: 'https://unpkg.com/three-globe/example/img/earth-dark.jpg' // Lågupplöst
  } : {
    mode: 'High Performance',
    antialias: true,
    pixelRatio: window.devicePixelRatio,
    enableAtmosphere: true, // Snyggt "glow" runt jorden
    materialType: 'MeshPhongMaterial', // Snyggare ljus
    globeImg: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg' // Högupplöst
  };

  console.log(`WorldMusic laddad i: ${config.mode}`);

  // Visa info om lite-läge
  if (isLowSpec) {
    const info = document.createElement('div');
    info.innerText = "Lite-läge 🚀";
    info.style.cssText = "position:absolute; bottom:10px; left:10px; color:#555; font-size:12px; z-index:10; pointer-events:none;";
    container.appendChild(info);
  }

  // ==========================================
  // 3. THREE.JS SETUP
  // ==========================================
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000); // Svart bakgrund

  // Lägg till ljus (behövs främst för High Performance-läget)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dLight = new THREE.DirectionalLight(0xffffff, 1.0);
  dLight.position.set(-200, 500, 200);
  scene.add(dLight);
  const dLight2 = new THREE.DirectionalLight(0x7982f6, 1.0);
  dLight2.position.set(-200, 500, 200);
  scene.add(dLight2);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 250; // Zooma ut lagom för ThreeGlobe

  const renderer = new THREE.WebGLRenderer({
    antialias: config.antialias,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(config.pixelRatio);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.rotateSpeed = 0.5;
  controls.minDistance = 150;
  controls.maxDistance = 500;

  // ==========================================
  // 4. SKAPA GLOBEN (ThreeGlobe)
  // ==========================================
  const globe = new ThreeGlobe()
    .globeImageUrl(config.globeImg)
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png');

  // OPTIMERING: Material på själva jordklotet
  // Vi kommer åt den interna sfären och byter material om det är en Chromebook
  const globeMaterial = globe.globeMaterial();
  if (isLowSpec) {
    // Byt till BasicMaterial för att slippa ljusberäkningar
    globeMaterial.color = new THREE.Color(0xffffff);
    // Vi kan inte enkelt byta hela materialklassen på en instansierad globe, 
    // men vi kan stänga av atmosfären som drar mest kraft.
    globe.showAtmosphere(false);
  } else {
    globe.showAtmosphere(true);
    globe.atmosphereColor('lightskyblue');
    globe.atmosphereAltitude(0.15);
  }

  // Ladda GeoJSON data (Länderna)
  // Vi använder en standardfil med alla världens länder
  fetch('https://raw.githubusercontent.com/vasturiano/three-globe/master/example/datasets/ne_110m_admin_0_countries.geojson')
    .then(res => res.json())
    .then(countries => {
      globe.polygonsData(countries)
        .polygonCapColor(d => {
          // Om landet finns i vår musicData-lista, ge den rätt färg
          if (musicCountries[d.properties.NAME]) {
            return musicCountries[d.properties.NAME].color;
          } else if (musicCountries[d.properties.NAME_LONG]) { // Ibland heter de NAME_LONG
            return musicCountries[d.properties.NAME_LONG].color;
          }
          return isLowSpec ? 'rgba(200,200,200, 0.3)' : 'rgba(200,200,200, 0.1)'; // Standardfärg (grå)
        })
        .polygonSideColor(() => 'rgba(0,0,0,0.5)')
        .polygonStrokeColor(() => '#111')
        .polygonAltitude(d => {
          // Höj upp länderna vi har musikfakta om så de syns tydligare
          const name = d.properties.NAME || d.properties.NAME_LONG;
          return musicCountries[name] ? 0.03 : 0.01;
        })
        .onPolygonClick((d) => {
          const name = d.properties.NAME || d.properties.NAME_LONG;
          if (musicCountries[name]) {
            // HÄR VISAR VI INFORMATIONEN
            showModal(name, musicCountries[name].info);
          } else {
            console.log("Klickade på: ", name);
          }
        })
        .polygonLabel(({ properties: d }) => `
          <div style="background:#333; color:#fff; padding:4px 8px; border-radius:4px;">
            <b>${d.NAME}</b> <br />
            ${musicCountries[d.NAME] ? "🎵 Klicka för info" : ""}
          </div>
        `); // Hover-text
    });

  scene.add(globe);

  // ==========================================
  // 5. ENKEL MODAL (FÖR INFO)
  // ==========================================
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(20,20,30, 0.95); border: 1px solid #444; border-radius: 12px;
    padding: 30px; color: #fff; max-width: 400px; display: none; z-index: 100;
    box-shadow: 0 0 20px rgba(0,0,0,0.8); font-family: sans-serif;
  `;
  modal.innerHTML = `<h2 id="m-title"></h2><p id="m-text"></p><button id="m-close" style="margin-top:20px; padding:5px 15px; cursor:pointer;">Stäng</button>`;
  container.appendChild(modal);

  const mClose = modal.querySelector('#m-close');
  mClose.onclick = () => { modal.style.display = 'none'; };

  function showModal(title, text) {
    modal.querySelector('#m-title').innerText = title;
    modal.querySelector('#m-text').innerText = text;
    modal.style.display = 'block';
  }

  // ==========================================
  // 6. ANIMATION & SKALNING
  // ==========================================

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);

  let frameId;
  function animate() {
    frameId = requestAnimationFrame(animate);

    // Långsam rotation (bara om ingen interagerar, valfritt)
    // globe.rotation.y += 0.0005; 

    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // ==========================================
  // 7. CLEANUP (VIKTIGT FÖR ATT GLOBEN SKA DÖ)
  // ==========================================
  container.cleanup = function () {
    console.log("🧹 Städar ThreeGlobe...");
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', onWindowResize);

    // Ta bort objekt från scenen
    scene.remove(globe);

    // Försök rensa ThreeGlobe-specifika resurser
    // (ThreeGlobe bygger mycket interna geometrier)
    scene.traverse((obj) => {
      if (obj.isMesh) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      }
    });

    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement) renderer.domElement.remove();
  };

  return container;
}