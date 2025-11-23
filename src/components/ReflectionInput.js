export function ReflectionInput(id) {
    const container = document.createElement('div');
    container.className = 'reflection-input';

    const label = document.createElement('label');
    label.textContent = 'Min reflektion (sparas automatiskt):';
    label.htmlFor = `reflection-${id}`;

    const textarea = document.createElement('textarea');
    textarea.id = `reflection-${id}`;
    textarea.placeholder = 'Vad lärde du dig idag?';

    // Load today's reflection if exists
    const today = new Date().toLocaleDateString();
    const key = `reflection_${id}_${today}`;
    textarea.value = localStorage.getItem(key) || '';

    textarea.oninput = (e) => {
        localStorage.setItem(key, e.target.value);
    };

    container.appendChild(label);
    container.appendChild(textarea);

    return container;
}
