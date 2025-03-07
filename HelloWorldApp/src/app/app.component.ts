// Step 4: Modify src/app/app.component.ts to use Standalone Component with FormsModule
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';
  siteUrl: string = 'https://www.bridgelabz.com';

  openBridgeLabzSite() {
    window.open(this.siteUrl, '_blank');
  }
}
