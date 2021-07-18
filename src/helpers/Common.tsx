import { Team } from 'src/interfaces/Player';

const getPlayerNumber = (teams: Array<Team>, club_id: number): number => {
  let number = -1;
  teams.map((t) => {
    if (t.club_id === club_id) number = t.number;
    return;
  });
  return number;
};

export { getPlayerNumber };
