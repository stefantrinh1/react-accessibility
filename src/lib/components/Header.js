import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <h3>Accessibility Settings</h3>
    </Container>
  );
}

const Container = styled.div`
  background-color: purple;
  h3 {
    color: white;
    padding: 20px 30px;
    margin: 0rem 0rem 0.25rem;
    text-align: center;
  }
`;
