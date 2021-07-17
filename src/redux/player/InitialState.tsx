import { Player } from 'src/interfaces/Player';

export interface IInitialState {
  loading: boolean;
  data: Array<Player>;
  players: Array<Player>;
}

export const INITIAL_STATE: IInitialState = {
  loading: false,
  data: [],
  players: [],
};
