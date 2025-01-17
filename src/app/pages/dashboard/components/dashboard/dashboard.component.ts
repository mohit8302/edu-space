import { Component } from '@angular/core';
import { InfoCardComponent } from "../info-card/info-card.component";
import { KpiGraphComponent } from "../kpi-graph/kpi-graph.component";

@Component({
  selector: 'app-dashboard',
  imports: [InfoCardComponent, KpiGraphComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
