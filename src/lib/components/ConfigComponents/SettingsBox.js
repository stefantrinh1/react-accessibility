import React from 'react';
import SubSectionTitle from '../TextContent/SubSectionTitle';
import styled from 'styled-components';

export default function SettingsBox({ title, children }) {
  return (
    <Container>
      <SubSectionTitle>{title}</SubSectionTitle>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  margin: 0rem 0.5rem 0.5rem 0rem;
  flex-grow: 1;
`;
