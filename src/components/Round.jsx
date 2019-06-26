import React from 'react';
import Team from './Team';
import styled from 'styled-components';

export default function Round({ teams, gtArea }) {
  const teamsJSX = teams.map(team => <Team key={team.name} team={team} />);

  return <Wrapper gtArea={gtArea}>{teamsJSX}</Wrapper>;
}

const Wrapper = styled.div`
  grid-area: ${props => props.gtArea};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
