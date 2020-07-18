import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const values = transactions.map(transaction => transaction.value)

  const total = values.reduce((acc, value) => {
    return acc += value
  }, 0).toFixed(2)

  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance