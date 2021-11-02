import React, { useContext } from 'react';
import Toggle from './Toggle';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';

export default function HighlightLinks() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Highlight Titles'}>
      <Toggle
        onChange={() =>
          dispatch({
            type: globalState.highlightTitles
              ? 'UNSET_HIGHLIGHT_TITLES'
              : 'SET_HIGHLIGHT_TITLES',
          })
        }
        checked={globalState.highlightTitles}
      />
    </SettingsBox>
  );
}
