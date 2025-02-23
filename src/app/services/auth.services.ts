import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login'; // URL da API java

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<string> {
    return this.http.post(this.apiUrl, { email, senha }, { responseType: 'text' });
  }
}
