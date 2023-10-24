import { useEffect, useState } from 'react';
import './styles.css'

const DisplayExpenses = ({ list }) => {

  const [expenseSum, setExpenseSum] = useState(0)
  
  useEffect(() => {
    let sum = 0;
    list.forEach((value) => sum += +value.cost)

    if (sum !== expenseSum) {
      setExpenseSum(sum)
    }
  })

  return (
    <div className='display'>

      <div className='sumExpense'>Итого: {expenseSum} р.</div>
      <div className="list">{
        list.map((value, index) => {
          const { where, cost, date } = value;

          return (
            <div key={index} className='element'>
              <p className='expenseName'>{++index + ')'} Магазин "{where}"</p>
              <p className='date'>{date}</p>
              <p className="cost">{cost} р.</p>
            </div>
          )
        })
      }</div>
    </div>
  )
}

export default DisplayExpenses;