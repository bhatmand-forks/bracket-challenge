import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { playMatch } from '../actions/bracketActions';
import Team from './Team';

export default function Match({ teams, round, index, dispatchToBracket }) {
  const handlePlayMatch = e => {
    if (teams[0].name !== '-' && teams[1].name !== '-')
      dispatchToBracket(playMatch(round, teams, index));
  };

  const teamsJSX = teams.map((team, i) => (
    <Team key={`${team.name}-${i}`} team={team} round={round} />
  ));

  return (
    <Wrapper
      className={round === 'winner' && teams[0].name !== '-' && 'pulse'}
      onClick={handlePlayMatch}
    >
      {teamsJSX}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Permanent Marker', cursive;
  background-color: #43464b;
  color: white;
  box-shadow: 3px 3px 13px grey;
  border-radius: 8px;
  height: 80px;
  width: 250px;
  margin-top: 1em;
`;
