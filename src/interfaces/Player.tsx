enum Position {
  Goalkeeper = 'Goal keeper',
  Defender = 'Defender',
  Midfielder = 'Midfielder',
  Forward = 'Forward',
}

interface Player {
  id: number;
  name: string;
  nationality: string;
  flag: string;
  birthdate: string;
  age: number;
  height: number;
  position: Position;
  teams: Array<Team>;
}

interface Team {
  club_id: number;
  season: string;
  number: number;
  goals: number;
}

export { Player, Position, Team };
