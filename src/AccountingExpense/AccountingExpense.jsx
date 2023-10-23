import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";
import "./AccountingExpense.css"

const AccountingExpense = () => {

  const [expenseList, setExpenseList] = useState([])

  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm callback={setExpenseList} />
      <DisplayExpenses list={expenseList} />
    </section>
  )
}

export default AccountingExpense;