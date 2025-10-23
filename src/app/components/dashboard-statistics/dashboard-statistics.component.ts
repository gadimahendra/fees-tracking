import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { getDashboardData } from '../../../store/actions/enrollment.action';
import { IdashboardStats } from '../../../core/model/enrollment.model';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
// import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [CardModule, DialogModule, TableModule],
  templateUrl: './dashboard-statistics.component.html',
  styleUrl: './dashboard-statistics.component.scss',
})
export class DashboardStatisticsComponent implements OnInit {
  displayDialog: boolean = false;
  dashboardStatics!: IdashboardStats;
  private store = inject(Store);
  private messageService = inject(MessageService);

  ngOnInit() {
    this.store.dispatch(new getDashboardData()).subscribe({
      next: (res: any) => {
        this.dashboardStatics = res.enrollment.DashboardStats;
      },
      error: (err) => {
        console.log('error', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to Fetch Dashboard details. Please try again.',
        });
      },
    });
  }
}
