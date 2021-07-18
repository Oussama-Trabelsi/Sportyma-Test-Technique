import { Player } from 'src/interfaces/Player';

export interface IInitialState {
  loading: boolean;
  data: Array<Player>;
  players: Array<Player>;
  player: Player | null;
}

export const INITIAL_STATE: IInitialState = {
  loading: false,
  data: [],
  players: [],
  player: null
};
