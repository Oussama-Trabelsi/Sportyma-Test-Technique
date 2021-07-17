import { put, call } from 'redux-saga/effects';
import ClubActions from 'src/redux/club/Actions';

export function* getClubs(action: any): any {
  console.log("i am at saga already");
  yield put(ClubActions.clubsLoading());
  /*const response = yield call(planningService.fetchPlanning, action.apiToken);
  if (response.data) {
    yield put(PlanningActions.planningFetchSuccess(response.data));
  } else yield put(PlanningActions.planningFetchFailure(response));*/
}


