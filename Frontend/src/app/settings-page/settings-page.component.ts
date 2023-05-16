import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  currentPassword: string | undefined;
  newPassword: string | undefined;

  constructor(private userService: UserService) { }

  onChangePassword() {
    // Call your user service to change the password
    this.userService.changePassword(this.currentPassword, this.newPassword)
    // .subscribe((response) => {
    //   // Handle the response, e.g., display a success message
    // });
  }

  onDeleteAccount() {
    // Call your user service to delete the account
    this.userService.deleteAccount()
    // .subscribe((response) => {
    //   // Handle the response, e.g., redirect to the login page
    // });
  }
}
