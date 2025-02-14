import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/school.service';
@Component({
  selector: 'app-add-school',
  standalone: false,
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent {
  school = {
    name: '',
    about: '',
    username: '',
    address: '',
    city: '',
    postcode: '',
    contact_number: '',
    email: '',
    country: ''
  };


  constructor(private schoolService: SchoolService) {}
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.schoolService.addSchool(this.school).subscribe((newSchool) => {
        console.log('School added:', newSchool);
        // Reset the form
        form.resetForm();
      });
    }
  }

}
