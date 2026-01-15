// --- VIKTIGT: Om sidan blir vit/kraschar, ta bort "//" framför raden nedan: ---
// import Globe from 'globe.gl';

export function WorldMusic() {
  // 1. Skapa huvudcontainern
  const container = document.createElement('div');
  container.className = 'page-world';
  container.style.position = 'relative';
  container.style.width = '100vw'; // Hela bredden
  container.style.height = '100vh'; // Hela höjden
  container.style.overflow = 'hidden';
  container.style.background = '#020207';

  // 2. Skapa div för Globen (Läggs till FÖRST så den hamnar i botten)
  const globeDiv = document.createElement('div');
  globeDiv.style.position = 'absolute';
  globeDiv.style.top = '0';
  globeDiv.style.left = '0';
  globeDiv.style.zIndex = '1'; // Lägst lager
  container.appendChild(globeDiv);

  // 3. Data för länderna (Texten)
  const countryData = {
    "Sweden": `
      <h2 style="color: #4facfe; margin-top: 0;">Svensk folkmusik 🎻</h2>
      <p><strong>En levande tradition.</strong> Svensk folkmusik är sprungen ur det gamla bondesamhället. Musiken kännetecknas av dansglädje och nordiskt vemod.</p>
      <ul>
        <li><strong>Instrument:</strong> Fiol, Nyckelharpa, Dragspel.</li>
        <li><strong>Rytm:</strong> Polskan (tretakt med "sväng").</li>
        <li><strong>Sång:</strong> Kulning (lockrop).</li>
      </ul>
      <p><em>Idag blandas folkmusiken ofta med pop och jazz.</em></p>
    `,
    "Brazil": `
      <h2 style="color: #43e97b; margin-top: 0;">Brasiliansk musik 🥁</h2>
      <p><strong>En rytmisk smältdegel.</strong> Ett möte mellan afrikansk rytmik, portugisisk melodi och indiansk kultur.</p>
      <ul>
        <li><strong>Samba & Choro:</strong> Från gatufester till virtuos gatumusik.</li>
        <li><strong>Instrument:</strong> Pandeiro, Surdo, Cavaquinho.</li>
        <li><strong>Känsla:</strong> Saudade (en djup, vacker längtan).</li>
      </ul>
    `,
    "Nigeria": `
      <h2 style="color: #ffafbd; margin-top: 0;">Nigeriansk musik 🇳🇬</h2>
      <p><strong>Afrikas bultande hjärta.</strong> En explosion av rytm och energi som dominerar världen just nu.</p>
      <ul>
        <li><strong>Afrobeat:</strong> Fela Kutis blandning av funk och jazz.</li>
        <li><strong>Instrument:</strong> The Talking Drum (Gangan).</li>
        <li><strong>Modern stil:</strong> Afrobeats (Pop/R&B-mix).</li>
      </ul>
    `
  };

  // 4. Skapa Info-rutan (Overlay - Läggs till EFTER globen)
  const infoBox = document.createElement('div');
  infoBox.style.position = 'absolute';
  infoBox.style.top = '80px'; // Lite ner från toppen (så den inte täcker menyn)
  infoBox.style.right = '20px';
  infoBox.style.width = '300px';
  infoBox.style.padding = '20px';
  infoBox.style.background = 'rgba(15, 23, 42, 0.95)'; // Mörkblå/svart bakgrund
  infoBox.style.color = '#e2e8f0';
  infoBox.style.borderRadius = '12px';
  infoBox.style.border = '1px solid #334155';
  infoBox.style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
  infoBox.style.display = 'none'; // Gömd tills man klickar
  infoBox.style.zIndex = '100'; // Högt lager så den ligger ovanpå
  infoBox.style.fontFamily = "'Segoe UI', sans-serif";
  infoBox.style.lineHeight = '1.5';

  // Stäng-knapp inuti rutan
  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✖';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '10px';
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.color = '#94a3b8';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '1.2rem';
  closeBtn.onclick = () => { infoBox.style.display = 'none'; };

  const contentDiv = document.createElement('div');
  infoBox.appendChild(closeBtn);
  infoBox.appendChild(contentDiv);
  container.appendChild(infoBox);

  // 5. Initiera Globen
  let hoverD = null;
  const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

  fetch(MAP_URL)
    .then(res => res.json())
    .then(countries => {

      const world = Globe()
        (globeDiv)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .polygonsData(countries.features)

        // --- DESIGN ---
        .polygonAltitude(0.01)
        .polygonSideColor(() => 'rgba(0,0,0,0)')
        .polygonStrokeColor(() => 'rgba(255,255,255,0.3)') // Ljusare gränser
        .showAtmosphere(true) // Sätt till false om det laggar

        // --- FÄRGER ---
        .polygonCapColor(d => d === hoverD
          ? 'rgba(255, 255, 255, 0.3)' // Hover färg (vit ghost)
          : 'rgba(26, 42, 108, 0.6)'   // Vanlig färg (blå, 60% synlig)
        )

        // --- ETIKETTER (När man hovrar) ---
        .polygonLabel(({ properties: d }) => `
          <div style="background: rgba(0,0,0,0.8); color: white; padding: 5px 10px; border-radius: 4px; font-family: sans-serif;">
            <b>${d.NAME}</b> ${countryData[d.NAME] ? '🎵' : ''}
          </div>
        `)

        // --- INTERAKTION ---
        .onPolygonHover(d => {
          hoverD = d;
          world.polygonCapColor(world.polygonCapColor()); // Rita om färger
          globeDiv.style.cursor = d ? 'pointer' : 'default';
        })
        .onPolygonClick(d => {
          if (d) {
            const name = d.properties.NAME;
            // Kolla om vi har text, annars visa standardtext
            if (countryData[name]) {
              contentDiv.innerHTML = countryData[name];
            } else {
              contentDiv.innerHTML = `<h3 style="margin-top:0;">${name}</h3><p>Ingen musikdata registrerad.</p>`;
            }
            infoBox.style.display = 'block'; // Visa rutan
          }
        });

      // --- VIKTIGT: Tvinga storleken direkt ---
      world.width(window.innerWidth);
      world.height(window.innerHeight);

      // Uppdatera storlek om fönstret ändras
      window.addEventListener('resize', () => {
        world.width(window.innerWidth);
        world.height(window.innerHeight);
      });
    });

  return container;
}