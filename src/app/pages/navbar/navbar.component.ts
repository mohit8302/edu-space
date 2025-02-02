import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.profileIconContainer')) {
      this.showMenu = false;
    }
  }
}
