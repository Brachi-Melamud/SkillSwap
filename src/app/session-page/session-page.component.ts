import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  session: any; // Replace 'any' with the appropriate type for your session object
  rating: number | undefined;
  review: string | undefined;

  constructor(private route: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {
    const sessionId = this.route.snapshot.paramMap.get('id');
    this.loadSession(sessionId!);
  }

  loadSession(sessionId: string) {
    this.sessionService.getSession(sessionId)
    // .subscribe((session: any) => {
    //   this.session = session;
    // });
  }

  onSubmitReview() {
    const review = {
      rating: this.rating,
      review: this.review
    };

    this.sessionService.submitReview(this.session.id, review)
    // .subscribe((response) => {
    //   // Handle the response, e.g., display a success message
    // });
  }
}
