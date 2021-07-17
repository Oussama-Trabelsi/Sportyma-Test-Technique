import { createPlayer } from 'src/helpers/Generators';
import { Player, Position } from 'src/interfaces/Player';

const generatePlayers = async (): Promise<Array<Player>> => {
  let players: Array<Player> = [];
  let BerndLeno: Player = createPlayer(
    1,
    'Bernd Leno',
    'Germany',
    '🇩🇪',
    '04/03/1992',
    29,
    190,
    Position.Goalkeeper,
  );
  let RunarAlexRunarsson: Player = createPlayer(
    2,
    'Rúnar Alex Rúnarsson',
    'Iceland',
    '🇮🇸',
    '18/02/1995',
    26,
    186,
    Position.Goalkeeper,
  );
  let KarlHein: Player = createPlayer(
    3,
    'Karl Hein',
    'Estonia',
    '🇪🇪',
    '13/04/2002',
    19,
    193,
    Position.Goalkeeper,
  );
  let HectorBellerin: Player = createPlayer(
    4,
    'Héctor Bellerín',
    'Spain',
    '🇪🇸',
    '19/03/1995',
    26,
    178,
    Position.Defender,
  );
  let KieranTierney: Player = createPlayer(
    5,
    'Kieran Tierney',
    'Scotland',
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    '05/06/1997',
    24,
    178,
    Position.Defender,
  );
  let GabrielMagalhaes: Player = createPlayer(
    6,
    'Gabriel Magalhães',
    'Brazil',
    '🇧🇷',
    '19/12/1997',
    23,
    190,
    Position.Defender,
  );
  let RobHolding: Player = createPlayer(
    7,
    'Rob Holding',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '20/09/1995',
    25,
    189,
    Position.Defender,
  );
  let CedricSoares: Player = createPlayer(
    8,
    'Cédric Soares',
    'Portugal',
    '🇵🇹',
    '31/08/1991',
    29,
    172,
    Position.Defender,
  );
  let CalumChambers: Player = createPlayer(
    9,
    'Calum Chambers',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '20/01/1995',
    26,
    182,
    Position.Defender,
  );
  let PabloMari: Player = createPlayer(
    10,
    'Pablo Marí',
    'Spain',
    '🇪🇸',
    '31/08/1993',
    27,
    193,
    Position.Defender,
  );
  let SeadKolasinac: Player = createPlayer(
    11,
    'Sead Kolasinac',
    'Germany',
    '🇩🇪',
    '20/06/1993',
    28,
    183,
    Position.Defender,
  );
  let BukayoSaka: Player = createPlayer(
    12,
    'Bukayo Saka',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '05/09/2001',
    19,
    178,
    Position.Midfielder,
  );
  let ThomasPartey: Player = createPlayer(
    13,
    'Thomas Partey',
    'Ghana',
    '🇬🇭',
    '11/07/1992',
    28,
    185,
    Position.Midfielder,
  );
  let MohamedElneny: Player = createPlayer(
    14,
    'Mohamed Elneny',
    'Egypt',
    '🇪🇬',
    '04/03/1992',
    29,
    180,
    Position.Midfielder,
  );
  let EmileSmithRowe: Player = createPlayer(
    15,
    'Emile Smith Rowe',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '28/07/2000',
    20,
    182,
    Position.Midfielder,
  );
  let GranitXhaka: Player = createPlayer(
    16,
    'Granit Xhaka',
    'Switzerland',
    '🇨🇭',
    '27/09/1992',
    28,
    185,
    Position.Midfielder,
  );
  let AinsleyMaitlandNiles: Player = createPlayer(
    17,
    'Ainsley Maitland-Niles',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '29/08/1997',
    23,
    177,
    Position.Midfielder,
  );
  let JosephWillock: Player = createPlayer(
    18,
    'Joseph Willock',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '20/08/1999',
    21,
    179,
    Position.Midfielder,
  );
  let LucasTorreira: Player = createPlayer(
    19,
    'Lucas Torreira',
    'Uruguay',
    '🇺🇾',
    '11/02/1996',
    25,
    168,
    Position.Midfielder,
  );
  let AlexandreLacazette: Player = createPlayer(
    20,
    'Alexandre Lacazette',
    'France',
    '🇫🇷',
    '28/05/1991',
    30,
    175,
    Position.Forward,
  );
  let Willian: Player = createPlayer(
    21,
    'Willian',
    'Brazil',
    '🇧🇷',
    '09/08/1988',
    32,
    175,
    Position.Forward,
  );
  let PierreEmerickAubameyang: Player = createPlayer(
    22,
    'Pierre-Emerick Aubameyang',
    'Gabon',
    '🇬🇦',
    '18/06/1989',
    32,
    187,
    Position.Forward,
  );
  let NicolasPepe: Player = createPlayer(
    23,
    'Nicolas Pépé',
    'France',
    '🇫🇷',
    '29/05/1995',
    26,
    183,
    Position.Goalkeeper,
  );
  let ReissNelson: Player = createPlayer(
    24,
    'Reiss Nelson',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '10/12/1999 ',
    21,
    175,
    Position.Forward,
  );
  let EddieNketiah: Player = createPlayer(
    25,
    'Eddie Nketiah',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '30/05/1999',
    22,
    175,
    Position.Forward,
  );
  let GabrielMartinelli: Player = createPlayer(
    26,
    'Gabriel Martinelli',
    'Brazil',
    '🇧🇷',
    '18/06/2001',
    20,
    190,
    Position.Forward,
  );
  let FolarinBalogun: Player = createPlayer(
    27,
    'Folarin Balogun',
    'England',
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    '03/07/2001',
    20,
    178,
    Position.Forward,
  );
  players.push(
    BerndLeno,
    RunarAlexRunarsson,
    KarlHein,
    HectorBellerin,
    KieranTierney,
    GabrielMagalhaes,
    RobHolding,
    CedricSoares,
    CalumChambers,
    PabloMari,
    SeadKolasinac,
    BukayoSaka,
    ThomasPartey,
    MohamedElneny,
    EmileSmithRowe,
    GranitXhaka,
    AinsleyMaitlandNiles,
    JosephWillock,
    LucasTorreira,
    AlexandreLacazette,
    Willian,
    PierreEmerickAubameyang,
    NicolasPepe,
    ReissNelson,
    EddieNketiah,
    GabrielMartinelli,
    FolarinBalogun,
  );
  return players;
};

export const playerFactory = {
  generatePlayers,
};
