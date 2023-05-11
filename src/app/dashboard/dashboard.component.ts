import { Component } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user = {
    name: 'John Doe',
    skillsToTeach: 'Programming, Cooking',
    skillsToLearn: 'Guitar, Photography'
  };

  recommendedUsers = [
    { name: 'Jane Smith' },
    { name: 'Mike Johnson' },
    { name: 'Emily Davis' }
  ];

  notifications = [
    'New message from Jane Smith',
    'Session request from Mike Johnson'
  ];

  searchQuery: string = '';

  editProfile() {
    // Navigate to edit profile page
  }

  searchUsers() {
    // Perform search functionality
  }
}