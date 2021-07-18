// Redux-saga
import { takeLatest, all } from 'redux-saga/effects';
// Redux actions
import { ClubTypes } from 'src/redux/club/Actions';
import { PlayerTypes } from 'src/redux/player/Actions';
// Sagas
import { loadClubs, getClubs, generateSquad } from './Club';
import { loadPlayers } from './Player';

export default function* root() {
  yield all([
    // Club Sagas
    takeLatest(ClubTypes.LOAD_CLUBS, loadClubs),
    takeLatest(ClubTypes.GET_CLUBS, getClubs),
    takeLatest(ClubTypes.GENERATE_SQUAD, generateSquad),
    // Player Sagas
    takeLatest(PlayerTypes.LOAD_PLAYERS, loadPlayers),
  ]);
}
