import { actionTypes } from '../actions/bracketActions';

const createTeam = (name, rating, players, logoUrl) => ({
  name: name === '' ? 'OpTic Gaming' : name.trim(),
  elo: rating,
  players,
  logoUrl,
});

let emptyTeam = createTeam('-', 0, [], '');

export const initialState = {
  ubRound1: [],
  lbRound1: [],
  ubRound2: [emptyTeam, emptyTeam, emptyTeam, emptyTeam],
  lbRound2: [emptyTeam, emptyTeam, emptyTeam, emptyTeam],
  ubFinals: [emptyTeam, emptyTeam],
  lbFinals: [emptyTeam, emptyTeam],
  grandFinals: [emptyTeam, emptyTeam],
  winner: [emptyTeam],
}

export const bracketReducer = (state, action) => {
  Object.freeze(state);

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
        team1 = createTeam(team1.name, team1.rating, team1.players, team1.logo_url);
        let team2 = action.teams[end];
        team2 = createTeam(team2.name, team2.rating, team2.players, team2.logo_url);
  
        if (isUpperBracket) {
          ubRound1.push(team1, team2);
        } else {
          lbRound1.push(team1, team2);
        }
      }

      return {
        ...state,
        ubRound1,
        lbRound1
      };
    
      case actionTypes.PLAY_MATCH:
        let newState = {...state};
        let nextRoundIndex = 0;
        const NEXT_ROUND_KEYMAP = {
          ubRound1: 'ubRound2',
          lbRound1: 'lbRound2',
          ubRound2: 'ubFinals',
          lbRound2: 'lbFinals',
          ubFinals: 'grandFinals',
          lbFinals: 'grandFinals',
          grandFinals: 'winner'
        }

        if (action.index) nextRoundIndex = action.index / 2;
        if (action.round === 'lbFinals') nextRoundIndex = 1;

        newState[NEXT_ROUND_KEYMAP[action.round]][nextRoundIndex] = action.team;    

        return newState;

    default:
      return state;
  }
}