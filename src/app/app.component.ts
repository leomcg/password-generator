import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLowercase = false;
  includeUppercase = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '123456789';
    const lowercase = 'abcdefghijlmnopqrstuwvxyz';
    const uppercase = 'ABCDEFGHIJLMNOPQRSTUVXZWY';
    const symbols = '!@#$%&*-+?';

    let validChars = '';
    if (this.includeLowercase) {
      validChars += lowercase;
    }
    if(this.includeUppercase) {
      validChars += uppercase;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = +value;
    }
  }

  onChangeUseUppercase() {
    this.includeUppercase = !this.includeUppercase;
  }

  onChangeUseLowercase() {
    this.includeLowercase = !this.includeLowercase;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

}


