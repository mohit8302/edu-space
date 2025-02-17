import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  standalone: false,
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {
  isAddSchoolVisible = false;

  handleClose(): void {
    this.isAddSchoolVisible = false;
  }

  handleAddSchool(): void {
    this.isAddSchoolVisible = true;
  }
}
