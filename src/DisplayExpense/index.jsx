import { useEffect, useState } from "react";
import Expense from "./Expense";
import "./styles.css";

const DisplayExpenses = ({ list }) => {
  const [expensesSum, setExpensesSum] = useState(0);

  useEffect(() => {
    let sum = 0;
    list.forEach((value) => sum += +value.howMuch);
    setExpensesSum(sum);
  }, [list]);

  return (
    <div className="displayExpenses">
      <div className="displayExpenses__sumExpense">Итого: {expensesSum} р.</div>
      <div className="displayExpenses-list">{list.map((expense, index) => <Expense key={index} element={expense} />)}
      </div>
    </div>
  )
}

export default DisplayExpenses;