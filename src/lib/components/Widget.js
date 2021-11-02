import React, { useContext } from 'react';
import AccessibilityIcon from './assets/AccessibilityIcon.js';
import CloseIcon from './assets/CloseIcon';
import Header from './Header';
import StyleSettings from './StyleSettings.js';
import Footer from './Footer.js';
import './Widget.css';
import { store } from './Context/Store';
import styled from 'styled-components';

export default function Widget() {
  const { globalState, dispatch } = useContext(store);

  return (
    <Container>
      <InnerContainer>
        <Button onClick={() => dispatch({ type: 'OPEN_WIDGET' })}>
          <AccessibilityIcon />
        </Button>
        {globalState.widgetOpen && (
          <WidgetContainer>
            <CloseButton onClick={() => dispatch({ type: 'CLOSE_WIDGET' })} />
            <WidgetBox>
              <Header />
              <StyleSettings />
              <Footer />
            </WidgetBox>
          </WidgetContainer>
        )}
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const InnerContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0e5eb1;
  color: white;
  padding: 10px;
  border-radius: 500px;
  border: solid 2px white;
  z-index: 9998;
  img {
    max-width: 60px;
  }
`;

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: white;
  color: purple;
  border-radius: 100px;
  height: 30px;
  width: 30px;
  transform: translate(-50%, -50%);
`;

const WidgetBox = styled.div`
  background-color: #202020;
  min-height: 300px;
  min-width: 280px;
  height: 400px;
  max-height: 400px;
  max-width: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  color: white;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #2b2a2a;
    border-radius: 0px 10px 10px 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
