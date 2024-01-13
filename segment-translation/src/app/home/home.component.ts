import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Chinese from 'chinese-s2t';

import { sanitizeString, ignoreWords } from './home.utils.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('inputTextarea') inputTextarea!: ElementRef;
  @ViewChild('outputBody') outputBody!: ElementRef;
  hasResult = false;

  calculate() {
    // Get the input value from the textarea
    const inputText = this.inputTextarea?.nativeElement.value;
    if (!inputText) {
      return;
    }
    this.hasResult = true;

    // translate here
    const simplifiedString = Chinese.t2s(sanitizeString(inputText));
    console.log('simplifiedString', simplifiedString);

    // Split inputText into lines
    const inputLines = inputText.split('\n');
    console.log('outputBody', this.outputBody);

    // Clear previous results
    const outputBody = this.outputBody.nativeElement;
    outputBody.innerHTML = '';

    // Process each line and add a new row for each result
    inputLines.forEach((line: string) => {
      // Perform your calculation logic here (replace this with your own logic)
      const result = eval(line);

      // Create a new row in the output table
      const newRow = document.createElement('tr');
      const newCell = document.createElement('td');
      newCell.innerText = result;
      newRow.appendChild(newCell);

      // Append the new row to the output table body
      outputBody.appendChild(newRow);

      console.log('outputBody', this.outputBody);
    });
  }
}
