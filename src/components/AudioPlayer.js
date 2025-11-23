export function AudioPlayer(src, label) {
    const container = document.createElement('div');
    container.className = 'audio-player';

    const audio = new Audio(src);
    audio.preload = 'metadata';

    // Global Mute Check
    const isGlobalMute = localStorage.getItem('globalMute') === 'true';
    if (isGlobalMute) audio.volume = 0;

    const btn = document.createElement('button');
    btn.className = 'play-btn';
    btn.innerHTML = '▶️';
    btn.setAttribute('aria-label', `Spela ${label}`);

    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;

    btn.onclick = () => {
        if (audio.paused) {
            // Check global mute again just in case
            if (localStorage.getItem('globalMute') === 'true') {
                audio.volume = 0;
            } else {
                audio.volume = 1;
            }

            audio.play();
            btn.innerHTML = '⏸️';
            btn.setAttribute('aria-label', `Pausa ${label}`);
        } else {
            audio.pause();
            btn.innerHTML = '▶️';
            btn.setAttribute('aria-label', `Spela ${label}`);
        }
    };

    audio.onended = () => {
        btn.innerHTML = '▶️';
        btn.setAttribute('aria-label', `Spela ${label}`);
    };

    container.appendChild(btn);
    container.appendChild(labelSpan);

    return container;
}
