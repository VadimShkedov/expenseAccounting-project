import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpense";
import "./styles.css";

const ExpenseAccounting = () => {
  const [currentExpenseList, setCurrentExpenseList] = useState([]);

  const addExpense = (data) => {
    const currentDate = new Date(Date.now());

    const finalExpenseObject = {
      ...data,
      expenseId: currentExpenseList.length,
      date: currentDate.toLocaleDateString()
    };

    setCurrentExpenseList([...currentExpenseList, finalExpenseObject]);
  }

  return (
    <section className="accountingExpense">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <DisplayExpenses list={currentExpenseList} />
    </section>
  )
}

export default ExpenseAccounting;