import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface School {
  name: string;
  status: string;
  attendance: string;
  location: string;
  date1: string;
  date2: string;
}

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent {
  schools: School[] = [
    {
      name: 'Demo School 01',
      status: 'Active',
      attendance: 'High',
      location: 'Location 1',
      date1: '2024-09-09',
      date2: '2024-09-09',
    },
    {
      name: 'Demo School 02',
      status: 'Inactive',
      attendance: 'Medium',
      location: 'Location 2',
      date1: '2024-10-10',
      date2: '2024-10-10',
    },
    {
      name: 'Demo School 03',
      status: 'Active',
      attendance: 'Low',
      location: 'Location 3',
      date1: '2024-11-11',
      date2: '2024-11-11',
    },
    {
      name: 'Demo School 04',
      status: 'Active',
      attendance: 'High',
      location: 'Location 1',
      date1: '2024-12-12',
      date2: '2024-12-12',
    },
    {
      name: 'Demo School 05',
      status: 'Inactive',
      attendance: 'Medium',
      location: 'Location 2',
      date1: '2025-01-01',
      date2: '2025-01-01',
    },
    {
      name: 'Demo School 06',
      status: 'Active',
      attendance: 'Low',
      location: 'Location 3',
      date1: '2025-02-02',
      date2: '2025-02-02',
    },
    {
      name: 'Demo School 07',
      status: 'Inactive',
      attendance: 'High',
      location: 'Location 1',
      date1: '2025-03-03',
      date2: '2025-03-03',
    },
    {
      name: 'Demo School 08',
      status: 'Active',
      attendance: 'Medium',
      location: 'Location 2',
      date1: '2025-04-04',
      date2: '2025-04-04',
    },
  ];

  filteredSchools: School[] = [...this.schools];

  isStatusDropdownOpen = false;
  isAttendanceDropdownOpen = false;
  isLocationDropdownOpen = false;

  toggleDropdown(dropdown: string): void {
    console.log('Toggling dropdown:', dropdown);
    console.log(
      'Status before:',
      this.isStatusDropdownOpen,
      this.isAttendanceDropdownOpen,
      this.isLocationDropdownOpen
    );
    if (dropdown === 'status') {
      this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
      this.isAttendanceDropdownOpen = false;
      this.isLocationDropdownOpen = false;
    } else if (dropdown === 'attendance') {
      this.isAttendanceDropdownOpen = !this.isAttendanceDropdownOpen;
      this.isStatusDropdownOpen = false;
      this.isLocationDropdownOpen = false;
    } else if (dropdown === 'location') {
      this.isLocationDropdownOpen = !this.isLocationDropdownOpen;
      this.isStatusDropdownOpen = false;
      this.isAttendanceDropdownOpen = false;
    }
    console.log(
      'Status after:',
      this.isStatusDropdownOpen,
      this.isAttendanceDropdownOpen,
      this.isLocationDropdownOpen
    );
  }

  filterByStatus(status: string) {
    this.filteredSchools = status
      ? this.schools.filter((school) => school.status === status)
      : [...this.schools];
    this.isStatusDropdownOpen = false;
  }

  filterByAttendance(attendance: string) {
    this.filteredSchools = attendance
      ? this.schools.filter((school) => school.attendance === attendance)
      : [...this.schools];
    this.isAttendanceDropdownOpen = false;
  }

  filterByLocation(location: string) {
    this.filteredSchools = location
      ? this.schools.filter((school) => school.location === location)
      : [...this.schools];
    this.isLocationDropdownOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isStatusDropdownOpen = false;
      this.isAttendanceDropdownOpen = false;
      this.isLocationDropdownOpen = false;
    }
  }
}
