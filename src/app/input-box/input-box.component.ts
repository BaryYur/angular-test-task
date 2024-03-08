import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StrengthBoxComponent } from "../strength-box/strength-box.component";
import { InputComponent } from "../input/input.component";

import { CheckingPasswordService } from "../services/checking-password.service";

@Component({
  selector: "app-input-box",
  standalone: true,
  imports: [CommonModule, StrengthBoxComponent, FormsModule, InputComponent],
  templateUrl: "./input-box.component.html",
  styleUrl: "./input-box.component.css",
})

export class InputBoxComponent {
  password: string;
  inputType: string;
  passwordStrength: string;

  constructor(private checkingService: CheckingPasswordService) {
    this.password = "";
    this.inputType = "password";
    this.passwordStrength = "empty";
  }

  inputChangeHandler() {
    this.passwordStrength = this.checkingService.checkPasswordStrength(this.password);
  }

  changeInputType() {
    this.inputType === "password" ? this.inputType = "text" : this.inputType = "password";
  }
}
