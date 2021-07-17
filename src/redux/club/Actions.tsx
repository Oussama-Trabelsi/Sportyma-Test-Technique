import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadClubs: null,
  getClubs: ['league'],
  clubsLoading: null,
  setClubs: ['clubs'],
});

export const ClubTypes = Types;
export default Creators;
