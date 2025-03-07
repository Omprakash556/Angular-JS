// Step 4: Modify src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello from BridgeLabz';
  logoUrl: string = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';
  siteUrl: string = 'https://www.bridgelabz.com';

  openBridgeLabzSite() {
    window.open(this.siteUrl, '_blank');
  }
}