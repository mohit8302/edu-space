import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/service/Auth/auth-service.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { provideHttpClient,withFetch } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch())
  ]
});
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = { email: '', password: '' }; // Use an object for cleaner data binding
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']); // Redirect if already logged in
    }
  }

  onSubmit(): void { // No need for event parameter
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.signin(this.user.email, this.user.password).subscribe({
      next: (user) => { // Type the user parameter if you have an IUser interface
        this.isLoading = false;
        if (user) {
           this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Login failed. User information not received.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Login failed. Please try again.'; // Access the error message
        console.error("Login error:", error);
      }
    });
  }
}

