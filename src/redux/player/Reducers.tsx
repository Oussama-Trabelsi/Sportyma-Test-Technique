import { INITIAL_STATE, IInitialState } from './InitialState';
import { createReducer } from 'reduxsauce';
import { PlayerTypes } from './Actions';
import { Player } from 'src/interfaces/Player';

export const playersLoading = (state: IInitialState) => ({
  ...state,
  loading: true,
});

export const setData = (
  state: IInitialState,
  { players }: { players: Array<Player> },
) => ({
  ...state,
  data: players,
});

export const setPlayer = (
  state: IInitialState,
  { player }: { player: Player },
) => ({
  ...state,
  player: player,
});

export const reducer = createReducer(INITIAL_STATE, {
  [PlayerTypes.PLAYERS_LOADING]: playersLoading,
  [PlayerTypes.SET_DATA]: setData,
  [PlayerTypes.SET_PLAYER]: setPlayer,
});
