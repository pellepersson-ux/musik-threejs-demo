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

    // --- PRESTANDA-CHECKEN 🕵️‍♂️ ---
    function getPerformanceConfig() {
        // 1. Kolla antal kärnor (Chromebooks har ofta 2 eller 4, speldatorer 8+)
        const cores = navigator.hardwareConcurrency || 4;

        // 2. Kolla RAM-minne (om webbläsaren tillåter det, annars gissa på 8GB)
        const ram = navigator.deviceMemory || 8;

        // 3. Kolla om det är en Chromebook (CrOS) eller Mobil
        const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CrOS/i.test(navigator.userAgent);

        // BEDÖMNINGEN:
        // Om datorn har 4 eller färre kärnor, mindre än 4GB RAM, eller är mobil/Chromebook -> LÅG PRESTANDA
        const isLowSpec = cores <= 4 || ram < 4 || isMobileOrTablet;

        if (isLowSpec) {
            console.log("Detecting low-spec device. Running optimized mode. 🚀");
            return {
                geoJsonUrl: 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson', // Enkel karta
                atmosphere: false, // Ingen atmosfär
                resolution: 1,     // Standard upplösning
                refreshRate: 2     // Rita bara om varannan frame om möjligt (sparar batteri)
            };
        } else {
            console.log("Detecting high-spec device. Running beautiful mode. ✨");
            return {
                geoJsonUrl: 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson', // Detaljerad karta
                atmosphere: true,  // Snyggt skimmer
                resolution: 2,     // Skarpare kanter
                refreshRate: 1
            };
        }
    }

    // Hämta inställningarna
    const config = getPerformanceConfig();

    // --- LADDA GLOBEN MED RÄTT INSTÄLLNINGAR ---
    fetch(config.geoJsonUrl)
        .then(res => res.json())
        .then(countries => {

            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .polygonsData(countries.features)

                // Här använder vi inställningarna från checken:
                .showAtmosphere(config.atmosphere)

                // Allmänna inställningar
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

            // Responsivitet
            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}