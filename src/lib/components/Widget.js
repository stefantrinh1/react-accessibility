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
            <Header />
            <WidgetBox>
              <StyleSettings />
            </WidgetBox>
            <Footer />
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
  bottom: 10px;
  right: 10px;
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
  bottom: 10px;
  right: 10px;
  width: calc(100% - 25px);
  max-height: 450px;
  max-width: 380px;
  min-height: 300px;
  min-width: 280px;
  z-index: 9999;
  overflow: hidden;
  border-radius: 10px;
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background-color: white;
  color: purple;
  border-radius: 100px;
  height: 30px;
  width: 30px;
  /* transform: translate(-50%, -50%); */
`;

const WidgetBox = styled.div`
  background-color: #202020;
  width: 100%;
  height: 420px;
  overflow-y: scroll;
  overflow-x: hidden;
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
