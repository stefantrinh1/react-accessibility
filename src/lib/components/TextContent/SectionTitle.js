import React from 'react';
import styled from 'styled-components';

export default function SectionTitle({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h4`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  color: lightgrey;
  margin: 0px 0px 16px;
`;
