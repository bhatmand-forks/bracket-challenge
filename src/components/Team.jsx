import React from 'react';
import styled from 'styled-components';

export default function Team({ team }) {
  return (
    <Wrapper>
      <StyledImg src={team.logoUrl} />
      <p>{team.name}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  height: 40px;
  width: 130px;
`;

const StyledImg = styled.img`
  max-width: 30px;
  max-height: 30px;
`;
