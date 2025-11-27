import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function Spel() {
    const container = document.createElement('div');
    container.className = 'page-spel';
    container.style.width = '100%';
    container.style.height = 'calc(100vh - 160px)'; // Adjust for header/footer
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    // Initialize Three.js scene
    setTimeout(() => {
        initThree(container);
    }, 0);

    return container;
}

function initThree(mountPoint) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountPoint.clientWidth / mountPoint.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountPoint.clientWidth, mountPoint.clientHeight);
    mountPoint.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load Guitar Model
    const loader = new GLTFLoader();
    let model;

    loader.load('/models/piano-keys.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);

        // Center and scale the model
        // Note: Scale depends on the model. For the placeholder box, 1 is fine.
        // For a real guitar, might need adjustment.
        model.scale.set(1, 1, 1);

        // Optional: Auto-center
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center); // Center at 0,0,0

    }, undefined, (error) => {
        console.error('An error occurred loading the model:', error);
        // Fallback to cube if model fails?
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        model = cube;
    });

    camera.position.z = 5;

    // Animation Loop
    function animate() {
        if (!mountPoint.isConnected) return; // Stop if removed from DOM
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += 0.01;
            model.rotation.x += 0.005;
        }

        renderer.render(scene, camera);
    }

    animate();

    // Resize Handler
    const handleResize = () => {
        if (!mountPoint.isConnected) {
            window.removeEventListener('resize', handleResize);
            return;
        }
        const width = mountPoint.clientWidth;
        const height = mountPoint.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
}
