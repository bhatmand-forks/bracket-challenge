export const actionTypes = {
    RECEIVE_ALL_TEAMS: 'RECEIVE_ALL_TEAMS'
}

export const receiveAllTeams = (teams) => ({
    type: actionTypes.RECEIVE_ALL_TEAMS,
    teams
})