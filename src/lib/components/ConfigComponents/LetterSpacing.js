import React, { useContext } from 'react';
import { store } from '../Context/Store';
import SettingsBox from './SettingsBox';
import Counter from './Counter';

export default function LetterSpacing() {
  const { globalState, dispatch } = useContext(store);

  return (
    <SettingsBox title={'Letter Spacing'}>
      <Counter
        onMinusChange={
          globalState.letterSpacing > -100
            ? () => dispatch({ type: 'MINUS_LETTER_SPACING' })
            : () => {} // do nothing}
        }
        onAddChange={
          globalState.letterSpacing < 100
            ? () => dispatch({ type: 'ADD_LETTER_SPACING' })
            : () => {} // do nothing}
        }
        value={globalState.letterSpacing}
        minValue={-100}
        maxValue={100}
      />
    </SettingsBox>
  );
}
