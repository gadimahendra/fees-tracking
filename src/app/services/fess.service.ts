import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ienrollment, IpostEnrollemt } from '../../core/model/enrollment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FessService {
  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Ienrollment[]> {
    return this.http.get<Ienrollment[]>(
      'https://api.freeprojectapi.com/api/FeesTracking/getAllEnrollments'
    );
  }

  postEnrollment(payload: IpostEnrollemt): Observable<Ienrollment> {
    return this.http.post<Ienrollment>(
      `https://api.freeprojectapi.com/api/FeesTracking/addNewEnrollment`,
      payload
    );
  }

  getBatches() {
    return this.http.get(
      'https://api.freeprojectapi.com/api/FeesTracking/batches'
    );
  }
}
