// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: boolean = false;

  constructor() {}

  // Getter for isAuthenticated
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  // Setter for isAuthenticated
  set isAuthenticated(status: boolean) {
    this._isAuthenticated = status;
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  // Other methods
  getAuthToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}
