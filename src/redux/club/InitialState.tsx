import { Club } from 'src/interfaces/Club';

export interface IInitialState {
  loading: boolean;
  data: Array<Club>;
  clubs: Array<Club>;
}

export const INITIAL_STATE: IInitialState = {
  loading: false,
  data: [],
  clubs: [],
};
