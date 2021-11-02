import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';
import ColorsSelect from './ColorsSelect';

export default function FontColor() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Font Colors'}>
      <ColorsSelect
        value={globalState.fontColor}
        onChange={(color) => dispatch({ type: 'SET_FONT_COLOR', data: color })}
      />
    </SettingsBox>
  );
}
