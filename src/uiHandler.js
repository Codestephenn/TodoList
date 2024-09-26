export class UIHandler {
    constructor(taskManager, listContainer, inputField, addBtn) {
        this.taskManager = taskManager;
        this.listContainer = listContainer;
        this.inputField = inputField;

        addBtn.addEventListener("click", () => {
            if (inputField.value) {
                this.taskManager.addTask(inputField.value);
                this.renderTasks();
                inputField.value = '';
            } else {
                alert("You must write something!");
            }
        });

        // Event delegation for listContainer
        listContainer.addEventListener("click", (e) => {
            const id = e.target.closest("li")?.dataset.id; // Use closest to find the <li>
            if (e.target.tagName === "LI") {
                this.taskManager.toggleTaskCompletion(id);
            } else if (e.target.tagName === "SPAN") {
                this.taskManager.removeTask(id);
            }
            this.renderTasks();
        });
    }

    renderTasks() {
        this.listContainer.innerHTML = "";
        this.taskManager.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.dataset.id = task.id; // Ensure data-id is set correctly
            if (task.isCompleted) li.classList.add("checked");

            const span = document.createElement("span");
            span.textContent = "\u00d7"; // Delete icon
            li.appendChild(span);
            this.listContainer.appendChild(li);
        });
    }
}