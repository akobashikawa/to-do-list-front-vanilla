const tasks = [];

function getTasks() {
    return tasks;
}

function addTask(taskData) {
    const newTask = {...taskData};
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    return newTask;
}

export {getTasks, addTask};