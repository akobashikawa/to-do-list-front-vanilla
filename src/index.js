import {getTasks, addTask} from './tasks.js';

function main() {
    const buttonAddTask = document.getElementById('button-add-task');
    buttonAddTask.onclick = function() {
        const inputNewTask = document.getElementById('input-new-task');
        const newTaskText = inputNewTask.value;
        addTask({text: newTaskText});
        populateTasksList();
    };

    populateTasksList();
}

function populateTasksList() {
    const tasksList = document.getElementById('list-tasks');
    const tasks = getTasks();
    let tasksListHtml = ``;
    for (let task of tasks) {
        tasksListHtml += `<li>${task.text}</li>`;
    }
    tasksList.innerHTML = tasksListHtml;
};

main();