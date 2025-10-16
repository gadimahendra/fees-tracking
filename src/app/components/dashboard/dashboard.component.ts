import { Component } from '@angular/core';
import { DashboardStatisticsComponent } from '../dashboard-statistics/dashboard-statistics.component';
import { EnrollmentsComponent } from '../enrollments/enrollments.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardStatisticsComponent, EnrollmentsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
