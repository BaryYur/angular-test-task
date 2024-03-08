import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckingPasswordService {

  constructor() { }

  checkPasswordStrength(password: string) {
    let passwordStrength = "empty";
    let letters = false;
    let marks = false;
    let numbers = false;

    if (password.length >= 8) {
      if (/\d/.test(password)) numbers = true;
      if (/[a-zA-Zа-яА-Я]/.test(password)) letters = true;
      if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) marks = true;

      if (letters && marks && numbers) {
        passwordStrength = "strong";
      } else if ((letters && marks && !numbers) || (letters && numbers && !marks) || (marks && numbers && !letters)) {
        passwordStrength = "medium";
      } else if ((letters && !marks && !numbers) || (numbers && !letters && !marks) || (marks && !numbers && !letters)) {
        passwordStrength = "weak";
      }
    } else if (password.length > 0 && password.length < 8) {
      passwordStrength = "short";
    } else if (password.length === 0) {
      passwordStrength = "empty";
    }

    return passwordStrength;
  }
}
