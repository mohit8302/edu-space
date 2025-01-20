import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  // Define the array of colors
  colors: string[] = ['#4880FF', '#FFB800', '#00B69B', '#FF3334'];
  
  // Variable to hold the randomly selected color
  randomColor: string = '';

  ngOnInit(): void {
    // Generate a random index to pick a color from the array
    this.randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  // Boolean flag to toggle the full text visibility
  isFullTextVisible: boolean = false;

  // Toggle the visibility of the full text
  toggleTextVisibility(): void {
    this.isFullTextVisible = !this.isFullTextVisible;
  }
}
