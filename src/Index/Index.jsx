import ExpenseForm from "../MainForm/ExpenseForm";
import "./index.css"

const Index = () => {
  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm />
    </section>
  )
}

export default Index;