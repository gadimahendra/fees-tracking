import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Ienrollment, IpostEnrollemt } from '../../core/model/enrollment.model';
import { GetEnrollments, PostEnrollment } from '../actions/enrollment.action';
import { FessService } from '../../app/services/fess.service';
import { tap } from 'rxjs';

interface exportStateModel {
  enrollments: Ienrollment[];
}

@State<exportStateModel>({
  name: 'enrollment',
  defaults: {
    enrollments: [],
  },
})
@Injectable()
export class EnrolmentState {
  constructor(private service: FessService) {}

  @Selector()
  static getEnrollmentData(state: exportStateModel) {
    return state.enrollments;
  }

  @Action(GetEnrollments)
  getEnroolments(ctx: StateContext<exportStateModel>) {
    return this.service
      .getEnrollments()
      .pipe(tap((res) => ctx.patchState({ enrollments: res })));
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
}
