import { put, call } from 'redux-saga/effects';
import ClubActions from 'src/redux/club/Actions';
import { clubFactory } from 'src/helpers/factory/Club';
import { Club } from 'src/interfaces/Club';

/* generates the club dataset */
export function* loadClubs() {
  const clubs: Array<Club> = yield call(clubFactory.generateClubs);
  yield put(ClubActions.setData(clubs));
}

/* filters clubs with league */
export function* getClubs(action: any): any {
  const { league, data } = action.payload;
  const clubs = data.filter((club: Club) => club.league === league);
  yield put(ClubActions.setClubs(clubs));
}
