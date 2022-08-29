const addTask = require('../src/addTask');

describe('Add task function', () => {
    test('it should add a task', () => {
        let input = 'Task 1';
        let output = {id: 123, text: 'Task 1'};
        expect( addTask(input).id ).toBeTruthy();
        expect( addTask(input).text ).toEqual(output.text);
    });
});
