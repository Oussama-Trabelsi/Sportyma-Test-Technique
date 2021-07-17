import { createClub } from 'src/helpers/Generators';
import { Club, League } from 'src/interfaces/Club';

const generateClubs = async (): Promise<Array<Club>> => {
  let clubs: Array<Club> = [];
  let arsenal: Club = createClub(
    1,
    'Arsenal',
    League.PremierLeague,
    'Emirates Stadium',
  );
  let astonVilla: Club = createClub(
    2,
    'Aston Villa',
    League.PremierLeague,
    'Villa Park',
  );
  let brentford: Club = createClub(
    3,
    'Brentford',
    League.PremierLeague,
    'Brentford Community Stadium',
  );
  let brightonHoveAlbion: Club = createClub(
    4,
    'Brighton and Hove Albion',
    League.PremierLeague,
    'Amex Stadium',
  );
  let burnley: Club = createClub(
    5,
    'Burnley',
    League.PremierLeague,
    'Turf Moor',
  );
  let chelsea: Club = createClub(
    6,
    'Chelsea',
    League.PremierLeague,
    'Stamford Bridge',
  );
  let crystalPalace: Club = createClub(
    7,
    'Crystal Palace',
    League.PremierLeague,
    'Selhurst Park',
  );
  let everton: Club = createClub(
    8,
    'Everton',
    League.PremierLeague,
    'Goodison Park',
  );
  let leedsUnited: Club = createClub(
    9,
    'Leeds United',
    League.PremierLeague,
    'Elland Road',
  );
  let leicesterCity: Club = createClub(
    10,
    'Leicester City',
    League.PremierLeague,
    'King Power Stadium',
  );
  let liverpool: Club = createClub(
    11,
    'Liverpool',
    League.PremierLeague,
    'Anfield',
  );
  let manchesterCity: Club = createClub(
    12,
    'Manchester City',
    League.PremierLeague,
    'Etihad Stadium',
  );
  let manchesterUnited: Club = createClub(
    13,
    'Manchester United',
    League.PremierLeague,
    'Old Trafford',
  );
  let newcastleUnited: Club = createClub(
    14,
    'Newcastle United',
    League.PremierLeague,
    "St James Park",
  );
  let norwichCity: Club = createClub(
    15,
    'Norwich City',
    League.PremierLeague,
    'Carrow Road',
  );
  let southampton: Club = createClub(
    16,
    'Southampton',
    League.PremierLeague,
    "St Marys Stadium",
  );
  let tottenhamHotspur: Club = createClub(
    17,
    'Tottenham Hotspur',
    League.PremierLeague,
    'Tottenham Hotspur Stadium',
  );
  let watford: Club = createClub(
    18,
    'Watford',
    League.PremierLeague,
    'Vicarage Road',
  );
  let westHamUnited: Club = createClub(
    19,
    'West Ham United',
    League.PremierLeague,
    'London Stadium',
  );
  let wolverhamptonWanderers: Club = createClub(
    20,
    'Wolverhampton Wanderers',
    League.PremierLeague,
    'Molineux Stadium',
  );
  clubs.push(
    arsenal,
    astonVilla,
    brentford,
    brightonHoveAlbion,
    burnley,
    chelsea,
    crystalPalace,
    everton,
    leedsUnited,
    leicesterCity,
    liverpool,
    manchesterCity,
    manchesterUnited,
    newcastleUnited,
    norwichCity,
    southampton,
    tottenhamHotspur,
    watford,
    westHamUnited,
    wolverhamptonWanderers,
  );
  return clubs;
};

export const clubFactory = {
  generateClubs,
};
