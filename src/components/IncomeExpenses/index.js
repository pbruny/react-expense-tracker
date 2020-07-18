import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const income = transactions.map(transaction => {
    return transaction.value > 0 ? transaction.value : 0
  })

  const expense = transactions.map(transaction => {
    return transaction.value < 0 ? transaction.value : 0
  })

  const totalIncome = income.reduce((acc, income) => (
    acc += income
  ), 0).toFixed(2)

  const totalExpense = expense.reduce((acc, expense) => (
    acc += Math.abs(expense)
  ), 0).toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${totalExpense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses