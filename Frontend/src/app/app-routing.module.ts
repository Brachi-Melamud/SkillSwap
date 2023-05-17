import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleSessionComponent } from './schedule-session/schedule-session.component';
import { SessionManagementComponent } from './session-management/session-management.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TeacherSignUpComponent } from './teacher-sign-up/teacher-sign-up.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teacherSignUp', component: TeacherSignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
