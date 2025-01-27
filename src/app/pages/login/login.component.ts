import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../core/service/Auth/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Import HttpClientModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  username = '';

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.signin(this.email, this.password).subscribe({
      next: (response) => {
        alert("Login Successful");
        console.log('Login successful:', response);
      },
      error: (err) => {
        alert("Login Failed");
        console.error('Login failed:', err);
      },
    });
  }
}
