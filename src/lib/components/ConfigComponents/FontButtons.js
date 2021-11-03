import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';
import ColorsSelect from './ColorsSelect';
import BoldIcon from '../assets/BoldIcon';
import TextAlignLeftIcon from '../assets/TextAlignLeftIcon';
import TextAlignCenterIcon from '../assets/TextAlignCenterIcon';
import TextAlignRightIcon from '../assets/TextAlignRightIcon';
import ItalicIcon from '../assets/ItalicIcon';
import styled from 'styled-components';

export default function FontColor() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Font Styles'}>
      <Row>
        <Button
          active={globalState.textBold}
          onClick={() => dispatch({ type: 'TOGGLE_BOLD' })}
        >
          <BoldIcon />
        </Button>
        <Button
          active={globalState.textItalic}
          onClick={() => dispatch({ type: 'TOGGLE_ITALIC' })}
        >
          <ItalicIcon />
        </Button>
        <Button
          active={globalState.textAlignment === 'left'}
          onClick={() => dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'left' })}
        >
          <TextAlignLeftIcon />
        </Button>

        <Button
          active={globalState.textAlignment === 'center'}
          onClick={() =>
            dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'center' })
          }
        >
          <TextAlignCenterIcon />
        </Button>

        <Button
          active={globalState.textAlignment === 'right'}
          onClick={() =>
            dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'right' })
          }
        >
          <TextAlignRightIcon />
        </Button>
      </Row>
    </SettingsBox>
  );
}

const Button = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  color: white;
  font-size: 22px;
  background-color: ${(props) => (props.active ? 'grey' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0.25rem 0.25rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
