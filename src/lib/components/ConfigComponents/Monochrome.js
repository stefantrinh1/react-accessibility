import React, { useContext } from 'react';
import Toggle from './Toggle';
import { store } from '../Context/Store';
import styled from 'styled-components';
import SettingsBox from './SettingsBox';

export default function HideImages() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Monochrome / Black and White'}>
      <Toggle
        onChange={() =>
          dispatch({
            type: globalState.monochrome
              ? 'UNSET_MONOCHROME'
              : 'SET_MONOCHROME',
          })
        }
        checked={globalState.monochrome}
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
