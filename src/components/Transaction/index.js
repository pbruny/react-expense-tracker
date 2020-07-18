import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.value > 0 ? 'plus' : 'minus'}>
      {transaction.description} 
      <span>
        {transaction.value > 0 ? `+$${Math.abs(transaction.value)}` : `- $${Math.abs(transaction.value)}`}
      </span>
      <button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction