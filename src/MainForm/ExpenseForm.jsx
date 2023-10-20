import { useState } from "react";
import Warning from "../Warning/Warning";
import addExpense from "../helpers/addExpense";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [warningMessage, setWarningMessage] = useState('');
  const [inputValues, setInputValues] = useState({});

  return (
    <div>
      <form className="main-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" onChange={(e) => updateInputsState(e, inputValues, setInputValues)} placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" onChange={(e) => updateInputsState(e, inputValues, setInputValues)} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={() => addExpense(inputValues, setWarningMessage)}>Добавить</button>
      </form> 
      <Warning message={warningMessage} />
    </div>
  )
}

const updateInputsState = (event, values, callback) => {
  values[event.target.name] = event.target.value; 
  callback(values);
}

export default ExpenseForm;  