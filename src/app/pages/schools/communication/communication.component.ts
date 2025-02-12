import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


interface Filter {
  category: string;
  value: string;
  color: string;
}

@Component({
  selector: 'app-communication',
  imports: [MatIconModule,CommonModule],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent {
  selectedFilters: Filter[] = [
    { category: 'Schools', value: 'Demo School 01', color: 'blue' },
    { category: 'Message Type', value: 'System not working', color: 'red' },
    { category: 'Location', value: 'Barnes, London', color: 'yellow' },
    { category: 'Location', value: 'Brighton', color: 'yellow' }
  ];

  removeFilter(index: number) {
    this.selectedFilters.splice(index, 1);
  }
}