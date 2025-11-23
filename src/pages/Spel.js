import * as THREE from 'three';

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

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation Loop
    function animate() {
        if (!mountPoint.isConnected) return; // Stop if removed from DOM
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

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
