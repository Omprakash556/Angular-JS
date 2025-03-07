import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [FormsModule, CommonModule], // Import FormsModule and CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';
  siteUrl: string = 'https://www.bridgelabz.com';
  errorMessage: string = '';

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{1,}$/; // Initial capital and at least 3 letters
    if (!namePattern.test(this.userName)) {
      this.errorMessage = 'Invalid Name! Name should start with a capital letter and have at least 3 characters.';
    } else {
      this.errorMessage = '';
    }
  }

  openBridgeLabzSite() {
    window.open(this.siteUrl, '_blank');
  }
}