import { actionTypes } from './bracketActions';

const createTeam = (name, wins, losses, logoUrl) => ({
  name: name === '' ? 'OpTic Gaming' : name.trim(),
  elo: (wins / (wins + losses)).toFixed(2),
  logoUrl,
});

let emptyTeam = createTeam('-', 0, 0, '');

export const initialState = {
  ubRound1: new Array(8).fill(emptyTeam),
  lbRound1: new Array(8).fill(emptyTeam),
  ubRound2: new Array(4).fill(emptyTeam),
  lbRound2: new Array(4).fill(emptyTeam),
  ubFinals: [emptyTeam, emptyTeam],
  lbFinals: [emptyTeam, emptyTeam],
  grandFinals: [emptyTeam, emptyTeam],
  winner: [emptyTeam],
}

export const bracketReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_ALL_TEAMS:
      let ubRound1 = [];
      let lbRound1 = [];
      for (
        let start = 0, end = 15, isUpperBracket = true;
        start < 8;
        start++, end--, isUpperBracket = !isUpperBracket
      ) {
        let team1 = action.teams[start];
        team1 = createTeam(team1.name, team1.wins, team1.losses, team1.logo_url);
        let team2 = action.teams[end];
        team2 = createTeam(team2.name, team2.wins, team2.losses, team2.logo_url);
  
        if (isUpperBracket) {
          ubRound1.push(team1, team2);
        } else {
          lbRound1.push(team1, team2);
        }
      }

      console.log(ubRound1);
      return {
        ...state,
        ubRound1,
        lbRound1
      };
  
    default:
      return state;
  }
}