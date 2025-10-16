import { inject, Injectable } from '@angular/core';
import { Action, select, Selector, State, StateContext } from '@ngxs/store';
import { Ibatches } from '../../core/model/batches.model';
import { GetBatches } from '../actions/batches.action';
import { FessService } from '../../app/services/fess.service';
import { tap } from 'rxjs';

interface batchesStateModel {
  batches: Ibatches[];
}

@State<batchesStateModel>({
  name: 'batches',
  defaults: {
    batches: [],
  },
})
@Injectable()
export class BatchesState {
  private service = inject(FessService);

  @Selector()
  static getBatchesState(state: batchesStateModel) {
    return state.batches;
  }

  @Action(GetBatches)
  getBatchData(ctx: StateContext<batchesStateModel>) {
    console.log('batches -----');
    return this.service
      .getBatches()
      .pipe(tap((res: any) => ctx.patchState({ batches: res })));
  }
}
