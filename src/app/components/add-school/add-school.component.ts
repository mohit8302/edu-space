import { Component , EventEmitter , Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/school.service';
@Component({
  selector: 'app-add-school',
  standalone: false,
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent {
  @Output() closeModel = new EventEmitter<void>();

  school = {
    name: '',
    about: '',
    username: '',
    address: '',
    city: '',
    postcode: '',
    contact_number: '',
    email: '',
    country: '',
    themeColor: '#000000', // Default color
    PrimaryColor: '#000000', // Default color
    SecondaryColor: '#000000' // Default color
  };

  constructor(private schoolService: SchoolService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.schoolService.addSchool(this.school).subscribe((newSchool) => {
        console.log('School added:', newSchool);
        alert('School added successfully');
        form.resetForm();
      });
    }
  }


  closeModal(): void {
    console.log('Model closed');
    this.closeModel.emit();
  }
}
