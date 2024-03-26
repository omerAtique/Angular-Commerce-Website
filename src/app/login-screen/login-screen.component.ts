import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  user: any = {}; // Initialize an empty object or define an interface for the user object

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.user);
  }
}
