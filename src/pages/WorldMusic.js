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
        // Standardvärde om vi inte kan läsa av hårdvaran
        const cores = navigator.hardwareConcurrency || 4;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CrOS/i.test(navigator.userAgent);

        // Om svag dator (färre än 4 kärnor eller mobil/chromebook)
        if (cores < 4 || isMobile) {
            console.log("Läge: Prestanda 🚀");
            return { atmosphere: false, resolution: 1 };
        } else {
            console.log("Läge: Snyggt ✨");
            return { atmosphere: true, resolution: 2 };
        }
    }

    const config = getPerformanceConfig();

    // URL till kartan (Low Poly för säkerhets skull)
    const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

    fetch(MAP_URL)
        .then(res => res.json())
        .then(countries => {

            // OBS: Här förutsätter vi att Globe finns laddat globalt via din index.html
            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')

                // --- VIKTIGT: Här laddas länderna in ---
                .polygonsData(countries.features)

                // --- VIKTIGT: Här laddas namnen in ---
                .polygonLabel(({ properties: d }) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;">
            ${d.NAME}
          </div>
        `)

                // Inställningar för utseende
                .showAtmosphere(config.atmosphere)
                .pixelRatio(config.resolution)
                .polygonAltitude(0.01)
                .polygonSideColor(() => 'rgba(0,0,0,0)') // Genomskinliga sidor
                .polygonStrokeColor(() => '#333')       // Mörkgrå kantlinjer

                // Färger: Vit vid hover, annars mörkblå
                .polygonCapColor(d => d === hoverD ? 'white' : '#1a2a6c')

                // Hover-funktionalitet
                .onPolygonHover(d => {
                    hoverD = d;
                    world.polygonCapColor(world.polygonCapColor()); // Uppdatera färger
                    globeDiv.style.cursor = d ? 'pointer' : 'default';
                })

                // Klick-funktionalitet
                .onPolygonClick(d => {
                    if (d) {
                        alert(`Du valde: ${d.properties.NAME} 🎵`);
                        // playMusic(d.properties.NAME);
                    }
                });

            // Se till att globen fyller rutan
            world.controls().autoRotate = true; // Sätt på rotation om du vill
            world.controls().autoRotateSpeed = 0.5;

            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}