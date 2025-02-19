import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface User {
  title: string;
  firstName: string;
  lastName: string;
  username: string;
  streetAddress: string;
  city: string;
  postcode: string;
  contactNumber: string;
  email: string;
  designation: string;
  logoAvatar?: File;
}

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api/users';
  userForm!: FormGroup;
  isSubmitting = false;
  errorMessage: string = '';
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  suggestedUsernames: string[] = ['user-x993', 'user-x123', 'user-x723', 'usr-1234', 'usr-x723', 'txle-xq99'];
  successMessage: string = "";

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.initializeForm();
  }

  ngOnInit(): void {
    console.log("Component Initialized");
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      title: ['Mr', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      logoAvatar: [null]
    });
  }

  // Add the missing selectSuggestedUsername method
  selectSuggestedUsername(username: string): void {
    this.userForm.patchValue({ username });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  async createUser(userData: FormData): Promise<User> {
    try {
      console.log('Sending request to:', this.apiUrl);
      return await firstValueFrom(this.http.post<User>(this.apiUrl, userData));
    } catch (error) {
      throw error;
    }
  }

  async onSubmit(): Promise<void> {
    console.log("Submit button clicked!");

    if (this.userForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';

      try {
        const formData = new FormData();
        const userData = this.userForm.value;

        // Append all form fields to FormData
        Object.keys(userData).forEach(key => {
          if (key !== 'logoAvatar') {
            formData.append(key, userData[key]);
          }
        });

        // Append file if selected
        if (this.selectedFile) {
          formData.append('logo_avatar', this.selectedFile);
        }

        console.log('Form Data being sent:', Object.fromEntries(formData));

        const newUser = await this.createUser(formData);
        console.log('User created successfully:', newUser);
        this.successMessage = 'User added successfully!';

        this.userForm.reset();
        this.previewUrl = null;
        this.selectedFile = null;
        this.router.navigate(['/users']);

      } catch (error) {
        this.handleError(error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      console.warn("Form is invalid, cannot submit.");
      this.markFormFieldsAsTouched();
    }
  }

  private handleError(error: any): void {
    console.error('Error creating user:', error);

    if (error instanceof HttpErrorResponse) {
      if (error.status === 400) {
        this.errorMessage = 'Please check your input data and try again.';
      } else if (error.status === 409) {
        this.errorMessage = 'Username or email already exists.';
      } else if (error.status === 500) {
        this.errorMessage = 'Server error. Please try again later.';
      } else {
        this.errorMessage = 'An unexpected error occurred. Please try again.';
      }
    } else {
      this.errorMessage = 'Network error. Please check your connection.';
    }
  }

  private markFormFieldsAsTouched(): void {
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return (field?.invalid && field?.touched) || false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.userForm.get(fieldName);

    if (control?.errors) {
      if (control.errors['required']) return `${fieldName} is required`;
      if (control.errors['email']) return 'Invalid email format';
      if (control.errors['minlength']) return `${fieldName} is too short`;
      if (control.errors['pattern']) {
        if (fieldName === 'postcode') return 'Invalid postcode format';
        if (fieldName === 'contactNumber') return 'Invalid phone number format';
      }
    }
    return '';
  }

  onClose(): void {
    if (this.userForm.dirty && confirm('You have unsaved changes. Are you sure you want to leave?')) {
      this.router.navigate(['/users']);
    } else {
      this.router.navigate(['/users']);
    }
  }
}