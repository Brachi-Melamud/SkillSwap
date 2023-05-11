import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BooleanExpression } from 'mongoose';
// import { setApiKey } from '@sendgrid/mail';
import { EmailVerificationService } from '../email-verification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  firstPart = true;
  secondPart = false;
  thirdPart = false
  user: User = new User('', '', '', '', '', '', '', 0);
  showValidPasswordSign: Boolean = false;
  nameMissing: boolean = false;
  passwordMissing: boolean = false;
  checkPasswordMissing: boolean = this.user.checkPassword == '';
  emailMissing: boolean = this.user.email == '';
  enterClicked: boolean = false;
  passwordMatch: boolean = this.user.password == this.user.checkPassword;
  emailUnCorrect: boolean = false;
  formIsSubmitted: boolean = false;
  secondPartIsSubmitted: boolean = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isValidEmail: boolean = this.emailPattern.test(this.user.email);

  constructor(private authService: AuthService, private router: Router, private emailService: EmailVerificationService) {
    const apiKey = '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';
    //setApiKey(apiKey);
  }

  back() {
    this.router.navigate(['']);
  }

  passwordCorrect(e: any) {
    this.showValidPasswordSign = e.target.value.length > 5;
  }

  toSecondPart() {
    //const verificationCode = this.generateVerificationCode();
    //this.sendVerificationEmail(this.user.email, verificationCode);
    this.formIsSubmitted = true;
    // הןסר לבינתיםם - this.isValidEmail && 
    if (this.user.name && this.user.email && (this.user.checkPassword == this.user.password) && this.user.checkPassword && this.user.password && this.showValidPasswordSign) {
      //this.authService.signUp(this.user);
      this.firstPart = false;
      this.secondPart = true;
      this.passwordMatch = true;
      //this.router.navigate(['']);
    }
  }
  onSubmit() {
    this.secondPartIsSubmitted = true;
    if (this.user.city && this.user.country && this.user.occupation && this.user.age > 1) {
      this.router.navigate(['dashboard']);
    }
  }

  sendVerificationEmail(userEmail: string, verificationCode: string): void {
    this.emailService.sendVerificationEmail(userEmail, verificationCode)
      .then(() => {
        console.log('Verification email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending verification email', error);
      });
  }

  generateVerificationCode(): string {
    const codeLength = 6; // Specify the desired length of the verification code
    const digits = '0123456789';
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      code += digits.charAt(randomIndex);
    }
    return code;
  }


  onGoogleSignIn() {
    this.authService.signInWithGoogle();
  }

  onFacebookSignIn() {
    this.authService.signInWithFacebook();
  }


}
