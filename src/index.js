import "./style.css";
import { TaskManager } from './taskManager.js';
import { Storage } from './storage.js';
import { UIHandler } from './uiHandler.js';

// Initializing the application
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field");
    const listContainer = document.getElementById("list-container");
    const addBtn = document.getElementById("add-button");
    
    const storage = new Storage();
    const taskManager = new TaskManager(storage);
    const uiHandler = new UIHandler(taskManager, listContainer, inputField, addBtn);
    uiHandler.renderTasks();
});
