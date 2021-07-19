import { put, call } from 'redux-saga/effects';
import ClubActions from 'src/redux/club/Actions';
import { clubFactory } from 'src/helpers/factory/Club';
import { playerFactory } from 'src/helpers/factory/Player';
import { Club } from 'src/interfaces/Club';
import { Player } from 'src/interfaces/Player';
import { storeAsync } from 'src/helpers/Common';

/* generates the club dataset */
export function* loadClubs() {
  const clubs: Array<Club> = yield call(clubFactory.generateClubs);
  yield put(ClubActions.setData(clubs));
}

/* filters clubs within a league */
export function* getClubs(action: any) {
  const { league } = action.payload;
  const data: Array<Club> = yield call(clubFactory.generateClubs);
  const clubs = data.filter((club: Club) => club.league === league);
  yield put(ClubActions.setClubs(clubs));
}

/* generates squad for a given team */
export function* generateSquad(action: any) {
  const players: Array<Player> = yield call(playerFactory.generatePlayers);
  let team: Array<Player> = [];
  players.map((p) => {
    p.teams.map((t) => {
      if (t.club_id === action.club_id && !team.includes(p)) team.push(p);
    });
  });
  yield put(ClubActions.setTeam(team));
}

/* sends new club to store and saves it to async storage  */
export function* createClub(action: any): any {
  yield put(ClubActions.addClub(action.club));
  yield storeAsync(action.club);
}
