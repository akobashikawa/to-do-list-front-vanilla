import { addTask } from "./functions.js";

const buttonAddTask = document.getElementById('button-add-task');
buttonAddTask.onclick = function() {
    const inputNewTask = document.getElementById('input-new-task');
    const newTaskText = inputNewTask.value;
    addTask({text: newTaskText});
};
