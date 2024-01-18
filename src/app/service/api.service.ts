import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  generateOauthToken(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/oauth-token`, data);
  }
  
  fetchAuthToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/oauth-token`)
  }

  deleteAuthToken(accessToken: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/oauth-token`, {body: {token: accessToken}})
  }
}
