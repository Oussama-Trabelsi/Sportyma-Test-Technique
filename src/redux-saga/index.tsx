// Redux-saga
import { takeLatest, all } from 'redux-saga/effects';
// Redux actions
import { ClubTypes } from 'src/redux/club/Actions';
// Sagas
import { getClubs } from './Club';

export default function* root() {
  yield all([
    // Club Sagas
    takeLatest(ClubTypes.GET_CLUBS, getClubs),
  ]);
}
