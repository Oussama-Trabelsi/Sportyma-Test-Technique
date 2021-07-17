import { put, call } from 'redux-saga/effects';
import PlayerActions from 'src/redux/player/Actions';
import { clubFactory } from 'src/helpers/factory/Club';
import { Player } from 'src/interfaces/Player';

/* generates the player dataset */
export function* loadPlayers() {
  console.log('player saga');
  //const players: Array<Player> = yield call(clubFactory.generateClubs);
  //yield put(PlayerActions.setData(players));
}


