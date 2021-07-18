import { Club } from 'src/interfaces/Club';
import { Player } from 'src/interfaces/Player';

export interface IInitialState {
  loading: boolean;
  data: Array<Club>;
  clubs: Array<Club>;
  team: Array<Player>
}

export const INITIAL_STATE: IInitialState = {
  loading: false,
  data: [],
  clubs: [],
  team: [],
};
