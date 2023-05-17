import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private router: Router) { }
  onSignUpClicked() {
    this.router.navigate(['/signup']);
  }
  onLoginClicked() {
    this.router.navigate(['/login']);
  }
  TeacherReg(){
    this.router.navigate(['/teacherSignUp']);
  }
}
