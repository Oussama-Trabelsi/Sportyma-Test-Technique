import { Club } from 'src/interfaces/Club';

export interface IInitialState {
  loading: boolean;
  clubs: Array<Club>;
}

export const INITIAL_STATE: IInitialState = {
  loading: false,
  clubs: [],
};
