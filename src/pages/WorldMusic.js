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
  scene.background = new THREE.Color(0x050505);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 16;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Ljus
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffddbb, 1.2);
  pointLight.position.set(20, 10, 20);
  scene.add(pointLight);

  // 3. SKAPA JORDGLOBEN
  const geometry = new THREE.SphereGeometry(6, 64, 64);

  const textureLoader = new THREE.TextureLoader();

  // LÄNK: Officiell Three.js-textur (Mycket stabilare)
  const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    color: 0xaaaaaa,    // Fallback-färg (om bilden inte laddar blir jorden ljusgrå/blå, inte svart)
    bumpScale: 0.05,
    specular: new THREE.Color(0x333333),
    shininess: 5
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // Stjärnor
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
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  let animationId;

  // 4. ANIMATION & KILL SWITCH
  const animate = () => {
    if (!document.body.contains(container)) {
      cleanup();
      return;
    }
    animationId = requestAnimationFrame(animate);
    stars.rotation.y -= 0.0001;
    controls.update();
    renderer.render(scene, camera);
  };

  function cleanup() {
    cancelAnimationFrame(animationId);
    earthTexture.dispose(); // Städa texturen
    geometry.dispose();
    material.dispose();
    starGeo.dispose();
    starMat.dispose();
    renderer.dispose();
    console.log("Jorden städad. 🧹");
  }

  // 5. START MED FÖRDRÖJNING
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