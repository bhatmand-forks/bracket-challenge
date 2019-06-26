import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { initialState, bracketReducer } from './bracketReducer';
import { receiveAllTeams } from './bracketActions';
import Round from './Round';

export default function TournamentBracket() {
  const [bracket, dispatchToBracket] = useReducer(bracketReducer, initialState);

  useEffect(() => {
    const fetchAllTeams = async () => {
      let { data: teams } = await axios('https://api.opendota.com/api/teams');
      dispatchToBracket(receiveAllTeams(teams.slice(0, 16)));
    };
    fetchAllTeams();
  }, []);

  let rounds = [
    'ubRound1',
    'lbRound1',
    'ubRound2',
    'lbRound2',
    'ubFinals',
    'lbFinals',
    'grandFinals',
    'winner',
  ];

  rounds = rounds.map(round => {
    return <Round key={round} teams={bracket[round]} gtArea={round} />;
  });

  return <>{rounds}</>;
}
