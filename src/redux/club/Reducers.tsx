import { INITIAL_STATE, IInitialState } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ClubTypes } from './Actions';
import { Club } from 'src/interfaces/Club';

export const clubsLoading = (state: IInitialState) => ({
  ...state,
  loading: true,
});

export const setClubs = (
  state: IInitialState,
  { clubs }: { clubs: Array<Club> },
) => ({
  ...state,
  clubs: clubs,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [ClubTypes.CLUBS_LOADING]: clubsLoading,
  [ClubTypes.SET_CLUBS]: setClubs,
});
