import { addTask } from "../../src/addTask.js";

describe('Tasks', function() {
    it('add task', function() {
        const result = addTask({text: 'Task 1'});
        expect(result.text).toEqual('Task 1');
        expect(result.id).toBeTruthy();
    });
});

export default {};