import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { InputBoxComponent } from "./input-box/input-box.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    InputBoxComponent,
    RouterOutlet,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = "test-task";
}
