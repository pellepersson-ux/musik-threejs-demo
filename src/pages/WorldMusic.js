export function WorldMusic() {
    const container = document.createElement('div');
    container.className = 'page-world';
    container.style.height = 'calc(100vh - 80px)'; // Anpassa höjden efter din header
    container.style.width = '100%';
    container.style.overflow = 'hidden';
    container.style.background = '#020207'; // Rymd-svart bakgrund

    // Skapa en behållare för själva globen
    const globeDiv = document.createElement('div');
    container.appendChild(globeDiv);

    // Variabel för att hålla koll på vilket land musen är över
    let hoverD = null;

    // --- HÄR STARTAR VI GLOBEN ---
    // Vi hämtar den "lätta" kartan (110m) för att spara prestanda på Chromebooks
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {

            // Skapa globen
            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .polygonsData(countries.features)

                // --- PRESTANDA-OPTIMERINGAR (För Chromebooks) ---
                .showAtmosphere(false)       // Stänger av "glöden" runt jorden (Tungt!)
                .polygonAltitude(0.01)       // Håller länderna platta
                .polygonSideColor(() => 'rgba(0,0,0,0)') // Osynliga sidor på länderna sparar kraft
                // ------------------------------------------------

                // Färgsättning
                .polygonCapColor(d => d === hoverD ? 'white' : '#1a2a6c') // Vit vid hover, annars blå
                .polygonStrokeColor(() => '#111') // Mörka gränser mellan länder
                .polygonLabel(({ properties: d }) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 5px; border-radius: 4px;">
            ${d.NAME}
          </div>
        `)

                // Hover-effekt (tänder och släcker länder)
                .onPolygonHover(d => {
                    hoverD = d;
                    world.polygonCapColor(world.polygonCapColor()); // Rita om färgerna
                    globeDiv.style.cursor = d ? 'pointer' : 'default'; // Byt muspekare
                })

                // Klick-effekt
                .onPolygonClick(d => {
                    if (d) {
                        console.log("Du klickade på:", d.properties.NAME);
                        // Här kan du lägga in din musikspelare sen!
                        // playMusic(d.properties.NAME); 
                        alert(`Du valde: ${d.properties.NAME} 🎵`);
                    }
                });

            // Se till att globen fyller fönstret om man ändrar storlek
            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}