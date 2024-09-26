export class Task {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}