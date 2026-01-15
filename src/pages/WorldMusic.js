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

    // --- PRESTANDA-CHECK ---
    function getPerformanceConfig() {
        const cores = navigator.hardwareConcurrency || 4;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CrOS/i.test(navigator.userAgent);

        if (cores < 4 || isMobile) {
            // Prestandaläge
            return { atmosphere: false, resolution: 1 };
        } else {
            // Snygg-läge
            return { atmosphere: true, resolution: 2 };
        }
    }

    const config = getPerformanceConfig();
    const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

    fetch(MAP_URL)
        .then(res => res.json())
        .then(countries => {

            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .polygonsData(countries.features)

                // --- INSTÄLLNINGAR FÖR UTSEENDE ---

                // 1. Gränserna (Border): Ljus, svag vit linje så de syns mot mörk bakgrund
                .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.2)')

                // 2. Färgen (Fill): Genomskinlig blå (0.5 = 50% synlig)
                // Om man hovrar blir den ljusvit och lite genomskinlig (0.3)
                .polygonCapColor(d => d === hoverD
                    ? 'rgba(255, 255, 255, 0.3)' // Vid hover (vit ghost)
                    : 'rgba(26, 42, 108, 0.5)'   // Vanligt läge (blå transparent)
                )

                .polygonSideColor(() => 'rgba(0,0,0,0)') // Inga sidor på länderna
                .polygonAltitude(0.01)

                // Namnskyltar
                .polygonLabel(({ properties: d }) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;">
            ${d.NAME}
          </div>
        `)

                // Konfiguration från prestanda-checken
                .showAtmosphere(config.atmosphere)
                .pixelRatio(config.resolution)

                // Interaktion
                .onPolygonHover(d => {
                    hoverD = d;
                    // Här säger vi åt globen att räkna ut färgerna igen baserat på den nya hover-statusen
                    world.polygonCapColor(world.polygonCapColor());
                    globeDiv.style.cursor = d ? 'pointer' : 'default';
                })
                .onPolygonClick(d => {
                    if (d) {
                        alert(`Du valde: ${d.properties.NAME} 🎵`);
                    }
                });

            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.5;

            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}