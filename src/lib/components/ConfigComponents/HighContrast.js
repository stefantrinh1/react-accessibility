import React, { useContext } from 'react';
import Toggle from './Toggle';
import { store } from '../Context/Store';
import styled from 'styled-components';
import SettingsBox from './SettingsBox';

export default function HighContrast() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'High Contrast'}>
      <Toggle
        onChange={() =>
          dispatch({
            type: globalState.highContrast
              ? 'UNSET_HIGH_CONTRAST'
              : 'SET_HIGH_CONTRAST',
          })
        }
        checked={globalState.highContrast}
      />
    </SettingsBox>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  h5 {
    margin-right: 0.5rem;
    color: lightgrey;
    font-size: 0.7rem;
  }
`;
