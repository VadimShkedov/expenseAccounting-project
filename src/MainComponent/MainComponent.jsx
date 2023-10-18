import MainForm from "../MainForm/MainForm";
import "./MainComponent.css"

const MainComponent = () => {
  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <MainForm />
    </section>
  )
}

export default MainComponent;