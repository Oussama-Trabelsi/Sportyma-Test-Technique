import { Player, Position, Team } from 'src/interfaces/Player';
import { Club, League } from 'src/interfaces/Club';
import { generateDatasets, generateSeasons } from './Common';
import { clubFactory } from 'src/helpers/factory/Club';

const createPlayer = async(
  id: number,
  name: string,
  nationality: string,
  flag: string,
  birthdate: string,
  age: number,
  height: number,
  position: Position,
  teams: Array<Team>,
): Promise<Player> => {
  const xAxis = { valueFormatter: generateSeasons(teams) };
  const clubs = await clubFactory.generateClubs();
  const data = generateDatasets(clubs, teams);
  let player: Player = {
    id,
    name,
    nationality,
    flag,
    birthdate,
    age,
    height,
    position,
    teams,
    data,
    xAxis,
  };
  return player;
};

const createClub = (
  id: number,
  name: string,
  league: League,
  stadium: string,
): Club => {
  let club: Club = {
    id,
    name,
    league,
    stadium,
  };
  return club;
};

const createPlayerTeam = (
  club_id: number,
  season: string,
  number: number,
  goals: number,
): Team => {
  let team: Team = {
    club_id,
    season,
    number,
    goals,
  };
  return team;
};

export { createPlayer, createClub, createPlayerTeam };
