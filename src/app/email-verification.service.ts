import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {
  private sendGridUrl = 'https://api.sendgrid.com/v3/mail/send';
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  sendVerificationEmail(to: string, verificationCode: string): Promise<any> {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    const email = {
      personalizations: [
        {
          to: [{ email: to }],
          subject: 'Email Verification',
          dynamic_template_data: { verificationCode }
        }
      ],
      from: { email: 'noreply@example.com' }, // Replace with your sender email address
      template_id: 'YOUR_SENDGRID_TEMPLATE_ID' // Replace with your SendGrid template ID
    };

    return this.http.post(this.sendGridUrl, email, { headers }).toPromise();
  }
}