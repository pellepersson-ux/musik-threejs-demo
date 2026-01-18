export function Ensemble() {
  const container = document.createElement('div');
  container.className = 'page-ensemble';

  // --- STYLING (CSS) ---
  // Vi lägger in CSS direkt här för att göra det enkelt att få snygga hover-effekter
  const style = document.createElement('style');
  style.innerHTML = `
    .ensemble-container {
      padding: 40px;
      background: linear-gradient(135deg, #1e1e2f 0%, #0f0f1a 100%);
      min-height: calc(100vh - 80px); /* Justera efter din header */
      color: white;
      font-family: 'Segoe UI', sans-serif;
    }
    .ensemble-header {
      text-align: center;
      margin-bottom: 50px;
    }
    .ensemble-header h1 {
      font-size: 3rem;
      margin-bottom: 10px;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 25px;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      background: rgba(255, 255, 255, 0.1);
      border-color: #4facfe;
    }
    .card h3 {
      margin-top: 0;
      color: #4facfe;
      font-size: 1.5rem;
    }
    .tag {
      display: inline-block;
      background: #4facfe;
      color: #000;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      font-size: 0.9rem;
      color: #ccc;
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 10px;
    }
  `;
  container.appendChild(style);

  // --- HTML STRUKTUR ---
  const content = document.createElement('div');
  content.className = 'ensemble-container';

  // Rubrik
  const header = document.createElement('div');
  header.className = 'ensemble-header';
  header.innerHTML = `
    <h1>Våra Ensembler</h1>
    <p>Att spela tillsammans är det roligaste som finns. Hitta din grupp här!</p>
  `;
  content.appendChild(header);

  // Lista med Ensembler (DATA)
  // Här kan du enkelt lägga till eller ta bort grupper
  const ensembles = [
    {
      title: "Pop- & Rockband",
      level: "Nybörjare / Fortsättning",
      desc: "Drömmer du om att stå på scen? Vi sätter ihop band där ni får lära er att repa, lyssna på varandra och skriva egna låtar.",
      time: "Måndagar 17:00",
      teacher: "Jonas"
    },
    {
      title: "Skolkören",
      level: "Alla åldrar",
      desc: "Sjung ut med glädje! Vi blandar pop, visa och traditionell körmusik. Inga förkunskaper krävs, bara sånglust.",
      time: "Onsdagar 18:30",
      teacher: "Anna"
    },
    {
      title: "Blåsorkestern",
      level: "Fortsättning",
      desc: "För dig som spelat trumpet, trombon, saxofon eller klarinett i minst ett år. Vi spelar allt från filmmusik till funk.",
      time: "Torsdagar 16:00",
      teacher: "Erik"
    },
    {
      title: "Jazzgruppen",
      level: "Avancerad",
      desc: "Vi dyker ner i jazzens värld med improvisation och samspel. Fokus på standards och egna tolkningar.",
      time: "Tisdagar 19:00",
      teacher: "Maria"
    },
    {
      title: "Slagverksensemble",
      level: "Alla nivåer",
      desc: "Rytm, rytm, rytm! Vi spelar på allt från trumset till marimba och soptunnor. En energikick utan dess like.",
      time: "Måndagar 18:00",
      teacher: "David"
    }
  ];

  // Skapa rutnätet för korten
  const grid = document.createElement('div');
  grid.className = 'grid-container';

  // Loopa igenom datan och skapa HTML för varje kort
  ensembles.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="tag">${item.level}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="info-row">
        <span>🕒 ${item.time}</span>
        <span>👨‍🏫 ${item.teacher}</span>
      </div>
    `;

    // Klick-event (Valfritt: Kan leda till anmälan)
    card.addEventListener('click', () => {
      alert(`Kul att du är intresserad av ${item.title}! Prata med ${item.teacher}.`);
    });

    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);

  return container;
}