export function Timer() {
    const container = document.createElement('div');
    container.className = 'teacher-timer teacher-only';

    let timeLeft = 300; // 5 minutes default
    let interval;

    container.innerHTML = `
    <div class="timer-display">05:00</div>
    <div class="timer-controls">
      <button class="btn-sm" id="start-timer">Start</button>
      <button class="btn-sm" id="reset-timer">Reset</button>
      <select id="timer-duration">
        <option value="300">5 min</option>
        <option value="600">10 min</option>
        <option value="900">15 min</option>
      </select>
    </div>
  `;

    const display = container.querySelector('.timer-display');
    const startBtn = container.querySelector('#start-timer');
    const resetBtn = container.querySelector('#reset-timer');
    const select = container.querySelector('#timer-duration');

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;
    }

    startBtn.onclick = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
            startBtn.textContent = 'Start';
        } else {
            interval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(interval);
                    alert('Tiden är ute!');
                }
            }, 1000);
            startBtn.textContent = 'Paus';
        }
    };

    resetBtn.onclick = () => {
        clearInterval(interval);
        interval = null;
        startBtn.textContent = 'Start';
        timeLeft = parseInt(select.value);
        updateDisplay();
    };

    select.onchange = () => {
        timeLeft = parseInt(select.value);
        updateDisplay();
    };

    return container;
}
