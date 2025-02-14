import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'http://localhost:3000/api/schools';

  constructor(private http: HttpClient) {}

  getSchools(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSchool(school: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, school);
  }
}