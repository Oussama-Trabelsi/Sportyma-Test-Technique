import { put, call } from 'redux-saga/effects';
import ClubActions from 'src/redux/club/Actions';
import { clubFactory } from 'src/helpers/factory/Club';
import { Club } from 'src/interfaces/Club';

/* generates the club dataset */
export function* loadClubs() {
  const clubs: Array<Club> = yield call(clubFactory.generateClubs);
  yield put(ClubActions.setClubs(clubs));
}

/* generates clubs per league */
export function* getClubs(action: any): any {}
