import { Task } from './task.js';

export class TaskManager {
    constructor(storage) {
        this.tasks = storage.getTasks();
        this.storage = storage;
    }

    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.storage.saveTasks(this.tasks);
    }

    toggleTaskCompletion(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id == id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        this.storage.saveTasks(this.tasks);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
        this.storage.saveTasks(this.tasks);
    }
}