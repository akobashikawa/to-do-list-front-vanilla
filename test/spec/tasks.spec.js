import { addTask, getTasks } from "../../src/tasks.js";

describe('Tasks List', function() {
    it('list tasks', function() {
        const result = getTasks();
        expect(Array.isArray(result)).toBeTruthy();
    });
    
    it('add task', function() {
        const result = addTask({text: 'Task 1'});
        expect(result.text).toEqual('Task 1');
        expect(result.id).toBeTruthy();
    });
});

export default {};