import { Injectable } from '@angular/core';
import { Action, select, Selector, State, StateContext } from '@ngxs/store';
import {
  Ienrollment,
  IEnrollmentFilter,
  IpostEnrollemt,
} from '../../core/model/enrollment.model';
import {
  ClearilterEnrollsFilter,
  GetEnrollments,
  GetEnrollmentsByFilter,
  PostEnrollment,
} from '../actions/enrollment.action';
import { FessService } from '../../app/services/fess.service';
import { tap } from 'rxjs';

interface exportStateModel {
  enrollments: Ienrollment[];
  filteredEnrollments: Ienrollment[];
  filterApplied: boolean;
}

@State<exportStateModel>({
  name: 'enrollment',
  defaults: {
    enrollments: [],
    filteredEnrollments: [],
    filterApplied: false,
  },
})
@Injectable()
export class EnrolmentState {
  constructor(private service: FessService) {}

  @Selector()
  static getEnrollmentData(state: exportStateModel) {
    return state.enrollments;
  }

  @Selector()
  static getFilteredData(state: exportStateModel) {
    return state;
  }

  @Action(GetEnrollments)
  getEnroolments(ctx: StateContext<exportStateModel>) {
    return this.service.getEnrollments().pipe(
      tap((res) => {
        ctx.patchState({
          enrollments: res,
        });
      })
    );
  }

  @Action(PostEnrollment)
  postEnrollmentData(
    ctx: StateContext<exportStateModel>,
    action: PostEnrollment
  ) {
    return this.service.postEnrollment(action.payload).pipe(
      tap({
        next: (newEnroll: Ienrollment) => {
          const state = ctx.getState();
          ctx.patchState({
            enrollments: [...state.enrollments, newEnroll],
          });
        },
        error: (err) => {
          console.error('Post enrollment failed:', err);
        },
      })
    );
  }

  @Action(GetEnrollmentsByFilter)
  enrollmentFilters(
    ctx: StateContext<exportStateModel>,
    action: GetEnrollmentsByFilter
  ) {
    const state = ctx.getState();
    const filters = action.payload;

    Object.entries(action.payload).every(([key, value]) => {
      console.log('keys', key, value);
      return true;
    });

    const filteredData = state.enrollments.filter((enroll: any) => {
      return Object.entries(action.payload).every(([key, value]) => {
        if (!value) return true;
        const enrollValue = String(enroll[key]).toLowerCase();
        const filterValue = String(value).toLowerCase();
        return enrollValue.includes(filterValue);
      });
    });

    console.log('filtered enroll', filteredData);

    ctx.patchState({ filteredEnrollments: filteredData, filterApplied: true });
  }

  @Action(ClearilterEnrollsFilter)
  clearFilters(ctx: StateContext<exportStateModel>) {
    ctx.patchState({
      filteredEnrollments: ctx.getState().enrollments,
      filterApplied: false,
    });
  }
}
