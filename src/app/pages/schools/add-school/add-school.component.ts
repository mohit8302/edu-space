import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-school',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './add-school.component.html',
 styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent {
  @ViewChild('schoolForm') schoolForm!: NgForm;

  school = {
      name: '',
      aboutschool: '',
      phone: '',
      username: '',
      city: '',
      postcode: '',
      email: '',
      streetaddress: '',
      country: '',
      theme_colors: '#CBCBCB'
  };

  selectedFile: File | null = null;
  previewImage: SafeUrl | null = null;


  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  onSubmit(form: NgForm) {
      if (form.invalid) {
          alert('Please fill in all required fields.');
          return;
      }

      const formData = new FormData();
      Object.keys(this.school).forEach(key => {
          formData.append(key, this.school[key as keyof typeof this.school]);
      });

      if (this.selectedFile) {
          formData.append('logo', this.selectedFile, this.selectedFile.name);
      }

      this.http.post('http://localhost:3000/api/schools', formData).subscribe({
          next: (response) => {
              console.log('School data submitted successfully:', response);
              alert('School data submitted successfully!');
              form.resetForm();
              this.previewImage = null;
              this.selectedFile = null;
          },
          error: (error) => {
              console.error('Error submitting school data:', error);

              let errorMessage = 'An error occurred while submitting the school data.';
              if (error.error && error.error.message) {
                  errorMessage = error.error.message;
              } else if (error.message) {
                  errorMessage = error.message;
              }

              alert(errorMessage);
          }
      });
  }

  onSave(form: NgForm) {
      this.onSubmit(form);
  }


  onFileSelected(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (file) {
          this.selectedFile = file;
          const reader = new FileReader();
          reader.onload = () => {
              this.previewImage = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          };
          reader.readAsDataURL(file);
      }
  }

  onReset() {
      this.school = {
          name: '',
          aboutschool: '',
          phone: '',
          username: '',
          city: '',
          postcode: '',
          email: '',
          streetaddress: '',
          country: '',
          theme_colors: '#CBCBCB'
      };
      this.previewImage = null;
      this.selectedFile = null;
      this.schoolForm.resetForm();
  }

  changeThemeColor(color: string) {
      this.school.theme_colors = color;
  }
}