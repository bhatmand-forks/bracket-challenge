import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { initialState, bracketReducer } from '../reducers/bracketReducer';
import { requestAllTeams, autoPlayTournament, resetTournament } from '../actions/bracketActions';
import Round from './Round';

export default function TournamentBracket() {
  const [bracket, dispatchToBracket] = useReducer(bracketReducer, initialState);

  useEffect(() => {
    requestAllTeams(dispatchToBracket);
  }, []);

  const handlePlay = () => {
    dispatchToBracket(autoPlayTournament(bracket.ubRound1, bracket.lbRound1));
  };

  const handleReset = () => {
    dispatchToBracket(resetTournament());
  };

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
    return (
      <Round
        key={round}
        teams={bracket[round]}
        round={round}
        dispatchToBracket={dispatchToBracket}
      />
    );
  });

  return (
    <>
      {rounds}
      <StyledMenu>
        <StyledButton onClick={handlePlay}>AUTO PLAY</StyledButton>
        <StyledButton onClick={handleReset}>RESET</StyledButton>
      </StyledMenu>
    </>
  );
}

const StyledMenu = styled.div`
  grid-area: menu;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 12em;
`;

const StyledButton = styled.button`
  font-family: 'Permanent Marker', cursive;
  background-color: #660000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
