import { INITIAL_STATE, IInitialState } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ClubTypes } from './Actions';
import { Club } from 'src/interfaces/Club';
import { Player } from 'src/interfaces/Player';

export const clubsLoading = (state: IInitialState) => ({
  ...state,
  loading: true,
});

export const setData = (
  state: IInitialState,
  { clubs }: { clubs: Array<Club> },
) => ({
  ...state,
  data: clubs,
});

export const setClubs = (
  state: IInitialState,
  { clubs }: { clubs: Array<Club> },
) => ({
  ...state,
  clubs: clubs,
  loading: false,
});

export const setTeam = (
  state: IInitialState,
  { team }: { team: Array<Player> },
) => ({
  ...state,
  team: team,
});

export const addClub = (state: IInitialState, { club }: { club: Club }) => ({
  ...state,
  clubs: [club, ...state.clubs],
});

export const reducer = createReducer(INITIAL_STATE, {
  [ClubTypes.CLUBS_LOADING]: clubsLoading,
  [ClubTypes.SET_DATA]: setData,
  [ClubTypes.SET_CLUBS]: setClubs,
  [ClubTypes.SET_TEAM]: setTeam,
  [ClubTypes.ADD_CLUB]: addClub,
});
