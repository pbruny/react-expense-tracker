import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    {
      id: 1,
      description: 'Salary',
      value: 2500
    },
    {
      id: 2,
      description: 'Cake',
      value: -5
    },
    {
      id: 3,
      description: 'TV',
      value: -799.99
    },
    {
      id: 4,
      description: 'Freela',
      value: 150
    },
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return(
    <GlobalContext.Provider value={{transactions: state.transactions}} >
      {children}
    </GlobalContext.Provider>
  )
}