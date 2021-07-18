import { put, call } from 'redux-saga/effects';
import PlayerActions from 'src/redux/player/Actions';
import { playerFactory } from 'src/helpers/factory/Player';
import { Player } from 'src/interfaces/Player';

/* generates the player dataset */
export function* loadPlayers() {
  const players: Array<Player> = yield call(playerFactory.generatePlayers);
  yield put(PlayerActions.setData(players));
}

enum Action {
  NEXT = 'Next',
  PREVIOUS = 'Previous',
}

/* changes to next or previous player on a team */
export function* changePlayer(action: any) {
  const { to, team, player } = action.payload;
  const playerIndex = team.findIndex((obj: Player) => obj?.id === player.id);
  let newIndex = to === Action.NEXT ? playerIndex + 1 : playerIndex - 1;
  if (newIndex < 0) newIndex = team.length - 1;
  else if (newIndex > team.length - 1) newIndex = 0;
  yield put(PlayerActions.setPlayer(team[newIndex]));
}
