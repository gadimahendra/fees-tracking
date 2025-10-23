import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { EnrolmentState } from '../../../store/states/enrollment.state';
import { getDashboardData } from '../../../store/actions/enrollment.action';
import { IdashboardStats } from '../../../core/model/enrollment.model';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
// import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [CardModule, DialogModule, TableModule],
  templateUrl: './dashboard-statistics.component.html',
  styleUrl: './dashboard-statistics.component.scss',
})
export class DashboardStatisticsComponent implements OnInit {
  totalStudents = 1248;
  totalDepartments = 12;
  fullyPaid = 820;
  partiallyPaid = 428;

  displayDialog: boolean = false;

  dashboardStatics!: IdashboardStats;

  paymentChartData: any;
  paymentChartOptions: any;
  private store = inject(Store);
  ngOnInit() {
    this.store.dispatch(new getDashboardData()).subscribe({
      next: (res: any) => {
        console.log('response', res);
        this.dashboardStatics = res.enrollment.DashboardStats;
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  openDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
  }
}
