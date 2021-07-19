import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadClubs: null,
  getClubs: ['payload'],
  clubsLoading: null,
  setData: ['clubs'],
  setClubs: ['clubs'],
  generateSquad: ['club_id'],
  setTeam: ['team'],
  createClub: ['club'],
  addClub: ['club'],
});

export const ClubTypes = Types;
export default Creators;
