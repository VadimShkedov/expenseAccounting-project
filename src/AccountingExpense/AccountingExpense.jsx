import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";
import "./styles.css"

const AccountingExpense = () => {

  const [currentExpenseList, setCurrentExpenseList] = useState([])

  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm callback={setCurrentExpenseList} list={currentExpenseList} />
      <DisplayExpenses list={currentExpenseList} />
    </section>
  )
}

export default AccountingExpense;