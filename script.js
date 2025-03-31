document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        return listItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = createTaskItem(taskText);
            taskList.appendChild(listItem);
            taskInput.value = ''; 

          
            listItem.querySelector('.complete-btn').addEventListener('click', completeTask);
            listItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
        }
    }

    function completeTask() {
        this.parentNode.classList.toggle('completed');
    }

    function deleteTask() {
        this.parentNode.remove();
    }

    addTaskBtn.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});