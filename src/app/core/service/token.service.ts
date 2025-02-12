//token.service.ts
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private get inBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getAccessToken(): string | null {
    if (this.inBrowser) {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  setAccessToken(token: string): void {
    if (this.inBrowser) {
      localStorage.setItem('access_token', token);
    }
  }

  getRefreshToken(): string | null {
    if (this.inBrowser) {
      return localStorage.getItem('refresh_token');
    }
    return null;
  }

  setRefreshToken(token: string): void {
    if (this.inBrowser) {
      localStorage.setItem('refresh_token', token);
    }
  }

  clear(): void {
    if (this.inBrowser) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }
}
