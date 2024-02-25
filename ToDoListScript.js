const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete" onclick="deleteTask(this)">❌</span>
            <span class="edit" onclick="editTask(this)">✎</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(span) {
    const li = span.parentElement;
    li.remove();
}

// Function to edit a task
function editTask(span) {
    const li = span.parentElement;
    const taskText = li.querySelector('span:first-child').textContent;
    const newText = prompt('Edit Task:', taskText);
    if (newText !== null && newText.trim() !== '') {
        li.querySelector('span:first-child').textContent = newText.trim();
    }
}