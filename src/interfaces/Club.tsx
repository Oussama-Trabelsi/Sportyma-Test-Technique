enum League {
  PremierLeague = 'Premier League',
}

interface Club {
  id: number;
  name: string;
  league: League;
}

export { Club, League };
