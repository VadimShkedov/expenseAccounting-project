import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./Index.css"

const Index = () => {
  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm />
    </section>
  )
}

export default Index;