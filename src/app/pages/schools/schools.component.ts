import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SchoolService } from '../../core/service/school.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent {
  schools: any[] = [];

    constructor(private schoolService: SchoolService) {}

    ngOnInit(): void {
        this.schoolService.getSchools().subscribe(
            (data) => {
                this.schools = data;
            },
            (error) => {
                console.error('Error fetching schools:', error);
            }
        );
    }
}
