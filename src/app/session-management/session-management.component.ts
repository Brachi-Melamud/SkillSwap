import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-management',
  templateUrl: './session-management.component.html',
  styleUrls: ['./session-management.component.scss']
})
export class SessionManagementComponent implements OnInit {
  sessions: any[] | undefined; // Replace 'any' with the appropriate type for your session object

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.loadSessions();
  }

  loadSessions() {
    // Call your session service to fetch the user's scheduled sessions
    this.sessionService.getUserSessions()
    // .subscribe((sessions: any[]) => {
    //   this.sessions = sessions;
    // });
  }

  onReschedule(session: any) {
    // Implement the reschedule functionality for the session
  }

  onCancel(session: any) {
    // Implement the cancel functionality for the session
  }
}
