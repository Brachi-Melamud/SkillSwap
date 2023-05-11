import { Injectable } from '@angular/core';
import { User } from './user.model';
import 'firebase/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }
  signUp(user: User): void {
    // Convert the user object to JSON format
    const userData = JSON.stringify(user);

    // Create a new HTTP request object
    const xhr = new XMLHttpRequest();

    // Set the request method and URL
    xhr.open('POST', 'http://yourbackendapi.com/users', true);

    // Set the request headers
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    // Handle the response from the server
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('User created successfully!');
        } else {
          console.error('Error creating user:', xhr.statusText);
        }
      }
    };

    // Send the user data to the server
    xhr.send(userData);

  }
  signInWithGoogle(): void {
  }

  signInWithFacebook(): void {
  }

}
