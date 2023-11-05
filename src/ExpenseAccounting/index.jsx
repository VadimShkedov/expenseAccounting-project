import { useState, useRef } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpenses";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import "./styles.css";

const ExpenseAccounting = () => {
  const expensesSum = useRef(0);
  const [currentExpenseList, setCurrentExpenseList] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [expense, setExpense] = useState({
    whereSpent: "",
    howMuch: ""
  });

  const handleFieldChange = (event) => {
    setExpense({
      ...expense,
      [event.target.id]: event.target.value,
    });
  }

  const validationField = () => {
    const { howMuch, whereSpent } = expense;

    if (numberInputValidation(howMuch)) {
      setWarningMessage("Некорректно введённое число, допустимый диапозон от 1 до 100000");
      return;
    }

    if (stringInputValidation(whereSpent)) {
      setWarningMessage("Некорректно введённые данные");
      return;
    }

    expensesSum.current += +howMuch;
    const modifiedExpense = {
      ...expense,
      expenseId: currentExpenseList.length,
      date: new Date().toLocaleDateString()
    };

    setCurrentExpenseList([...currentExpenseList, modifiedExpense]);
    setWarningMessage("");
  }

  return (
    <section className="expenseAccounting">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm
        warning={warningMessage}
        validation={validationField}
        handleFields={handleFieldChange}
      />
      <DisplayExpenses
        sum={expensesSum.current} 
        list={currentExpenseList}
      />
    </section>
  )
}

export default ExpenseAccounting;