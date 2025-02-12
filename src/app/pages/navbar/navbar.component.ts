import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../core/models/Interface/IUser';
import { AuthService } from '../../core/service/Auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  showMenu = false;
  isLoggedIn = false;
  userName: string | null = null;
  currentUser: IUser | null = null;
  private userSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser$.subscribe((user: IUser | null) => {
      this.isLoggedIn = !!user;
      this.currentUser = user;
      this.userName = user?.username ?? null ;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  logout(): void {
    this.authService.logout();
    this.showMenu = false;
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.profileIconContainer')) {
      this.showMenu = false;
    }
  }

  private handleAuthError(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/']);
    this.showMenu = false;
  }

  navigateToSettings(): void {
    this.router.navigate(['/settings']);
    this.showMenu = false;
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
    this.showMenu = false;
  }
  performSearch(query: string): void {
    if (query.trim()) {
      // Implement search logic here, e.g., routing to a search results page
      console.log('Searching for:', query);
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
  
}
