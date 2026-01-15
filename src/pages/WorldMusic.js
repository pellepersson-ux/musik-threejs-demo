export function WorldMusic() {
    // --- 1. SKAPA HUVUDCONTAINER ---
    const container = document.createElement('div');
    container.className = 'page-world';
    container.style.position = 'relative'; // Viktigt för att kunna placera info-rutan
    container.style.height = 'calc(100vh - 80px)';
    container.style.width = '100%';
    container.style.overflow = 'hidden';
    container.style.background = '#020207';

    // --- 2. HÄR ÄR DIN TEXT-DATABAS 📚 ---
    // Nyckeln måste vara landets ENGELSKA namn (eftersom kartan är på engelska).
    // Innehållet är din svenska text.
    const countryData = {
        "Sweden": `
      <h2 style="margin-top:0; color: #4facfe;">Svensk folkmusik: En levande tradition 🎻</h2>
      <p>Svensk folkmusik är sprungen ur det gamla bondesamhället och har förts vidare genom muntlig tradition i generationer. Det är en musikform som är intimt förknippad med dans, natur och berättande. Musiken kännetecknas ofta av en unik blandning av livlig dansglädje och ett nordiskt vemod.</p>
      
      <h3>Viktiga beståndsdelar:</h3>
      <ul>
        <li><strong>Instrumenten:</strong> Det centrala instrumentet är fiolen. Ett unikt svenskt instrument är nyckelharpan (särskilt i Uppland). Även dragspel och klarinett är vanliga.</li>
        <li><strong>Rytmen (Polskan):</strong> Hjärtat i svensk folkmusik är polskan. En dans i tretakt med ett speciellt "sväng" där betoningarna ligger annorlunda än i en vals. Rytmen är "baktung", vilket ger drivet.</li>
        <li><strong>Sången (Kulning):</strong> Mest känd är kulning, en lockropsteknik med extremt höga toner som användes på fäbodarna för att locka på boskap.</li>
        <li><strong>Vemodet:</strong> Melodierna använder ofta "blå toner" (kvartstoner) som skapar den melankoliska klang som associeras med svensk natur.</li>
      </ul>
      <p><em>Idag är folkmusiken en levande genre som blandas med pop, jazz och världsmusik.</em></p>
    `,
        "Brazil": `
      <h2 style="margin-top:0; color: #43e97b;">Brasiliansk musik: En rytmisk smältdegel 🥁</h2>
      <p>Brasiliansk folkmusik är resultatet av ett unikt möte mellan tre kulturer: den afrikanska rytmiken, den portugisiska meloditraditionen och den indianska kulturen.</p>
      
      <h3>Viktiga beståndsdelar:</h3>
      <ul>
        <li><strong>Rytmen:</strong> Rytmen är ryggraden, rotad i västafrikanska traditioner. Instrument som pandeiro, surdo och agogô skapar den synkoperade rytmen.</li>
        <li><strong>Samba och Choro:</strong> Samba är landets nationalsymbol. Choro är en äldre, virtuos gatumusik med mandolin och flöjt.</li>
        <li><strong>Forró:</strong> Landsbygdens hjärta i nordöstra Brasilien. Festmusik driven av dragspel, triangel och bastrumma.</li>
        <li><strong>Cavaquinho:</strong> Ett litet fyrsträngat instrument (liknar ukulele men vassare ljud) som är avgörande för samba och choro.</li>
        <li><strong>Saudade:</strong> En känsla av djup längtan och melankoli som ofta hörs i texterna, t.ex. i Bossa Nova.</li>
      </ul>
      <p><em>Musiken i Brasilien är inte bara underhållning; den är ett sätt att leva.</em></p>
    `,
        "Nigeria": `
      <h2 style="margin-top:0; color: #ffafbd;">Nigeriansk musik: Afrikas bultande hjärta 🇳🇬</h2>
      <p>Nigeriansk musik är en kraftfull explosion av rytm och energi. Med över 250 folkgrupper är traditionerna många, men gemensamt är den komplexa rytmiken.</p>
      
      <h3>Viktiga beståndsdelar:</h3>
      <ul>
        <li><strong>Den talande trumman (Gangan):</strong> En timglasformad trumma som kan ändra tonhöjd för att imitera språket och kommunicera budskap.</li>
        <li><strong>Afrobeat:</strong> Skapad av Fela Kuti. En hypnotisk blandning av funk, jazz och highlife med skarpa politiska texter.</li>
        <li><strong>Jùjú och Highlife:</strong> Gitarrbaserad dansmusik och komplex trummväv som skapar en tät ljudmatta.</li>
        <li><strong>Call and Response:</strong> En teknik där en försångare ropar och kören svarar, vilket skapar en dialog.</li>
        <li><strong>Afrobeats:</strong> Det moderna fenomenet som dominerar topplistorna idag – en blandning av gamla rytmer, dancehall och R&B.</li>
      </ul>
      <p><em>Nigeriansk musik är stolt, högljudd och omöjlig att sitta still till.</em></p>
    `
    };

    // --- 3. SKAPA INFO-RUTAN (Overlay) ---
    const infoBox = document.createElement('div');
    infoBox.id = 'country-info-box';
    infoBox.style.position = 'absolute';
    infoBox.style.top = '20px';
    infoBox.style.right = '20px'; // Ligger till höger
    infoBox.style.width = '350px';
    infoBox.style.maxHeight = '80vh';
    infoBox.style.background = 'rgba(0, 0, 0, 0.9)'; // Mörk bakgrund
    infoBox.style.color = '#fff';
    infoBox.style.padding = '25px';
    infoBox.style.borderRadius = '15px';
    infoBox.style.border = '1px solid #444';
    infoBox.style.boxShadow = '0 0 20px rgba(0,0,0,0.8)';
    infoBox.style.overflowY = 'auto'; // Scrollbar om texten är lång
    infoBox.style.display = 'none'; // Osynlig från början
    infoBox.style.zIndex = '1000'; // Ligger ovanpå globen
    infoBox.style.fontFamily = 'sans-serif';
    infoBox.style.lineHeight = '1.6';

    // Stäng-knapp
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✖ Stäng';
    closeBtn.style.float = 'right';
    closeBtn.style.background = '#333';
    closeBtn.style.color = 'white';
    closeBtn.style.border = 'none';
    closeBtn.style.padding = '5px 10px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.borderRadius = '5px';
    closeBtn.onclick = () => { infoBox.style.display = 'none'; };

    // Plats för innehåll
    const contentDiv = document.createElement('div');
    infoBox.appendChild(closeBtn);
    infoBox.appendChild(contentDiv);
    container.appendChild(infoBox);

    // --- 4. GLOB-CONTAINER ---
    const globeDiv = document.createElement('div');
    container.appendChild(globeDiv);

    let hoverD = null;

    // --- 5. PRESTANDA-CHECK (Behålls för säkerhet) ---
    function getPerformanceConfig() {
        const cores = navigator.hardwareConcurrency || 4;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CrOS/i.test(navigator.userAgent);

        // Säkerhetsval: Kör low-spec om osäker
        if (cores < 4 || isMobile) return { atmosphere: false, resolution: 1 };
        return { atmosphere: true, resolution: 2 };
    }
    const config = getPerformanceConfig();

    // --- 6. HÄMTA KARTA OCH RITA GLOB ---
    // Vi använder den säkra "Low Poly"-kartan
    const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

    fetch(MAP_URL)
        .then(res => res.json())
        .then(countries => {

            const world = Globe()
                (globeDiv)
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .polygonsData(countries.features)

                // UTSEENDE
                .showAtmosphere(config.atmosphere)
                .pixelRatio(config.resolution)
                .polygonAltitude(0.01)
                .polygonStrokeColor(() => 'rgba(255, 255, 255, 0.3)') // Synliga gränser
                .polygonSideColor(() => 'rgba(0,0,0,0)')

                // FÄRGER (Transparens och Hover)
                .polygonCapColor(d => d === hoverD
                    ? 'rgba(200, 200, 255, 0.4)' // Ljusare vid hover
                    : 'rgba(26, 42, 108, 0.5)'   // Blå transparent i vanliga fall
                )

                // NAMNSKYLTAR
                .polygonLabel(({ properties: d }) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;">
            ${d.NAME} ${countryData[d.NAME] ? '🎵' : ''} </div>
        `)

                // --- HOVER EVENT ---
                .onPolygonHover(d => {
                    hoverD = d;
                    world.polygonCapColor(world.polygonCapColor()); // Tvinga ommålning av färger
                    globeDiv.style.cursor = d ? 'pointer' : 'default';
                })

                // --- KLICK EVENT (Här händer magin) ---
                .onPolygonClick(d => {
                    if (d) {
                        const landNamn = d.properties.NAME; // Hämtar namnet, t.ex. "Sweden"

                        // Kollar om vi har text för detta land
                        if (countryData[landNamn]) {
                            contentDiv.innerHTML = countryData[landNamn]; // Fyll rutan med text
                            infoBox.style.display = 'block'; // Visa rutan
                        } else {
                            // Om vi inte har text för landet
                            contentDiv.innerHTML = `<h3>${landNamn}</h3><p>Ingen musikdata inlagd än...</p>`;
                            infoBox.style.display = 'block';
                        }
                    }
                });

            // Rotera och anpassa storlek
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.3;

            window.addEventListener('resize', () => {
                world.width(window.innerWidth);
                world.height(window.innerHeight);
            });
        });

    return container;
}