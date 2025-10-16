import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
// import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [CardModule],
  templateUrl: './dashboard-statistics.component.html',
  styleUrl: './dashboard-statistics.component.scss',
})
export class DashboardStatisticsComponent implements OnInit {
  totalStudents = 1248;
  totalDepartments = 12;
  fullyPaid = 820;
  partiallyPaid = 428;

  paymentChartData: any;
  paymentChartOptions: any;

  ngOnInit(): void {
    this.setupChart();
  }

  setupChart() {
    this.paymentChartData = {
      labels: ['Fully Paid', 'Partially Paid'],
      datasets: [
        {
          label: 'Students',
          data: [this.fullyPaid, this.partiallyPaid],
          backgroundColor: ['#16a34a', '#eab308'],
        },
      ],
    };

    this.paymentChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 },
        },
      },
      plugins: {
        legend: { display: false },
      },
    };
  }
}
