import React from 'react'

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+$150.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-$125.00</p>
        </div>
      </div>
  )
}

export default IncomeExpenses