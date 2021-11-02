import React, { useContext } from 'react';
import Toggle from './Toggle';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';

export default function HighlightLinks() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Highlight Links'}>
      <Toggle
        onChange={() =>
          dispatch({
            type: globalState.highlightLinks
              ? 'UNSET_HIGHLIGHT_LINKS'
              : 'SET_HIGHLIGHT_LINKS',
          })
        }
        checked={globalState.highlightLinks}
      />
    </SettingsBox>
  );
}
