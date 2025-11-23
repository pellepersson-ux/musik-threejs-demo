const CACHE_NAME = 'tonverkstan-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/src/main.js',
    '/src/style.css',
    '/src/styles/layout.css',
    '/src/components/Header.js',
    '/src/components/Footer.js',
    '/src/components/AudioPlayer.js',
    '/src/components/TaskCheckbox.js',
    '/src/components/Timer.js',
    '/src/components/ReflectionInput.js',
    '/src/components/HelpOverlay.js',
    '/src/pages/Home.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
