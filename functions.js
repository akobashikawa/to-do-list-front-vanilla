function addTask(taskData) {
    const newTask = {...taskData};
    newTask.id = 1;
    return newTask;
}

export {addTask};