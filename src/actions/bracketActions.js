import * as openDotaAPI from '../api/openDotaAPI';

export const actionTypes = {
  RECEIVE_ALL_TEAMS: 'RECEIVE_ALL_TEAMS',
  PLAY_MATCH: 'PLAY_MATCH'
}

export const receiveAllTeams = (teams) => ({
  type: actionTypes.RECEIVE_ALL_TEAMS,
  teams
})

export const requestAllTeams = async (dispatch) => {
  try {
      const {data : teams} = await openDotaAPI.fetchAllTeams()
      dispatch(receiveAllTeams(teams.slice(0, 16)));
  }
  catch(e) {
      console.log(e);
  }
}

export const playMatch = (round, team, index) => ({
  type: actionTypes.PLAY_MATCH,
  round,
  team,
  index
})