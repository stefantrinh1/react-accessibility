import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';
import ColorsSelect from './ColorsSelect';

export default function FontColor() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Title Colors'}>
      <ColorsSelect
        value={globalState.titleColor}
        onChange={(color) => dispatch({ type: 'SET_TITLE_COLOR', data: color })}
      />
    </SettingsBox>
  );
}
