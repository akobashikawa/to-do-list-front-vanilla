/**
 * @jest-environment jsdom
 */

import { addTask } from "./functions.js";

test('add task', () => {
    const result = addTask({text: 'Task 1'});
    expect(result.text).toEqual('Task 1');
    expect(result.id).toBeTruthy();
});
