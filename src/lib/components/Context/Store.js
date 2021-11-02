// store.js
import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import initialState from './initialState';
import createStyles from '../helpers/createStyles';

const store = createContext(initialState);
const { Provider } = store;

const ContextProvider = ({ children }) => {
  // all states are here and have their own reducer which allows multiple functions
  const [globalState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style id="react-accessibility-styles"></style>`
    );
  }, []);

  useEffect(() => {
    console.log(globalState);

    document.getElementById('react-accessibility-styles').innerHTML =
      createStyles(globalState);

    return () => {};
  }, [globalState]);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};

export { store, ContextProvider };
