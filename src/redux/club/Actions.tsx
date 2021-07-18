import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadClubs: null,
  getClubs: ['payload'],
  clubsLoading: null,
  setData: ['clubs'],
  setClubs: ['clubs'],
  generateSquad: ['club_id'],
  setTeam: ['team'],
});

export const ClubTypes = Types;
export default Creators;
