import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/components/dashboard/dashboard.component";
import { SchoolsComponent } from "./pages/schools/schools.component";
import { UsersComponent } from "./pages/users/users.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { DataConfigComponent } from "./pages/data-config/data-config.component";
import { AlertConfigComponent } from "./pages/alert-config/alert-config.component";
import { SettingsComponent } from "./pages/settings/settings.component";

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'schools', component: SchoolsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'data-config', component: DataConfigComponent },
    { path: 'alert-config', component: AlertConfigComponent },
    { path: 'settings', component: SettingsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }