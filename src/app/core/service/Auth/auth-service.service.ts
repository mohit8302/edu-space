import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser, LoginResponse, SignupRequest } from '../../models/Interface/IUser'; // Import your interfaces
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Use your backend URL
  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.loadUserDetails().subscribe({
      error: () => {
        this.logout();
      },
    });
  }

  signup(email: string, password: string, username: string): Observable<any> { // Return Observable<any> or a more specific type
    const payload: SignupRequest = { email, password, username };
    return this.http.post(`${this.apiUrl}/signup`, payload).pipe( // No need for <LoginResponse>
      catchError(this.handleError)
    );
  }

  signin(email: string, password: string): Observable<IUser | null> {
    if (!email || !password) {
      return throwError(() => new Error('Email and password are required'));
    }

    const payload = { email, password };

    return this.http.post<any>(`${this.apiUrl}/login`, payload).pipe( // No need for <LoginResponse>
      tap((response: any) => { // Response is now of type any
        if (response && response.token) { // Check if response and token exist
          this.tokenService.setAccessToken(response.token);
          this.loadUserDetails().subscribe(); // Load user details after login
        } else {
          throw new Error('Invalid login response. Token not found.'); // Handle missing token
        }
      }),
      tap((user: IUser | null) => { // Update currentUserSubject
        this.currentUserSubject.next(user);
        console.log("User after login:", this.currentUserSubject.value);
      }),
      catchError(this.handleError)
    );
  }

  getUserDetails(): Observable<IUser> {
    const token = this.tokenService.getAccessToken();

    if (!token) {
      return throwError(() => new Error('No authentication token available'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<IUser>(`${this.apiUrl}/users`, { headers }).pipe(
      tap((user: IUser) => this.currentUserSubject.next(user)),
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
          this.logout();
        }
        return throwError(() => error);
      })
    );
  }

  loadUserDetails(): Observable<IUser> {
    if (!this.tokenService.getAccessToken()) {
      return of(null as unknown as IUser);
    }
    return this.getUserDetails();
  }

  logout(): void {
    this.tokenService.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getAccessToken();
  }

  getCurrentUser(): IUser | null {
    return this.currentUserSubject.value;
  }

  private handleAuthSuccess(response: LoginResponse): void {
    if (response.access_token) {
      this.tokenService.setAccessToken(response.access_token);

      if (response.refresh_token) {
        this.tokenService.setRefreshToken(response.refresh_token);
      }

      if (response.user) {
        this.currentUserSubject.next(response.user);
      } else {
        this.loadUserDetails().subscribe();
      }
    }
  }

  private handleError(error: HttpErrorResponse) { // Improved error handling
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.error && error.error.message) { // Check for message from backend
      errorMessage = error.error.message;
    } else {
      errorMessage = `Server returned HTTP status: ${error.status}, error message: ${error.message}`;
    }

    console.error('Auth service error:', error);
    return throwError(() => new Error(errorMessage));
  }
}

