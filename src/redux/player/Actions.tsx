import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadPlayers: null,
  getPlayers: ['payload'],
  playersLoading: null,
  setData: ['players'],
  setPlayers: ['players'],
});

export const PlayerTypes = Types;
export default Creators;
