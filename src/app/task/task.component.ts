import {Component, Input, Output} from "@angular/core";
import { TaskItem } from "../../types";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})

export class TaskComponent {
  @Input() id: number;
  @Input() task: any;
  @Input() index: number;
  @Input() checked: boolean;
  @Input() tasks: TaskItem[];
  @Input() openedTask: string;
  @Input() isModalOpen: boolean;

  constructor() {
    this.id = 0;
    this.index = 0;
    this.tasks = [];
    this.checked = false;
    this.openedTask = "";
    this.isModalOpen = false;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }

    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  checkTask(id: number) {
    for (let task of this.tasks) {
      if (id === task.id) {
        task.isChecked = !task.isChecked;
      }
    }

    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  openChangeModal(task: string) {
    this.isModalOpen = true;
    this.openedTask = task;
  }

  protected readonly Math = Math;
}
