import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/service/Auth/auth-service.service';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user = { email: '', password: '', username: '' }; // Use an object
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {  // No event parameter needed
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.signup(this.user.email, this.user.password, this.user.username).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Signup failed. Please try again.';
        console.error("Signup error:", error);
      }
    });
  }
}

