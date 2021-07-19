enum League {
  PremierLeague = 'Premier League',
}

interface Club {
  id: number;
  name: string;
  league: League;
  stadium: string;
  // optional data for created clubs
  clubUri?: string;
  stadiumUri?: string;
}

export { Club, League };
