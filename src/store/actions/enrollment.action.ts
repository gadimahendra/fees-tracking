import { IpostEnrollemt } from '../../core/model/enrollment.model';

export class GetEnrollments {
  static readonly type = '[Get] Enrollments';
}

export class PostEnrollment {
  static readonly type = '[POST] Enrollments';

  constructor(public payload: IpostEnrollemt) {}
}
