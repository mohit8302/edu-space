import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'https://your-api-endpoint.com/dashboard';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {  // ✅ Match function name
    return this.http.get<any>(this.apiUrl);
  }
}

