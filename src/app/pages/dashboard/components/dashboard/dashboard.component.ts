import { Component } from '@angular/core';
import { InfoCardComponent } from "../info-card/info-card.component";
import { KpiGraphComponent } from "../kpi-graph/kpi-graph.component";
import { MessagesComponent } from "../messages/messages.component";

@Component({
  selector: 'app-dashboard',
  imports: [InfoCardComponent, KpiGraphComponent, MessagesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
