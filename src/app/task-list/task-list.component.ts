import { Component, Input } from "@angular/core";
import { TaskItem } from "../../types";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})

export class TaskListComponent {
  @Input() tasks: TaskItem[];

  constructor() {
    this.tasks = [];
  }
}
