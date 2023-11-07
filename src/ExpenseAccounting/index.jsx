import { useState, useRef } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpenses";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import EditingExpenseContext from "../editingExpense-context";
import "./styles.css";

const ExpenseAccounting = () => {
  const expensesSum = useRef(0);
  const [indexEditingComponent, setIndexEditingComponent] = useState(-1)
  const [currentExpenseList, setCurrentExpenseList] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [expense, setExpense] = useState({
    whereSpent: "",
    howMuch: "",
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

  const deleteExpense = (deletedExpenseId) => {
    const expenseListAfterDelete = []

    currentExpenseList.forEach((value, index) => {
      if (index < deletedExpenseId) {
        expenseListAfterDelete.push(value)
      }

      if (index > deletedExpenseId) {
        value.expenseId--
        expenseListAfterDelete.push(value)
      }
    })

    const { howMuch } = currentExpenseList[deletedExpenseId]
    expensesSum.current -= howMuch

    setIndexEditingComponent(-1)
    setCurrentExpenseList(expenseListAfterDelete)
  }

  const editExpense = (expenseId) => setIndexEditingComponent(expenseId)

  const applyEditingExpense = (expense) => {

  }

  return (
    <section className="expenseAccounting">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm
        warning={warningMessage}
        validation={validationField}
        handleFields={handleFieldChange}
      />
      <EditingExpenseContext.Provider value={{ deleteExpense, editExpense, applyEditingExpense }}>
        <DisplayExpenses
          sum={expensesSum.current}
          list={currentExpenseList}
          editingElementId={indexEditingComponent}
        />
      </EditingExpenseContext.Provider>
    </section>
  )
}

export default ExpenseAccounting;