import {
  IEnrollmentFilter,
  IpostEnrollemt,
} from '../../core/model/enrollment.model';

export class GetEnrollments {
  static readonly type = '[Get] Enrollments';
}

export class PostEnrollment {
  static readonly type = '[POST] Enrollments';

  constructor(public payload: IpostEnrollemt) {}
}

export class GetEnrollmentsByFilter {
  static readonly type = '[GET] EnrollmentsFilters';

  constructor(public payload: IEnrollmentFilter) {}
}

export class ClearilterEnrollsFilter {
  static readonly type = '[Clear] Filters';
}
