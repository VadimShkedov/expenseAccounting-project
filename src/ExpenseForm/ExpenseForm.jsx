import { useState } from "react";
import Warning from "../Warning/Warning";
import makeNewExpense from "./makeNewExpense";
import "./styles.css";

const ExpenseForm = ({ callback, list }) => {
  const [warningMessage, setWarningMessage] = useState('');
  const [expense, setExpense] = useState({
    whereSpent: '',
    howMuch: ''
  });

  const updateInputsState = (event) => {
    expense[event.target.name] = event.target.value;
    setExpense(expense)
  }

  const handleNewExpense = () => {
    const { isWarning, data } = makeNewExpense(expense);

    if (isWarning) {
      setWarningMessage(data);
      return;
    }

    const newExpense = [...list]
    newExpense.push(data)
    callback(newExpense)
    setWarningMessage('');
  }

  return (
    <div>
      <form className="main-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" className="whereInput" onChange={updateInputsState} placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" className="costInput" onChange={updateInputsState} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={handleNewExpense}>Добавить</button>
      </form>
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;