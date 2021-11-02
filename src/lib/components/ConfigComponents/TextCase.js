import React, { useContext } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { store } from '../Context/Store';
import styled from 'styled-components';
import SettingsBox from './SettingsBox';

export default function TextCase() {
  const { globalState, dispatch } = useContext(store);

  const options = ['uppercase', 'lowercase', 'capitalize', 'initial'];

  return (
    <SettingsBox title={'Text Case'}>
      <Container>
        <Dropdown
          options={options}
          onChange={(e) => dispatch({ type: 'SET_TEXT_CASE', data: e.value })}
          value={globalState.textCase}
          placeholder='Select an option'
        />
      </Container>
    </SettingsBox>
  );
}

const Container = styled.div`
  .Dropdown-control {
    background-color: transparent;
    border-color: purple;
    color: white;
    width: fit-content;
    font-size: 14px;

    .Dropdown-placeholder {
      text-transform: capitalize !important;
    }
  }
  .Dropdown-option {
    text-transform: capitalize !important;
  }
`;
