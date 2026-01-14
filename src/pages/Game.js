export function Game() {
  const section = document.createElement('section');
  section.className = 'page-game';
  section.style.textAlign = 'center';
  section.style.height = 'calc(100vh - 80px)';
  section.style.overflow = 'hidden';
  section.style.background = 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)';
  section.style.color = '#fff';
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.justifyContent = 'center';
  section.style.alignItems = 'center';

  // --- Ljudmotor (Web Audio API) ---
  let audioCtx;
  function playTone() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Slumpa frekvens (tonhöjd)
    const freqs = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
    osc.frequency.value = freqs[Math.floor(Math.random() * freqs.length)];

    osc.type = 'triangle';

    // Volymkurva (fade out)
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  }

  section.innerHTML = `
    <style>
      .game-title {
        font-family: 'Outfit', sans-serif;
        font-size: 3rem;
        text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        margin-bottom: 10px;
      }
      .rank-display {
        font-family: monospace;
        font-size: 1.2rem;
        background: rgba(0,0,0,0.4);
        padding: 5px 15px;
        border-radius: 20px;
        margin-bottom: 40px;
      }
      
      .drum-pad {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, #4facfe, #00f2fe);
        border: 8px solid rgba(255,255,255,0.3);
        box-shadow: 0 0 30px rgba(0, 242, 254, 0.6), inset 0 0 20px rgba(255,255,255,0.5);
        cursor: pointer;
        transition: transform 0.1s, box-shadow 0.1s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        user-select: none;
      }

      .drum-pad:active {
        transform: scale(0.9);
        box-shadow: 0 0 10px rgba(0, 242, 254, 0.8);
      }

      .pulse-anim {
        animation: pulse 0.3s ease-out;
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      .score-board {
        margin-top: 40px;
        font-size: 2rem;
        font-weight: bold;
      }
    </style>

    <h1 class="game-title">Rytm-Maskinen 🥁</h1>
    <div class="rank-display">Rank: <span id="rank-text">Publik</span></div>

    <div id="pad" class="drum-pad">🎵</div>
    
    <div class="score-board">Poäng: <span id="score">0</span></div>
    <p style="opacity: 0.8; margin-top: 10px;">Klicka i takt för att skapa musik!</p>
  `;

  // --- Spellogik ---
  const pad = section.querySelector('#pad');
  const scoreSpan = section.querySelector('#score');
  const rankText = section.querySelector('#rank-text');

  let score = 0;

  const titles = [
    { limit: 0, text: "Publik" },
    { limit: 10, text: "Roadie 🔌" },
    { limit: 25, text: "Trummis 🥁" },
    { limit: 50, text: "Gitarrist 🎸" },
    { limit: 100, text: "Rockstjärna ⭐" },
    { limit: 200, text: "Legend 👑" }
  ];

  pad.addEventListener('click', () => {
    score++;
    scoreSpan.innerText = score;
    playTone();

    const currentTitle = titles.slice().reverse().find(t => score >= t.limit);
    if (currentTitle) {
      rankText.innerText = currentTitle.text;
    }

    pad.classList.remove('pulse-anim');
    void pad.offsetWidth;
    pad.classList.add('pulse-anim');

    if (score % 5 === 0) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      pad.style.background = `radial-gradient(circle at 30% 30%, rgb(${r},${g},${b}), #000)`;
    }
  });

  return section;
}