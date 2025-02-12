import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-school',
  standalone: false,
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent {
  school = {
    name: '',
    aboutschool: '',
    phone: '',
    username:'',
    city: '',
    postcode: '',
    email: '',
    streetaddress: '',
    country: '',    
  };

  onSubmit(schoolForm: NgForm) {
    if (schoolForm.valid) {
      console.log('Form Submitted!', this.school);
      // Add your form submission logic here
    }
  }
}
