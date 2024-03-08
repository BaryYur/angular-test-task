import { Component, forwardRef, Input, Output, EventEmitter } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.css",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})

export class InputComponent implements ControlValueAccessor {
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Output() valueChanged = new EventEmitter<string>();

  onChange: any = () => {}
  onTouched: any = () => {}

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.valueChanged.emit(this.value);
  }
}
