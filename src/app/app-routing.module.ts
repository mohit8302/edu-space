import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/components/dashboard/dashboard.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { UsersComponent } from './pages/users/users.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DataConfigComponent } from './pages/data-config/data-config.component';
import { AlertConfigComponent } from './pages/alert-config/alert-config.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { GeneralsettingComponent } from './pages/schools/generalsetting/generalsetting.component';
import { CommunicationComponent } from './pages/schools/communication/communication.component';
import { AddNewUserComponent } from './pages/users/add-new-user/add-new-user.component';
import { AddSchoolComponent } from './pages/schools/add-school/add-school.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'schools',
     component: SchoolsComponent,
    children:[
      {path:'',component:GeneralsettingComponent},
      {path:'communication',component:CommunicationComponent}
    ] },
  { path: 'add-school',component:AddSchoolComponent },
  { path: 'users',component: UsersComponent },
  { path: 'add-new-users',component:AddNewUserComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'data-config', component: DataConfigComponent },
  { path: 'alert-config', component: AlertConfigComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
