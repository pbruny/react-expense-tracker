import React from 'react'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <li className="minus">Cash <span>-$400.00</span><button className="delete-btn">x</button></li>
      </ul>
    </>
  )
}

export default TransactionList