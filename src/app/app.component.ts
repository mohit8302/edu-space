import { Component } from '@angular/core';
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edu-space-web';
}
