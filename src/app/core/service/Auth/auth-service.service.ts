import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8055';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string, username: string) {
    const payload = { email, password, username };
    return this.http.post(`${this.apiUrl}/users`, payload);
  }

  signin(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, payload);
  }
}
