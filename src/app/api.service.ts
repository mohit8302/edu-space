// filepath: src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api/schools'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }

  // Add more methods as needed
}