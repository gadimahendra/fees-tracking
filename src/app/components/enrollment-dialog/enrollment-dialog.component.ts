import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store } from '@ngxs/store';
import { PostEnrollment } from '../../../store/actions/enrollment.action';
import { Observable } from 'rxjs';
import { GetBatches } from '../../../store/actions/batches.action';
import { BatchesState } from '../../../store/states/batches.state';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-enrollment-dialog',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputNumberModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './enrollment-dialog.component.html',
  styleUrl: './enrollment-dialog.component.scss',
  providers: [MessageService],
})
export class EnrollmentDialogComponent implements OnInit {
  enrollForm!: FormGroup;
  showDialog: boolean = true;
  batches$!: Observable<any>;
  public messageService = inject(MessageService);

  statusOptions = [
    { label: 'Full Paid', value: 'Full Paid' },
    { label: 'Partial Paid', value: 'Partial Paid' },
    { label: 'Pending', value: 'Pending' },
  ];

  fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);
  store = inject(Store);

  ngOnInit(): void {
    this.createEnrollemntForm();

    this.batches$ = this.store.select(BatchesState.getBatchesState);
  }

  createEnrollemntForm() {
    this.enrollForm = this.fb.group({
      enrollmentId: [0, [Validators.required]],
      studentName: ['', [Validators.required]],
      contactNo: ['', [Validators.required, Validators.minLength(10)]],
      totalFees: [0, [Validators.required, Validators.min(1)]],
      emi1: [0, [Validators.required]],
      emi2: [0, [Validators.required]],
      emi3: [0, [Validators.required]],
      totalReceived: [0, [Validators.required]],
      status: ['', [Validators.required]],
      isSoftDelete: [false],
      batchId: [0, [Validators.required]],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.enrollForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    console.log(this.enrollForm.value);
    this.store.dispatch(new PostEnrollment(this.enrollForm.value)).subscribe({
      next: () => {
        this.ref.close({
          severity: 'success',
          summary: 'Success',
          detail: 'Enrollment created successfully!',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to create enrollment. Please try again.',
        });
        console.error('PostEnrollment failed', err);
      },
    });
  }

  onClose(): void {
    this.ref.close();
  }
}
