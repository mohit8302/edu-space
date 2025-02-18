import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface School {
  logo: string;
  name: string;
  alertsActivated: number;
  alertsDelivered: number;
}

interface Message {
  date: string;
  content: string;
  users: string;
  mailIcon: string; // Add icon names
  notificationIcon: string; // Add icon names
  unreadIcon: string; // Add icon names
}

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports:[CommonModule,MatIconModule],
  templateUrl: './alert-config.component.html',
  styleUrls: ['./alert-config.component.scss'] // Or scss, less
})
export class AlertConfigComponent {

  schools: School[] = [
    { logo: 'assets/school-logo1.png', name: 'Demo School 01', alertsActivated: 15, alertsDelivered: 1351 },
    { logo: 'assets/school-logo2.png', name: 'Demo School 02', alertsActivated: 22, alertsDelivered: 1876 },
    { logo: 'assets/school-logo3.png', name: 'Demo School 03', alertsActivated: 8, alertsDelivered: 923 },
    { logo: 'assets/school-logo4.png', name: 'Demo School 04', alertsActivated: 12, alertsDelivered: 1102 },
    { logo: 'assets/school-logo5.png', name: 'Demo School 05', alertsActivated: 19, alertsDelivered: 1645 },
    { logo: 'assets/school-logo6.png', name: 'Demo School 06', alertsActivated: 25, alertsDelivered: 2011 },
    { logo: 'assets/school-logo7.png', name: 'Demo School 07', alertsActivated: 11, alertsDelivered: 1054 },
    { logo: 'assets/school-logo8.png', name: 'Demo School 08', alertsActivated: 17, alertsDelivered: 1487 },
    // ... more school objects
  ];

  messages: Message[] = [
    { 
      date: '2024-09-16 12:34', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      users: 'Admin, Junior Admin',
      mailIcon: 'mail', // Example: Using Material Icons name
      notificationIcon: 'notifications',
      unreadIcon: 'mark_chat_unread'
    },
    { 
      date: '2024-09-16 14:12', 
      content: 'Another message with some more text.', 
      users: 'Super Admin',
      mailIcon: 'mail',
      notificationIcon: 'notifications',
      unreadIcon: 'mark_chat_unread'
    },
    // ... more message objects
  ];

  alerts = Array(17).fill(null); // Create an array for *ngFor (replace with your actual data)
}