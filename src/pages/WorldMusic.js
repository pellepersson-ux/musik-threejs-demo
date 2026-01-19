import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-page';
  container.style.height = '100vh';
  container.style.width = '100%';
  container.style.overflow = 'hidden';
  container.style.position = 'relative';

  // 1. Text-överlägg
  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <h1 style="color:white; text-shadow:0 2px 4px rgba(0,0,0,0.8);">Världsmusik 🌍</h1>
    <p style="color:#ddd; text-shadow:0 1px 2px rgba(0,0,0,0.8);">Snurra på jorden för att upptäcka musikstilar.</p>
  `;
  overlay.style.position = 'absolute';
  overlay.style.top = '20px';
  overlay.style.left = '50%';
  overlay.style.transform = 'translateX(-50%)';
  overlay.style.zIndex = '10';
  overlay.style.textAlign = 'center';
  overlay.style.pointerEvents = 'none';
  container.appendChild(overlay);

  // 2. SETUP THREE.JS
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505); // Mycket mörk rymd

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 16;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio); // Skarpare på moderna skärmar
  container.appendChild(renderer.domElement);

  // Ljus (Viktigt för att se texturen!)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Allmänt ljus
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffddbb, 1.2); // Varmt "solljus" från sidan
  pointLight.position.set(20, 10, 20);
  scene.add(pointLight);

  // 3. SKAPA JORDGLOBEN (MED TEXTUR IGEN!)
  const geometry = new THREE.SphereGeometry(6, 64, 64); // Hög detaljrikedom

  // --- HÄR LADDAR VI BILDEN IGEN ---
  const textureLoader = new THREE.TextureLoader();
  // En bra, högupplöst bild på jorden
  const earthTexture = textureLoader.load('https://i.imgur.com/45NAzR3.jpeg');

  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,   // Lägg på kartan
    bumpScale: 0.05,     // Lite struktur
    specular: new THREE.Color(0x333333), // Lite blänk i haven
    shininess: 5
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);


  // Stjärnor (Lite fler och mindre för bättre djup)
  const starGeo = new THREE.BufferGeometry();
  const starCount = 3000;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 400;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.1 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // Kontroller
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;     // Den snurrar automatiskt...
  controls.autoRotateSpeed = 0.5; // ...långsamt och snyggt

  let animationId;

  // ==========================================
  // 4. ANIMATION & KILL SWITCH
  // ==========================================
  const animate = () => {
    // KOLL: Finns containern i dokumentet?
    if (!document.body.contains(container)) {
      cleanup();
      return;
    }

    animationId = requestAnimationFrame(animate);

    stars.rotation.y -= 0.0001; // Rymden rör sig jättelite

    controls.update(); // Sköter auto-rotationen
    renderer.render(scene, camera);
  };

  function cleanup() {
    // Städa minnet när vi lämnar
    cancelAnimationFrame(animationId);

    // Viktigt: Städa bort texturen också!
    earthTexture.dispose();
    geometry.dispose();
    material.dispose();
    starGeo.dispose();
    starMat.dispose();
    renderer.dispose();
    console.log("Jorden och texturer borttagna ur minnet. 🗑️");
  }

  // ==========================================
  // 5. START MED FÖRDRÖJNING (Fixen för att den inte ska dö direkt)
  // ==========================================
  setTimeout(() => {
    animate();
  }, 100);

  // Responsivitet
  const handleResize = () => {
    if (!document.body.contains(container)) {
      window.removeEventListener('resize', handleResize);
      return;
    }
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  return container;
}