import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-page';
  container.style.height = '100vh';
  container.style.width = '100%';
  container.style.overflow = 'hidden';
  container.style.position = 'relative';

  // ==========================================
  // 1. HTML UI (Överlägg & Tooltip)
  // ==========================================

  // Rubrik
  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <h1 style="color:white; text-shadow:0 2px 4px rgba(0,0,0,0.8); margin-bottom:0;">Världsmusik 🌍</h1>
    <p style="color:#ddd; margin-top:5px;">Leta efter de <b>röda punkterna</b> och klicka för info.</p>
  `;
  overlay.style.position = 'absolute';
  overlay.style.top = '20px';
  overlay.style.left = '50%';
  overlay.style.transform = 'translateX(-50%)';
  overlay.style.zIndex = '10';
  overlay.style.textAlign = 'center';
  overlay.style.pointerEvents = 'none';
  container.appendChild(overlay);

  // Tooltip (Den lilla rutan som följer musen)
  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '8px 12px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.display = 'none';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.zIndex = '20';
  tooltip.style.fontWeight = 'bold';
  tooltip.style.border = '1px solid #3498db';
  container.appendChild(tooltip);

  // Modal för info (När man klickar)
  const infoModal = document.createElement('div');
  infoModal.className = 'hidden-force';
  infoModal.style.position = 'absolute';
  infoModal.style.top = '50%';
  infoModal.style.left = '50%';
  infoModal.style.transform = 'translate(-50%, -50%)';
  infoModal.style.background = 'white';
  infoModal.style.padding = '30px';
  infoModal.style.borderRadius = '10px';
  infoModal.style.zIndex = '100';
  infoModal.style.maxWidth = '400px';
  infoModal.style.textAlign = 'center';
  infoModal.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
  infoModal.innerHTML = `
    <h2 id="modal-title" style="margin-top:0; color:#333;">Land</h2>
    <p id="modal-desc" style="color:#555;">Info...</p>
    <button id="modal-close" style="background:#3498db; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer; margin-top:10px;">Stäng</button>
  `;
  container.appendChild(infoModal);

  // Logik för att stänga modal
  infoModal.querySelector('#modal-close').addEventListener('click', () => {
    infoModal.style.display = 'none';
  });

  // ==========================================
  // 2. DATA: MUSIK-PLATSER
  // ==========================================
  // Här lägger vi in koordinater för platser med musik
  const musicHotspots = [
    { name: "Sverige", lat: 60.128, lon: 18.643, info: "Känt för popunder (ABBA, Max Martin) och en stark körtradition." },
    { name: "USA (New Orleans)", lat: 29.95, lon: -90.07, info: "Jazzens födelseplats! Här blandades blues, ragtime och brassband." },
    { name: "Brasilien", lat: -14.235, lon: -51.925, info: "Hemland för Samba och Bossa Nova. Rytm och glädje!" },
    { name: "Jamaica", lat: 18.109, lon: -77.297, info: "Reggae-musikens hjärta med ikoner som Bob Marley." },
    { name: "Indien", lat: 20.593, lon: 78.962, info: "Klassisk indisk musik använder Ragas (skalor) och Sitar." },
    { name: "Västafrika", lat: 9.082, lon: 8.675, info: "Ursprunget till många av världens rytmer. Här används trummor som Djembe." },
    { name: "Storbritannien", lat: 55.378, lon: -3.436, info: "The British Invasion! Beatles, Rolling Stones och punk." }
  ];

  // ==========================================
  // 3. THREE.JS SETUP
  // ==========================================
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020202);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Ljus
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffddbb, 1);
  pointLight.position.set(20, 10, 20);
  scene.add(pointLight);

  // ==========================================
  // 4. JORDGLOBEN
  // ==========================================
  const earthGroup = new THREE.Group(); // En grupp som håller jorden + markörer
  scene.add(earthGroup);

  const geometry = new THREE.SphereGeometry(6, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    color: 0xaaaaaa,
    bumpScale: 0.05,
    specular: new THREE.Color(0x333333),
    shininess: 5
  });

  const earth = new THREE.Mesh(geometry, material);
  earthGroup.add(earth);

  // ==========================================
  // 5. MARKÖRER (DOTS)
  // ==========================================
  // Funktion för att göra om Lat/Lon till x,y,z
  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));
    return new THREE.Vector3(x, y, z);
  }

  const markers = []; // Spara referenser till prickarna

  musicHotspots.forEach(place => {
    const markerGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xff3333 }); // Röd färg
    const marker = new THREE.Mesh(markerGeo, markerMat);

    // Räkna ut position (lite utanför jorden, radie 6 -> 6.05)
    const pos = latLonToVector3(place.lat, place.lon, 6.05);
    marker.position.set(pos.x, pos.y, pos.z);

    // Spara datan direkt på objektet så vi kan läsa den vid klick
    marker.userData = { name: place.name, info: place.info };

    earthGroup.add(marker);
    markers.push(marker);
  });

  // Stjärnor
  const starGeo = new THREE.BufferGeometry();
  const starCount = 3000;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 400;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x888888, size: 0.1 }));
  scene.add(stars);

  // Kontroller
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  // ==========================================
  // 6. INTERAKTIVITET (RAYCASTER)
  // ==========================================
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseMove(event) {
    // Räkna ut musposition (-1 till +1)
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Flytta tooltip så den följer musen
    tooltip.style.left = event.clientX + 15 + 'px';
    tooltip.style.top = event.clientY + 15 + 'px';
  }

  function onClick(event) {
    // Om vi hovrar över något när vi klickar...
    if (hoveredMarker) {
      // Stoppa rotationen så man kan läsa
      controls.autoRotate = false;

      // Visa modal
      infoModal.querySelector('#modal-title').innerText = hoveredMarker.userData.name;
      infoModal.querySelector('#modal-desc').innerText = hoveredMarker.userData.info;
      infoModal.style.display = 'block';
    } else {
      // Om man klickar i rymden, börja snurra igen och stäng modal
      controls.autoRotate = true;
      infoModal.style.display = 'none';
    }
  }

  // Lägg till event listeners
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);

  let hoveredMarker = null; // Håller koll på vad vi pekar på

  // ==========================================
  // 7. ANIMATION LOOP
  // ==========================================
  let animationId;

  const animate = () => {
    if (!document.body.contains(container)) {
      cleanup();
      return;
    }

    // Uppdatera Raycaster
    raycaster.setFromCamera(mouse, camera);

    // Kolla krockar med markörer
    const intersects = raycaster.intersectObjects(markers);

    if (intersects.length > 0) {
      // VI TRÄFFAR NÅGOT!
      if (hoveredMarker !== intersects[0].object) {
        // Om det är en NY träff
        if (hoveredMarker) hoveredMarker.material.color.set(0xff3333); // Återställ förra

        hoveredMarker = intersects[0].object;
        hoveredMarker.material.color.set(0x00ff00); // Byt färg till GRÖN
        hoveredMarker.scale.set(1.5, 1.5, 1.5); // Gör den större

        // Visa Tooltip
        tooltip.style.display = 'block';
        tooltip.innerText = hoveredMarker.userData.name;

        document.body.style.cursor = 'pointer';
      }
    } else {
      // VI TRÄFFAR INGET
      if (hoveredMarker) {
        hoveredMarker.material.color.set(0xff3333); // Återställ röd
        hoveredMarker.scale.set(1, 1, 1);
        hoveredMarker = null;
        tooltip.style.display = 'none';
        document.body.style.cursor = 'default';
      }
    }

    animationId = requestAnimationFrame(animate);
    stars.rotation.y -= 0.0001;
    controls.update();
    renderer.render(scene, camera);
  };

  function cleanup() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('click', onClick);
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationId);

    earthTexture.dispose();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    console.log("Städat och klart. 🧹");
  }

  setTimeout(() => { animate(); }, 100);

  const handleResize = () => {
    if (!document.body.contains(container)) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  return container;
}