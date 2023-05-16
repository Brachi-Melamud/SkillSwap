import { Component } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-schedule-session',
  templateUrl: './schedule-session.component.html',
  styleUrls: ['./schedule-session.component.scss']
})
export class ScheduleSessionComponent {
  skillToLearn: string | undefined;
  meetingTime: string | undefined;
  location: string | undefined;

  constructor(private sessionService: SessionService) { }

  onSubmit() {
    // Create a session object using the form data
    const session = {
      skillToLearn: this.skillToLearn,
      meetingTime: this.meetingTime,
      location: this.location
    };

    // Call your session service to schedule the session
    this.sessionService.scheduleSession(session).subscribe((response) => {
      // Handle the response, e.g., display a success message
    });
  }
}
