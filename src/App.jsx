import "./App.css";
import { useRef, useState } from "react";

function App() {
  const stringInput = useRef();
  const [isWarn, setWarn] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();

    const { value } = stringInput.current;
    const stringArray = value.split(' ');
    let isIncorrect = false;

    stringArray.forEach((value) => {
      if (value === ' ' || !isNaN(+value)) { //если пробел или число
        isIncorrect = true;
        setWarn(true);
        return;
      }
    });

    if (!isIncorrect) {
      setWarn(false);
    }
  }

  return (
    <section className="main-section">
      <h1>Учёт моих расходов</h1>
      <form className="main-section-form" onSubmit={handleForm}>
        <div>
          <label htmlFor="whereSpent">Куда было потрачено:</label>
          <input type="text" ref={stringInput} required id="whereSpent" placeholder="Куда было потрачено" />
        </div>
        <div>
          <label htmlFor="howMuch">Сколько было потрачено:</label>
          <input type="number" required min="1" max="100000" id="howMuch" placeholder="Сколько было потрачено" />
        </div>
        <button type="submit">Добавить</button>
      </form>
      <div className="main-section__warning">{(isWarn) ? 'Некорректно введённые данные' : ''}</div>
    </section>
  );
}

export default App;