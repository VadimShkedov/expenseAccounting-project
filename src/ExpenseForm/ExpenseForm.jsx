import { useState } from "react";
import Warning from "../Warning/Warning";
import validateForm from "./validateForm";
import "./ExpenseForm.css";

const ExpenseForm = ({ callback }) => {
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
    const { isWarning, data } = validateForm(expense);
    (isWarning) ? setWarningMessage(data) : callback(data)
  }
  
  return (
    <div>
      <form className="main-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" onChange={(e) => updateInputsState(e)} placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" onChange={(e) => updateInputsState(e)} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={handleNewExpense}>Добавить</button>
      </form> 
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;  