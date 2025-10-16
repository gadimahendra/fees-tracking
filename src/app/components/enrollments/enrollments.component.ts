import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetEnrollments } from '../../../store/actions/enrollment.action';
import { EnrolmentState } from '../../../store/states/enrollment.state';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { EnrollmentDialogComponent } from '../enrollment-dialog/enrollment-dialog.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-enrollments',
  imports: [
    TableModule,
    PaginatorModule,
    ButtonModule,
    CommonModule,
    TagModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
  ],
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
  providers: [DialogService, MessageService],
})
export class EnrollmentsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  enrollments$!: Observable<any>;
  constructor(
    private store: Store,
    private dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.triggergetStore();
    this.enrollments$ = this.store.select(EnrolmentState.getEnrollmentData);
    this.enrollments$.subscribe((res) => {
      console.log('-----------------', res);
    });
  }

  triggergetStore() {
    this.store.dispatch(new GetEnrollments());
  }

  onAddEnrollment() {
    this.ref = this.dialogService.open(EnrollmentDialogComponent, {
      // header: 'New Enrollment',
      width: '70%',
      modal: true,
      dismissableMask: false,
      closable: false,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((res: any) => {
      if (res) {
        this.messageService.add(res);
      }
    });
  }
}
