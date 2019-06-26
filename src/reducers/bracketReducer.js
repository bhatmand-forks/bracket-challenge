import { actionTypes } from '../actions/bracketActions';

const createTeam = (name, rating, players, logoUrl) => ({
  name: name === '' ? 'OpTic Gaming' : name.trim(),
  elo: rating,
  players,
  logoUrl,
});

let emptyTeam = createTeam('-', 0, [], '');

const determineWinner = teams => {
  if (teams.length === 1) {
    return teams[0];
  } else {
    let team1Score = Math.random() * 300 + teams[0].elo;
    let team2Score = Math.random() * 300 + teams[1].elo;
    return team1Score > team2Score ? teams[0] : teams[1];
  }
};

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
        let winningTeam = determineWinner(action.teams);
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

        newState[NEXT_ROUND_KEYMAP[action.round]][nextRoundIndex] = winningTeam;    

        return newState;
      
      case actionTypes.AUTO_PLAY_TOURNAMENT:
        let ubRound2 = [], lbRound2 = [], ubFinals = [], lbFinals = [], grandFinals = [], winner = [];

        for (let i = 0; i < action.ubRound1.length; i += 2) {
          ubRound2.push(determineWinner([action.ubRound1[i], action.ubRound1[i + 1]]));
          lbRound2.push(determineWinner([action.lbRound1[i], action.lbRound1[i + 1]]));
        }
        for (let i = 0; i < ubRound2.length; i += 2) {
          ubFinals.push(determineWinner([ubRound2[i], ubRound2[i + 1]]));
          lbFinals.push(determineWinner([lbRound2[i], lbRound2[i + 1]]));
        }
        grandFinals.push(determineWinner([ubFinals[0], ubFinals[1]]));
        grandFinals.push(determineWinner([lbFinals[0], lbFinals[1]]));
        winner.push(determineWinner([grandFinals[0], grandFinals[1]]))
      
        return ({
          ...state,
          ubRound2,
          lbRound2,
          ubFinals,
          lbFinals,
          grandFinals,
          winner
        })
      
      case actionTypes.RESET_TOURNAMENT:
        return({
          ...state,
          ubRound2: [emptyTeam, emptyTeam, emptyTeam, emptyTeam],
          lbRound2: [emptyTeam, emptyTeam, emptyTeam, emptyTeam],
          ubFinals: [emptyTeam, emptyTeam],
          lbFinals: [emptyTeam, emptyTeam],
          grandFinals: [emptyTeam, emptyTeam],
          winner: [emptyTeam],
        })
        
    default:
      return state;
  }
}