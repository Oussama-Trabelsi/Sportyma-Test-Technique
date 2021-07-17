enum League {
  PremierLeague = 'Premier League',
}

interface Club {
  id: number;
  name: string;
  league: League;
  stadium: string;
}

export { Club, League };
