import { useEffect, useState } from 'react';
import Expense from './Expense';
import './styles.css'

const DisplayExpenses = ({ list }) => {
  const [expensesSum, setExpensesSum] = useState(0)
  
  useEffect(() => {
    let sum = 0;
    list.forEach((value) => sum += +value.cost);

    if (sum !== expensesSum) {
      setExpensesSum(sum)
    }
  })

  return (
    <div className="display-expenses">
      <div className="display-expenses__sumExpense">Итого: {expensesSum} р.</div>
      <div className="display-expenses-list">{list.map((expense, index) => <Expense element={expense} index={index} />)}
      </div>
    </div>
  )
}

export default DisplayExpenses;