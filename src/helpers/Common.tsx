import { Club } from 'src/interfaces/Club';
import { Team } from 'src/interfaces/Player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getPlayerNumber = (teams: Array<Team>, club_id: number): number => {
  let number = -1;
  teams.map((t) => {
    if (t.club_id === club_id) number = t.number;
    return;
  });
  return number;
};

const getClubById = (clubs: Array<Club>, club_id: number): Club => {
  return clubs.filter((obj) => obj.id === club_id)[0];
};

/* Adds a new club to stored clubs in async storage */
const storeAsync = async (club: Club) => {
  let clubs: Array<Club> = await getAsync();
  try {
    await AsyncStorage.setItem('@clubs', JSON.stringify([...clubs, club]));
    console.log('clubs stored ..');
  } catch (e) {
    console.log('unable to store clubs');
  }
};

/* Retrieves stored clubs in async storage */
const getAsync = async (): Promise<Array<Club>> => {
  try {
    const existingClubs = await AsyncStorage.getItem('@clubs');
    if (existingClubs !== null) {
      let newClubs = JSON.parse(existingClubs);
      return newClubs;
    } else return [];
  } catch (e) {
    return [];
  }
};

export { getPlayerNumber, getClubById, storeAsync, getAsync };
