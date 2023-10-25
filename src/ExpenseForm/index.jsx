import { useState } from "react";
import Warning from "../Warning";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import "./styles.css";

const ExpenseForm = ({ onAddExpense }) => {
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

  const validateAndAddExpense = (values) => {
    const { whereSpent, howMuch } = values;
    const currentDate = new Date(Date.now());

    const data = {
      where: whereSpent,
      cost: howMuch,
      date: currentDate.toLocaleDateString("ru-RU")
    }

    if (numberInputValidation(howMuch)) {
      setWarningMessage('Некорректно введённое число, допустимый диапозон от 1 до 100000');
      return;
    }

    if (stringInputValidation(whereSpent)) {
      setWarningMessage('Некорректно введённые данные');
      return;
    }
    setWarningMessage('');

    return onAddExpense(data);
  }

  return (
    <div>
      <form className="main-form">
        <div>
          <label htmlFor="whereSpent">Куда было потрачено:</label>
          <input type="text" name="whereSpent" id="whereSpent" onChange={handleFieldChange} placeholder="Куда было потрачено" />
        </div>
        <div>
          <label htmlFor="howMuch">Сколько было потрачено:</label>
          <input type="number" name="howMuch" id="howMuch" onChange={handleFieldChange} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={() => validateAndAddExpense(expense)}>Добавить</button>
      </form>
      <Warning message={warningMessage} />
    </div>
  )
}

export default ExpenseForm;