import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

export function WorldMusic() {
  const container = document.createElement('div');
  container.className = 'world-page';
  container.style.height = '100vh'; // Full höjd
  container.style.width = '100%';
  container.style.overflow = 'hidden';
  container.style.position = 'relative';

  // 1. Text-överlägg (så man vet vad man ser)
  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <h1 style="color:white; text-shadow:0 2px 4px rgba(0,0,0,0.8);">Världsmusik 🌍</h1>
    <p style="color:#ddd;">Snurra på jorden för att upptäcka musikstilar.</p>
  `;
  overlay.style.position = 'absolute';
  overlay.style.top = '20px';
  overlay.style.left = '50%';
  overlay.style.transform = 'translateX(-50%)';
  overlay.style.zIndex = '10';
  overlay.style.textAlign = 'center';
  overlay.style.pointerEvents = 'none'; // Så man kan klicka igenom texten
  container.appendChild(overlay);

  // 2. SETUP THREE.JS
  const scene = new THREE.Scene();
  // Mörk rymdbakgrund
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 15;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Ljus
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // 3. SKAPA JORDGLOBEN
  const geometry = new THREE.SphereGeometry(5, 64, 64);

  // Vi laddar en textur (bild) av jorden
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Aurora_as_seen_by_IMAGE.jpg/1280px-Aurora_as_seen_by_IMAGE.jpg'); // En fri rymdbild som exempel

  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpScale: 0.05,
    specular: new THREE.Color('grey')
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // Stjärnor i bakgrunden
  const starGeo = new THREE.BufferGeometry();
  const starCount = 1000;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 200;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // Kontroller (så man kan snurra)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;

  // Variabel för att hålla koll på animationen
  let animationId;

  // ==========================================
  // 4. ANIMATION LOOP (MED KILL SWITCH)
  // ==========================================
  const animate = () => {
    // --- HÄR ÄR FIXEN ---
    // Vi kollar: Finns "container" kvar i webbläsaren?
    if (!document.body.contains(container)) {
      // Om nej: STOPPA ALLT!
      cleanup();
      return;
    }

    animationId = requestAnimationFrame(animate);

    earth.rotation.y += 0.002; // Snurra långsamt
    stars.rotation.y -= 0.0005; // Rymden rör sig lite

    controls.update();
    renderer.render(scene, camera);
  };

  // ==========================================
  // 5. STÄDA OCH AVSLUTA (Memory Management)
  // ==========================================
  function cleanup() {
    console.log("Städar upp Världsmusik... 🧹");

    // Stoppa loopen
    cancelAnimationFrame(animationId);

    // Töm minnet (GPU)
    geometry.dispose();
    material.dispose();
    starGeo.dispose();
    starMat.dispose();
    renderer.dispose();
  }

  // Starta loopen
  animate();

  // Hantera fönsterstorlek (Responsivitet)
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