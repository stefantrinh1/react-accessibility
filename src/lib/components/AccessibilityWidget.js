import React from 'react';
import Widget from './Widget';
import { ContextProvider } from './Context/Store';
export default function AccessibilityWidget() {
  return (
    <ContextProvider>
      <Widget />
    </ContextProvider>
  );
}
