import { useState } from "react";
import Warning from "../Warning";
import makeNewExpense from "./makeNewExpense";
import "./styles.css";

const ExpenseForm = () => {
  const [warningMessage, setWarningMessage] = useState('');
  const [expense, setExpense] = useState({
    whereSpent: '',
    howMuch: ''
  });

  const handleFieldChange = (event) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value
    })
  }

  const handleNewExpense = () => {
    const { isWarning, data } = makeNewExpense(expense);

    if (isWarning) {
      setWarningMessage(data);
      return;
    }

    setWarningMessage('');
  }

  return (
    <div>
      <form className="main-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" className="main-form__whereInput" onChange={handleFieldChange} placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" className="main-form__howMuch" onChange={handleFieldChange} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={handleNewExpense}>Добавить</button>
      </form>
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;
