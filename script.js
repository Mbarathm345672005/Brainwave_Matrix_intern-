document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
        completeBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById('tasks').appendChild(li);

    document.getElementById('new-task').value = '';
});

document.getElementById('tasks').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        const completeBtn = e.target.querySelector('button');
        completeBtn.textContent = e.target.classList.contains('completed') ? 'Undo' : 'Complete';
    }
});
