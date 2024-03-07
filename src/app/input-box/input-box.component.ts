import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-input-box",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./input-box.component.html",
  styleUrl: "./input-box.component.css",
})

export class InputBoxComponent {
  password: string;
  inputType: string;
  passwordStrength: "empty" | "short" | "weak" | "medium" | "strong";

  constructor() {
    this.password = "";
    this.inputType = "password";
    this.passwordStrength = "empty";
  }

  inputChangeHandler(password: string) {
    let letters = false;
    let marks = false;
    let numbers = false;

    if (password.length >= 8) {
      if (/\d/.test(password)) numbers = true;
      if (/[a-zA-Z]/.test(password)) letters = true;
      if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) marks = true;

      if (letters && marks && numbers) {
        this.passwordStrength = "strong";
      } else if ((letters && marks && !numbers) || (letters && numbers && !marks) || (marks && numbers && !letters)) {
        this.passwordStrength = "medium";
      } else if ((letters && !marks && !numbers) || (numbers && !letters && !marks) || (marks && !numbers && !letters)) {
        this.passwordStrength = "weak";
      }
    } else if (password.length > 0 && password.length < 8) {
      this.passwordStrength = "short";
    } else if (password.length === 0) {
      this.passwordStrength = "empty";
    }
  }

  changeInputType() {
    this.inputType === "password" ? this.inputType = "text" : this.inputType = "password";
  }
}
