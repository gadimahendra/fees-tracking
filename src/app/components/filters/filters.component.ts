import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BatchesState } from '../../../store/states/batches.state';
import { Observable } from 'rxjs';
import {
  ClearilterEnrollsFilter,
  GetEnrollmentsByFilter,
} from '../../../store/actions/enrollment.action';

@Component({
  selector: 'app-filters',
  imports: [
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  filters: filters = new filters();

  batches$!: Observable<any>;

  private store = inject(Store);

  ngOnInit(): void {
    this.batches$ = this.store.select(BatchesState.getBatchesState);
  }

  statusOptions = [
    { label: 'Full Paid', value: 'Full Paid' },
    { label: 'Partial Paid', value: 'Partial Paid' },
    { label: 'Not Paid', value: 'Not Paid' },
  ];

  clearFilters() {
    this.store.dispatch(new ClearilterEnrollsFilter());
    this.filters = new filters();
  }

  applyFilters() {
    this.store.dispatch(new GetEnrollmentsByFilter(this.filters));
  }
}

class filters {
  studentName: '';
  batchId: 0;
  status: '';
  constructor() {
    this.studentName = '';
    this.batchId = 0;
    this.status = '';
  }
}
