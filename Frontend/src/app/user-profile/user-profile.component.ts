import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any; // Replace 'any' with the appropriate type for your user object
  isFollowing: boolean | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.loadUserProfile(userId!);
  }

  loadUserProfile(userId: string) {
    // Call your user service to fetch the user data based on the provided ID
    this.userService.getUser(userId).subscribe((user: any) => {
      this.user = user;
      // Perform any additional processing or checks here
    });
  }

  onFollow() {
    // Implement the follow functionality
    // Update the 'isFollowing' flag accordingly
  }

  onUnfollow() {
    // Implement the unfollow functionality
    // Update the 'isFollowing' flag accordingly
  }

  onRequestSession() {
    // Implement the request session functionality
  }
}
