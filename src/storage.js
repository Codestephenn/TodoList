export class Storage {
    getTasks() {
        return JSON.parse(localStorage.getItem("Tasks")) || [];
    }

    saveTasks(tasks) {
        localStorage.setItem("Tasks", JSON.stringify(tasks));
    }
}