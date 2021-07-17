import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getClubs: ['league'],
  clubsLoading: null,
  setClubs: ['clubs'],
});

export const ClubTypes = Types;
export default Creators;
