let totalTasks = 0; 
let completedTasks = 0;

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    totalTasks++;

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.color = '#6c757d';
            completedTasks++;
        } else {
            li.style.textDecoration = 'none'; 
            li.style.color = '#343a40'; 
            completedTasks--; 
        }

    
        if (completedTasks === totalTasks) {
            alert('All tasks completed!');
        }
    };

    const textNode = document.createTextNode(taskText);
    li.appendChild(checkbox);
    li.appendChild(textNode);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        if (checkbox.checked) {
            completedTasks--;
        }
        li.remove();
    };
    
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; 
});