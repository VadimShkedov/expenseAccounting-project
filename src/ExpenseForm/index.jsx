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
    console.log(event);
    setExpense({
      ...expense,
      [event.target.id]: event.target.value
    });
  }

  const makeNewExpenseAndValidation = () => {
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
            type="text" 
            id="whereSpent" 
            onChange={handleFieldChange} 
            placeholder="Куда было потрачено" 
          />
        </div>
        <div>
          <label htmlFor="howMuch">Сколько было потрачено:</label>
          <input 
            type="number" 
            id="howMuch" 
            onChange={handleFieldChange} 
            placeholder="Сколько было потрачено" 
          />
        </div>
        <button type="button" onClick={makeNewExpenseAndValidation}>Добавить</button>
      </form>
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;
