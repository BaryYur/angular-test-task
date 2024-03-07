import { Component, Input } from "@angular/core";
import { TaskItem } from "../../types";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})

export class FormComponent {
  @Input() newTask: string;
  @Input() tasks: TaskItem[];

  constructor() {
    this.newTask = "";
    this.tasks = [];
  }

  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks.unshift({
        id: Math.random(),
        index: this.tasks.length,
        title: this.newTask,
        isChecked: false,
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      this.newTask = "";
    }
  }
}
