import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <li className={transaction.value > 0 ? 'plus' : 'minus'}>
      {transaction.description} 
      <span>
        {transaction.value > 0 ? `+$${Math.abs(transaction.value)}` : `- $${Math.abs(transaction.value)}`}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction