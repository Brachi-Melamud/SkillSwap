import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleSessionComponent } from './schedule-session/schedule-session.component';
import { SessionManagementComponent } from './session-management/session-management.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserComponent } from './user/user.component';
import { TeacherSignUpComponent } from './teacher-sign-up/teacher-sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    ScheduleSessionComponent,
    SessionManagementComponent,
    SessionPageComponent,
    SettingsPageComponent,
    UserComponent,
    TeacherSignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
