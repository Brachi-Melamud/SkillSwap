import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteAccount() {
    throw new Error('Method not implemented.');
  }
  changePassword(currentPassword: string | undefined, newPassword: string | undefined) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'api/users'; // Replace with the actual API endpoint for user data

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<any> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get(url);
  }

  // Implement additional methods for user-related operations:
  // - updateUser(userId, userData): Observable<any>
  // - followUser(userId): Observable<any>
  // - unfollowUser(userId): Observable<any>
  // - requestSession(userId): Observable<any>
  // ...

}
