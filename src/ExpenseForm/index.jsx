import { useState } from "react";
import Warning from "../Warning";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
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
    });
  }

  const validationField = () => {
    const { howMuch, whereSpent } = expense;

    if (numberInputValidation(howMuch)) {
      setWarningMessage('Некорректно введённое число, допустимый диапозон от 1 до 100000');
      return;
    }
  
    if (stringInputValidation(whereSpent)) {
      setWarningMessage('Некорректно введённые данные');
      return;
    }

    setWarningMessage('');
  }

  return (
    <div>
      <form className="expenseForm">
        <div>
          <label htmlFor="whereSpent">Куда было потрачено:</label>
          <input
            className="expenseForm__whereSpent"
            type="text" 
            name="whereSpent" 
            onChange={handleFieldChange} 
            placeholder="Куда было потрачено" 
          />
        </div>
        <div>
          <label htmlFor="howMuch">Сколько было потрачено:</label>
          <input 
            className="expenseForm__howMuch"
            type="number"
            name="howMuch" 
            onChange={handleFieldChange} 
            placeholder="Сколько было потрачено" 
          />
        </div>
        <button type="button" onClick={validationField}>Добавить</button>
      </form>
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;
