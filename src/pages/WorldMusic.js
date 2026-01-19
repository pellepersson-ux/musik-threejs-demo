// ==========================================
// OM DU HAR INSTALLERAT VIA NPM (Local)
// ==========================================
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// OBS: Om raden ovan med OrbitControls ger fel, prova denna istället:
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-music-page';
  container.style.width = '100%';
  container.style.height = '100vh';
  container.style.backgroundColor = '#000';
  container.style.overflow = 'hidden';
  container.style.position = 'relative';

  // ==========================================
  // 1. OPTIMERING: CHROMEBOOK-LÄGE
  // ==========================================
  const isLowSpec = /CrOS/.test(navigator.userAgent) || navigator.hardwareConcurrency <= 4;

  const config = isLowSpec ? {
    mode: 'Lite Mode (Chromebook)',
    antialias: false,
    pixelRatio: 1,
    segments: 32,
    useLighting: false,
    // Vi behåller webblänkar för texturen så det funkar direkt, 
    // men du kan byta till lokala filer, t.ex: './assets/earth-dark.jpg'
    texture: 'https://unpkg.com/three-globe/example/img/earth-dark.jpg'
  } : {
    mode: 'High Performance',
    antialias: true,
    pixelRatio: window.devicePixelRatio,
    segments: 64,
    useLighting: true,
    texture: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
  };

  console.log(`WorldMusic laddad i: ${config.mode}`);

  if (isLowSpec) {
    const info = document.createElement('div');
    info.innerText = "Lite-läge aktiverat 🚀";
    info.style.cssText = "position:absolute; bottom:10px; left:10px; color:#555; font-size:10px; z-index:10; pointer-events:none;";
    container.appendChild(info);
  }

  // ==========================================
  // 2. THREE.JS SETUP
  // ==========================================
  const scene = new THREE.Scene();

  // Stjärnor (bara för starka datorer)
  if (!isLowSpec) {
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 600;
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
  }

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({
    antialias: config.antialias,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(config.pixelRatio);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 12;
  controls.maxDistance = 30;

  // ==========================================
  // 3. GLOBEN
  // ==========================================
  const textureLoader = new THREE.TextureLoader();
  const earthGeo = new THREE.SphereGeometry(5, config.segments, config.segments);
  let earthMat;

  if (config.useLighting) {
    // TUNG (PC/Mac)
    earthMat = new THREE.MeshPhongMaterial({
      map: textureLoader.load(config.texture),
      bumpScale: 0.05,
      specular: new THREE.Color('grey'),
      shininess: 10
    });
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);
  } else {
    // LÄTT (Chromebook)
    earthMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(config.texture)
    });
  }

  const earth = new THREE.Mesh(earthGeo, earthMat);
  scene.add(earth);

  // ==========================================
  // 4. INTERAKTIVITET
  // ==========================================
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const interactables = [];

  function addMusicMarker(lat, lon, name, color) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const radius = 5.1;

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    const markerGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({ color: color });
    const marker = new THREE.Mesh(markerGeo, markerMat);

    marker.position.set(x, y, z);
    marker.userData = { name: name };

    earth.add(marker);
    interactables.push(marker);
  }

  // TEST-MARKERS
  addMusicMarker(59.32, 18.06, "Sverige: Pop & Visa", 0xffff00);
  addMusicMarker(35.67, 139.65, "Japan: J-Pop", 0xff0000);
  addMusicMarker(-14.23, -51.92, "Brasilien: Samba", 0x00ff00);
  addMusicMarker(36.16, -86.78, "USA: Country", 0x0000ff);

  function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactables);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      alert(`Du klickade på: ${hit.userData.name}`);
    }
  }

  window.addEventListener('click', onMouseClick);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // ==========================================
  // 5. LOOP
  // ==========================================
  let frameId;
  function animate() {
    frameId = requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // ==========================================
  // 6. CLEANUP (MEMORY LEAK FIX)
  // ==========================================
  container.cleanup = function () {
    console.log("🧹 Städar WorldMusic...");
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('click', onMouseClick);

    scene.traverse((object) => {
      if (!object.isMesh) return;
      object.geometry.dispose();
      if (object.material.isMaterial) {
        cleanMaterial(object.material);
      } else if (Array.isArray(object.material)) {
        object.material.forEach(cleanMaterial);
      }
    });

    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement) renderer.domElement.remove();
  };

  function cleanMaterial(material) {
    material.dispose();
    if (material.map) material.map.dispose();
  }

  return container;
}