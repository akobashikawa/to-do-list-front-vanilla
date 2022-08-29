const addTask = require('./addTask');

const buttonAddTask = document.getElementById('button-add-task');
buttonAddTask.onclick = function() {
    const inputNewTask = document.getElementById('input-new-task');
    const newTaskText = inputNewTask.value;
    const newTask = addTask({text: newTaskText});
    console.log(newTask);
};
