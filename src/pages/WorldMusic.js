import Globe from 'globe.gl'; // Om du använder npm, annars funkar script-taggen

export function WorldMusic() {
    const container = document.createElement('div');
    container.className = 'page-world';
    container.style.height = 'calc(100vh - 80px)';
    container.style.width = '100%';
    container.style.overflow = 'hidden';
    container.style.background = '#020207';

    const globeDiv = document.createElement('div');
    container.appendChild(globeDiv);
    let hoverD = null;

    // --- PRESTANDA-CHECK (Säkra versionen) ---
    function getPerformanceConfig() {
        const cores = navigator.hardwareConcurrency || 4;
        const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CrOS/i.test(navigator.userAgent);

        // Om datorn är svag (Chromebook/Mobil)
        if (cores <= 4 || isMobileOrTablet) {
            console.log("Läge: Prestanda (Chromebook/Mobil) 🚀");
            return {
                atmosphere: false,  // Ingen atmosfär (sparar mycket kraft)
                resolution: 1       // Standard skärpa
            };
        } else {
            // Om datorn är stark
            console.log("Läge: Snyggt (Desktop) ✨");
            return {
                atmosphere: true,   // Snyggt blått skimmer
                resolution: 2       // Krispigare upplösning
            };
        }
    }

    const config = getPerformanceConfig();

    // VIKTIGT: Vi använder den lätta kartan för ALLA nu (ne_110m).
    // Den tunga kartan var orsaken till kraschen.
    const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

    fetch(MAP_URL)
        .then(res => res.json())
        .then(countries => {
            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .polygonsData(countries.features)

                // --- ADAPTIVA INSTÄLLNINGAR ---
                .showAtmosphere(config.atmosphere) // Bara på starka datorer
                .pixelRatio(config.resolution)     // Skarpare på starka datorer
                // ------------------------------

                .polygonAltitude(0.01)
                .polygonSideColor(() => 'rgba(0,0,0,0)')
                .polygonStrokeColor(() => '#111')
                .polygonCapColor(d => d === hoverD ? 'white' : '#1a2a6c')

                .onPolygonHover(d => {
                    hoverD = d;
                    world.polygonCapColor(world.polygonCapColor());
                    globeDiv.style.cursor = d ? 'pointer' : 'default';
                })
                .onPolygonClick(d => {
                    if (d) alert(`Du valde: ${d.properties.NAME} 🎵`);
                });

            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}