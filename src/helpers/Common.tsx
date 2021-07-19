import { Club } from 'src/interfaces/Club';
import { Data, DataSet, Team, Value } from 'src/interfaces/Player';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { processColor } from 'react-native';

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

/* generates seasons played array forom player teams data */
const generateSeasons = (teams: Array<Team>): Array<string> => {
  let uniqueSeasons: Array<string> = [];
  teams.map((t) => {
    if (!uniqueSeasons.includes(t.season)) uniqueSeasons.push(t.season);
  });
  return uniqueSeasons;
};

/* generates club ids array forom player teams data */
const generateClubIds = (teams: Array<Team>): Array<number> => {
  let uniqueClubs: Array<number> = [];
  teams.map((t) => {
    if (!uniqueClubs.includes(t.club_id)) uniqueClubs.push(t.club_id);
  });
  return uniqueClubs;
};

const generateValues = (
  seasons: Array<string>,
  teams: Array<Team>,
  clubId: number,
): Array<Value> => {
  let values: Array<Value> = [];
  seasons.map((s) => {
    const team = teams.filter((t) => t.season === s && t.club_id === clubId);
    if (team[0]) values.push({ value: team[0].goals });
  });
  return values;
};

/* generates datasets for player stats */
const generateDatasets = (clubs: Array<Club>, teams: Array<Team>): Data => {
  const clubIds = generateClubIds(teams);
  const seasons = generateSeasons(teams);
  let datasets: Array<DataSet> = [];
  clubIds.map((c) => {
    // for each club get club name and generate values array
    const dataset: DataSet = {
      values: generateValues(seasons, teams, c),
      label: getClubById(clubs, c).name,
      config: {
        color: processColor('red'),
        fillColor: processColor('blue'),
        drawValues: true,
      },
    };
    datasets.push(dataset);
  });
  const data: Data = { dataSets: datasets };
  return data;
};

export {
  getPlayerNumber,
  getClubById,
  storeAsync,
  getAsync,
  generateSeasons,
  generateDatasets,
};
