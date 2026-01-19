import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeGlobe from 'three-globe';

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-music-page';
  container.style.width = '100%';
  container.style.height = '100vh';
  container.style.backgroundColor = '#000';
  container.style.position = 'relative';
  container.style.overflow = 'hidden';

  // ==========================================
  // 1. DATA & INSTÄLLNINGAR
  // ==========================================
  const musicCountries = {
    "Sweden": { info: "Sverige: ABBA, Roxette, Max Martin.", color: "#f6c138" },
    "Brazil": { info: "Brasilien: Samba, Bossa Nova.", color: "#009c3b" },
    "Nigeria": { info: "Nigeria: Afrobeat, Fela Kuti.", color: "#008751" },
    "United States of America": { info: "USA: Blues, Jazz, Hip Hop.", color: "#3c3b6e" },
    "Japan": { info: "Japan: J-Pop, Koto.", color: "#bc002d" }
  };

  // Lite-läge för Chromebooks
  const isLowSpec = /CrOS/.test(navigator.userAgent) || navigator.hardwareConcurrency <= 4;
  const config = isLowSpec ? {
    antialias: false,
    pixelRatio: 1, // Tvinga låg upplösning
    globeImg: '//unpkg.com/three-globe/example/img/earth-dark.jpg',
    atmosphere: false
  } : {
    antialias: true,
    pixelRatio: window.devicePixelRatio,
    globeImg: '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    atmosphere: true
  };

  console.log(isLowSpec ? "Läge: Chromebook (Lite)" : "Läge: High Performance");

  // ==========================================
  // 2. SCEN, KAMERA, RENDERER
  // ==========================================
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505); // Nästan svart

  // VIKTIGT: Starkt ljus så allt syns
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(200, 500, 300);
  scene.add(dirLight);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 250;

  const renderer = new THREE.WebGLRenderer({ antialias: config.antialias, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(config.pixelRatio);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.minDistance = 150;
  controls.maxDistance = 600;

  // ==========================================
  // 3. GLOBEN & LÄNDER
  // ==========================================
  const globe = new ThreeGlobe()
    .globeImageUrl(config.globeImg)
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

  // Ställ in atmosfär baserat på prestanda
  if (config.atmosphere) {
    globe.showAtmosphere(true);
    globe.atmosphereColor('lightskyblue');
    globe.atmosphereAltitude(0.15);
  } else {
    globe.showAtmosphere(false);
  }

  // --- HÄR LADDAR VI DATAN (Ny länk + Felhantering) ---

  // Vi använder jsDelivr CDN istället för Raw Github (oftare tillåtet i skolor)
  const GEOJSON_URL = 'https://cdn.jsdelivr.net/gh/vasturiano/three-globe/example/datasets/ne_110m_admin_0_countries.geojson';

  fetch(GEOJSON_URL)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP fel! Status: ${res.status}`);
      return res.json();
    })
    .then(countries => {
      console.log("Länder laddade, antal:", countries.features.length);

      globe.polygonsData(countries.features)
        .polygonCapColor(d => {
          const name = d.properties.NAME || d.properties.NAME_LONG;
          if (musicCountries[name]) return musicCountries[name].color;
          return 'rgba(255, 255, 255, 0)'; // Genomskinliga länder om ingen data finns
        })
        .polygonSideColor(() => 'rgba(255, 255, 255, 0.05)') // Svag kantfärg
        .polygonStrokeColor(() => '#555') // Grå gränslinjer
        .polygonAltitude(0.01) // Lyft upp länderna lite från ytan
        .onPolygonClick(d => {
          const name = d.properties.NAME || d.properties.NAME_LONG;
          if (musicCountries[name]) {
            showModal(name, musicCountries[name].info);
          } else {
            console.log("Klickade på:", name, "(Ingen musikdata)");
          }
        })
        // Hover-effekt (label)
        .polygonLabel(({ properties: d }) => {
          const name = d.NAME || d.NAME_LONG;
          if (musicCountries[name]) {
            return `<div style="background:#222; color:#fff; padding:5px; border-radius:4px;">🎵 ${name}</div>`;
          }
          return null;
        });

      // Tvinga en uppdatering av globen när datan är klar
      globe.rotation.y = 0;
    })
    .catch(err => {
      console.error("FEL vid laddning av länder:", err);
      alert("Kunde inte ladda kartan. Kolla internetuppkopplingen eller konsolen (F12).");
    });

  scene.add(globe);

  // ==========================================
  // 4. MODAL (Popup-ruta)
  // ==========================================
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: #1e1e1e; color: #fff; padding: 30px; border-radius: 10px;
    border: 1px solid #444; width: 80%; max-width: 400px; display: none;
    box-shadow: 0 10px 40px rgba(0,0,0,0.8); z-index: 1000; text-align: center;
  `;
  modal.innerHTML = `
    <h2 id="m-title" style="color:#f6c138; margin-top:0;"></h2>
    <p id="m-text" style="line-height:1.5; font-size:1.1rem;"></p>
    <button id="m-close" style="margin-top:20px; padding:10px 20px; border:none; background:#444; color:#fff; cursor:pointer; border-radius:5px;">Stäng</button>
  `;
  container.appendChild(modal);

  modal.querySelector('#m-close').onclick = () => modal.style.display = 'none';

  function showModal(title, text) {
    modal.querySelector('#m-title').innerText = title;
    modal.querySelector('#m-text').innerText = text;
    modal.style.display = 'block';
  }

  // ==========================================
  // 5. LOOP & CLEANUP
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
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  container.cleanup = function () {
    console.log("Städar ThreeGlobe...");
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', onWindowResize);

    // Töm scenen
    scene.clear();

    // Frigör minne
    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement) renderer.domElement.remove();
  };

  return container;
}