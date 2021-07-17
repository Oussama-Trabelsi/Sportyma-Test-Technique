import { createClub } from 'src/helpers/Generators';
import { Club, League } from 'src/interfaces/Club';

const generateClubs = async (): Promise<Array<Club>> => {
  let clubs: Array<Club> = [];
  let arsenal: Club = createClub(1, 'Arsenal', League.PremierLeague);
  let astonVilla: Club = createClub(2, 'Aston Villa', League.PremierLeague);
  let brentford: Club = createClub(3, 'Brentford', League.PremierLeague);
  let brightonHoveAlbion: Club = createClub(
    4,
    'Brighton and Hove Albion',
    League.PremierLeague,
  );
  let burnley: Club = createClub(5, 'Burnley', League.PremierLeague);
  let chelsea: Club = createClub(6, 'Chelsea', League.PremierLeague);
  let crystalPalace: Club = createClub(
    7,
    'Crystal Palace',
    League.PremierLeague,
  );
  let everton: Club = createClub(8, 'Everton', League.PremierLeague);
  let leedsUnited: Club = createClub(9, 'Leeds United', League.PremierLeague);
  let leicesterCity: Club = createClub(
    10,
    'Leicester City',
    League.PremierLeague,
  );
  let liverpool: Club = createClub(11, 'Liverpool', League.PremierLeague);
  let manchesterCity: Club = createClub(
    12,
    'Manchester City',
    League.PremierLeague,
  );
  let manchesterUnited: Club = createClub(
    13,
    'Manchester United',
    League.PremierLeague,
  );
  let newcastleUnited: Club = createClub(
    14,
    'Newcastle United',
    League.PremierLeague,
  );
  let norwichCity: Club = createClub(15, 'Norwich City', League.PremierLeague);
  let southampton: Club = createClub(15, 'Southampton', League.PremierLeague);
  let tottenhamHotspur: Club = createClub(
    16,
    'Tottenham Hotspur',
    League.PremierLeague,
  );
  let watford: Club = createClub(17, 'Watford', League.PremierLeague);
  let westHamUnited: Club = createClub(
    18,
    'West Ham United',
    League.PremierLeague,
  );
  let wolverhamptonWanderers: Club = createClub(
    19,
    'Wolverhampton Wanderers',
    League.PremierLeague,
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
    generateClubs
  };