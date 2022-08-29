/**
 * @jest-environment jsdom
 */

import { addTask } from "./addTask.js";

test('add task', () => {
    const result = addTask({text: 'Task 1'});
    expect(result.id).toBeTruthy();
    expect(result.text).toEqual('Task 1');
});
