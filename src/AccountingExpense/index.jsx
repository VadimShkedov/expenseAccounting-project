import ExpenseForm from "../ExpenseForm";
import "./styles.css";

const AccountingExpense = () => {
  return (
    <section className="accountingExpense">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm />
    </section>
  )
}

export default AccountingExpense;