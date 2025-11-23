export function TaskCheckbox(taskId, labelText) {
    const container = document.createElement('label');
    container.className = 'task-checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = taskId;

    // Load state
    const savedState = localStorage.getItem(`task_${taskId}`);
    if (savedState === 'true') {
        checkbox.checked = true;
    }

    const span = document.createElement('span');
    span.textContent = labelText;

    checkbox.onchange = (e) => {
        localStorage.setItem(`task_${taskId}`, e.target.checked);

        // Optional: Add a satisfying sound or animation here
        if (e.target.checked) {
            container.classList.add('completed');
        } else {
            container.classList.remove('completed');
        }
    };

    container.appendChild(checkbox);
    container.appendChild(span);

    return container;
}
