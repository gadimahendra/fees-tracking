import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { Store } from '@ngxs/store';
import { GetBatches } from '../../store/actions/batches.action';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(new GetBatches());
  }
}
