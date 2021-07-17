import { put, call } from 'redux-saga/effects';
import PlayerActions from 'src/redux/player/Actions';
import { playerFactory } from 'src/helpers/factory/Player';
import { Player } from 'src/interfaces/Player';

/* generates the player dataset */
export function* loadPlayers() {
  const players: Array<Player> = yield call(playerFactory.generatePlayers);
  yield put(PlayerActions.setData(players));
}
