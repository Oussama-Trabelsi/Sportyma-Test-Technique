import { Player, Position } from 'src/interfaces/Player';
import { Club, League } from 'src/interfaces/Club';

const createPlayer = (
  id: number,
  name: string,
  nationality: string,
  flag: string,
  birthdate: string,
  age: number,
  height: number,
  position: Position,
): Player => {
  let player: Player = {
    id,
    name,
    nationality,
    flag,
    birthdate,
    age,
    height,
    position,
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
    stadium
  };
  return club;
};

export { createPlayer, createClub };
