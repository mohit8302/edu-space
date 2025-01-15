// src/app/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }

  private getToken(): string {
    // Retrieve the token from local storage or any other place
    return localStorage.getItem('auth_token') || '';
  }
}
