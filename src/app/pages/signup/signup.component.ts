import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../core/service/Auth/auth-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email = '';
  password = '';
  username = '';

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService
      .signup(this.email, this.password, this.username)
      .subscribe({
        next: (response) => {
          console.log('Sign Up successful:', response);
          alert("Sign Up Successful.");
        },
        error: (err) => {
          console.error('Sign Up failed:', err);
          alert("Sign Up Faile.");
        },
      });
  }
}
