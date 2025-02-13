import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { UsersComponent } from './pages/users/users.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DataConfigComponent } from './pages/data-config/data-config.component';
import { AlertConfigComponent } from './pages/alert-config/alert-config.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    SchoolsComponent,
    UsersComponent,
    FeedbackComponent,
    DataConfigComponent,
    AlertConfigComponent,
    SettingsComponent,
    AddSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
