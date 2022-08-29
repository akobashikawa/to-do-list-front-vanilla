// /**
//  * @jest-environment jsdom
//  */

// import { addTask } from "./functions.js";

// test('add task', () => {
//     const result = addTask({text: 'Task 1'});
//     expect(result.text).toEqual('Task 1');
//     expect(result.id).toBeTruthy();
// });

const addTask = require('../src/addTask');

describe('Add task function', () => {
    test('it should add a task', () => {
        let input = 'Task 1';
        let output = {id: 123, text: 'Task 1'};
        expect( addTask(input).id ).toBeTruthy();
        expect( addTask(input).text ).toEqual(output.text);
    });
});
