import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadClubs: null,
  getClubs: ['payload'],
  clubsLoading: null,
  setData: ['clubs'],
  setClubs: ['clubs'],
});

export const ClubTypes = Types;
export default Creators;
