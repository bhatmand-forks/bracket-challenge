import React from 'react';
import styled from 'styled-components';

export default function Team({ team }) {
  return (
    <>
      <StyledImg src={team.logoUrl} />
      <p>{team.name}</p>
    </>
  );
}

const StyledImg = styled.img`
  max-width: 30px;
  max-height: 30px;
`;
