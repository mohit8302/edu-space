import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-kpi-graph',
  templateUrl: './kpi-graph.component.html',
  styleUrls: ['./kpi-graph.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class KpiGraphComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.1)', // Customize grid line color
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['School 1', 'School 2', 'School 3', 'School 4', 'School 5'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Attendance >= 98%',
        backgroundColor: '#5286F8',
        borderRadius: 100,
        maxBarThickness: 25,
        barPercentage: 1.2
      },
      {
        data: [28, 48, 40, 19, 86],
        label: '95% > Attendance < 98%',
        backgroundColor: '#00B69B',
        borderRadius: 100,
        maxBarThickness: 25,
        barPercentage: 1.2
      },
      {
        data: [59, 83, 31, 62, 17],
        label: 'Attendance <= 95%',
        backgroundColor: '#FFB800',
        borderRadius: 100,
        maxBarThickness: 25,
        barPercentage: 1.2
      },
    ],
  };

  // Events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }
}
