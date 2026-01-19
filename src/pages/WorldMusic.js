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
    <p style="color:#ddd;">Snurra på jorden för att upptäcka musikstilar.</p>
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
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 18; // Backade kameran lite

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Ljus
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(15, 15, 15);
  scene.add(pointLight);

  // 3. SKAPA JORDGLOBEN (Cool Wireframe-stil så vi ser att det funkar)
  const geometry = new THREE.SphereGeometry(6, 32, 32); // Lite kantigare för "tech"-look

  // Vi kör en snygg neongrön/blå "Matrix"-stil
  const material = new THREE.MeshPhongMaterial({
    color: 0x22aaee,
    wireframe: true, // <--- Wireframe gör att den alltid syns, inga bilder som ska laddas
    transparent: true,
    opacity: 0.8
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // En inre kärna så den inte är helt genomskinlig
  const coreGeo = new THREE.SphereGeometry(5.9, 32, 32);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);


  // Stjärnor
  const starGeo = new THREE.BufferGeometry();
  const starCount = 1500;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 300;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // Kontroller
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;

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

    earth.rotation.y += 0.002;
    stars.rotation.y -= 0.0002;

    controls.update();
    renderer.render(scene, camera);
  };

  function cleanup() {
    // Städa minnet när vi lämnar
    cancelAnimationFrame(animationId);
    geometry.dispose();
    material.dispose();
    coreGeo.dispose();
    coreMat.dispose();
    starGeo.dispose();
    starMat.dispose();
    renderer.dispose();
    console.log("Jorden borttagen ur minnet. 🗑️");
  }

  // ==========================================
  // 5. START MED FÖRDRÖJNING (VIKTIGT!)
  // ==========================================
  // Vi väntar 100ms så att sidan hinner ladda klart containern
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