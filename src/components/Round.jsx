import React from 'react';
import styled from 'styled-components';
import Match from './Match';

export default function Round({ teams, round, dispatchToBracket }) {
  const matchesJSX = [];
  if (teams.length === 1) {
    matchesJSX.push(
      <Match
        key={`${teams[0].name}-${0}`}
        teams={teams}
        round={round}
        index={0}
        dispatchToBracket={dispatchToBracket}
      />
    );
  } else {
    for (let i = 0; i < teams.length; i += 2) {
      matchesJSX.push(
        <Match
          key={`${teams[i].name}-${i}`}
          teams={[teams[i], teams[i + 1]]}
          round={round}
          index={i}
          dispatchToBracket={dispatchToBracket}
        />
      );
    }
  }

  return <Wrapper round={round}>{matchesJSX}</Wrapper>;
}

const Wrapper = styled.div`
  grid-area: ${props => props.round};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
