import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-strength-box",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./strength-box.component.html",
  styleUrl: "./strength-box.component.css",
})

export class StrengthBoxComponent {
  @Input() passwordStrength: string | null = null;
}
