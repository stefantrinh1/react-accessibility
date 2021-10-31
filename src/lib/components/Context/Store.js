// store.js
import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import initialState from './initialState'

const store = createContext(initialState)
const { Provider } = store

const ContextProvider = ({ children }) => {
  // all states are here and have their own reducer which allows multiple functions
  const [globalState, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>
}

export { store, ContextProvider }
