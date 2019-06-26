import React from 'react';
import styled from 'styled-components';

export default function Team({ team }) {
  const playersJSX = team.players.map(player => <p key={player}>{player}</p>);

  return (
    <>
      <StyledImg src={team.logoUrl} />
      <div className='btn btn-primary tooltip'>
        {team.name !== '-' && team.name}
        <div className='right'>
          <h3>***Roster***</h3>
          {playersJSX}
        </div>
      </div>
    </>
  );
}

const StyledImg = styled.img`
  padding-left: 20px;
  max-width: 30px;
  max-height: 30px;
`;
