import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SubSectionTitle from '../TextContent/SubSectionTitle';
import styled from 'styled-components';
import SettingsBox from './SettingsBox';
import ColorsSelect from './ColorsSelect';

export default function TitleBackgroundColor() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Title Background Color'}>
      <ColorsSelect
        value={globalState.titleBackgroundColor}
        onChange={(color) =>
          dispatch({ type: 'SET_TITLE_BACKGROUND_COLOR', data: color })
        }
      />
    </SettingsBox>
  );
}
