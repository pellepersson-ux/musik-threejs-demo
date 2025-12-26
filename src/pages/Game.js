export function Game() {
    const section = document.createElement('section');
    section.className = 'page-game';
    section.style.textAlign = 'center';

    section.innerHTML = `
    <h1>Musik-klickaren 🎮</h1>
    <p>Fånga rytmen! Klicka på knappen för att samla poäng.</p>
    
    <div id="game-area" style="
      margin: 30px auto; 
      padding: 40px;
      background: #f0f0f0;
      border-radius: 15px;
      max-width: 400px;
      border: 3px dashed #646cff;
    ">
      <button id="start-btn" style="padding: 15px 30px; font-size: 1.3rem; cursor: pointer;">Starta!</button>
    </div>
    
    <h2 id="score">Poäng: 0</h2>
  `;

    // Lite enkel spellogik
    const btn = section.querySelector('#start-btn');
    const scoreBoard = section.querySelector('#score');
    let score = 0;

    btn.addEventListener('click', () => {
        score++;
        scoreBoard.innerText = `Poäng: ${score} 🎵`;
        btn.innerText = "Klicka igen!";

        // Byt färg slumpmässigt för effekt
        const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        section.querySelector('#game-area').style.backgroundColor = randomColor;
    });

    return section;
}