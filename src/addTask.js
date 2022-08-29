function getNextId() {
    return Math.ceil(Math.random()*10);
}

function addTask(text) {
    const id = getNextId();
    return {id, text};
}

module.exports = addTask;