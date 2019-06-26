import * as openDotaAPI from '../api/openDotaAPI';

export const actionTypes = {
  RECEIVE_ALL_TEAMS: 'RECEIVE_ALL_TEAMS',
  PLAY_MATCH: 'PLAY_MATCH',
  AUTO_PLAY_TOURNAMENT: 'AUTO_PLAY_TOURNAMENT',
  RESET_TOURNAMENT: 'RESET_TOURNAMENT'
}

export const receiveAllTeams = (teams) => ({
  type: actionTypes.RECEIVE_ALL_TEAMS,
  teams
})

export const requestAllTeams = async (dispatch) => {
  try {
      const {data : teams} = await openDotaAPI.fetchAllTeams();
      
      let top16Teams = await Promise.all(teams.slice(0, 16).map(async team => {
        let {data: players} = await openDotaAPI.fetchAllPlayers(team.team_id);
        team.players = players.filter((player => player.is_current_team_member)).map((player) => player.name);
        return team;
      }))
      
      dispatch(receiveAllTeams(top16Teams));
  }
  catch(e) {
      console.log(e);
  }
}

export const playMatch = (round, teams, index) => ({
  type: actionTypes.PLAY_MATCH,
  round,
  teams,
  index
})

export const autoPlayTournament = (ubRound1, lbRound1) => ({
  type: actionTypes.AUTO_PLAY_TOURNAMENT,
  ubRound1,
  lbRound1
})

export const resetTournament = () => ({
  type: actionTypes.RESET_TOURNAMENT
})