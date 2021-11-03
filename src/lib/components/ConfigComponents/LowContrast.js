import React, { useContext } from 'react';
import Toggle from './Toggle';
import { store } from '../Context/Store';
import styled from 'styled-components';
import SettingsBox from './SettingsBox';

export default function LowContrast() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Low Contrast'}>
      <Toggle
        onChange={() =>
          dispatch({
            type: globalState.lowContrast
              ? 'UNSET_LOW_CONTRAST'
              : 'SET_LOW_CONTRAST',
          })
        }
        checked={globalState.lowContrast}
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
