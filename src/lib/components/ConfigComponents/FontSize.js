import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';
import Counter from './Counter';

export default function FontSize() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Font Size'}>
      <Counter
        onMinusChange={
          globalState.fontSizeAdjustment >= -100
            ? () => dispatch({ type: 'MINUS_FONT_SIZE' })
            : () => {} // do nothing
        }
        onAddChange={
          globalState.fontSizeAdjustment <= 100
            ? () => dispatch({ type: 'ADD_FONT_SIZE' })
            : () => {} // do nothing
        }
        value={globalState.fontSizeAdjustment}
        minValue={-100}
        maxValue={100}
      />
    </SettingsBox>
  );
}
