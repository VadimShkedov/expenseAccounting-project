import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpenses";
import "./styles.css"

const ExpenseAccounting = () => {
  const [currentExpenseList, setCurrentExpenseList] = useState([]);

  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm onAddExpense={(data) => setCurrentExpenseList([...currentExpenseList, data])} />
      <DisplayExpenses list={currentExpenseList} />
    </section>
  )
}

export default ExpenseAccounting;