import { Component } from "@angular/core";
import { TaskItem } from "../../types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})

export class HomeComponent {
  tasks: TaskItem[] = [];

  constructor() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
}
