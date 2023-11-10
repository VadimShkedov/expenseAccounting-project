import { useState, useRef } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpenses";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import "./styles.css";

const ExpenseAccounting = () => {
  const expensesSum = useRef(0);
  const [editingIndex, setEditingIndex] = useState(-1)
  const [currentExpenseList, setCurrentExpenseList] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [expense, setExpense] = useState({
    whereSpent: "",
    howMuch: "",
  });
  const [editExpense, setEditExpense] = useState({
    whereSpent: "",
    howMuch: "",
    date: null,
    id: -1
  })

  const handleEditExpenseFieldChange = (event) => {
    const { value, id } = event.target

    if (id === 'howMuch') {
      console.log(parseInt(value));
      setEditExpense({
        ...editExpense,
        [id]: parseInt(value),
      });
      return;
    }

    setEditExpense({
      ...editExpense,
      [id]: value
    })
  }

  const handleExpenseFormFieldChange = (event) => {
    const { value, id } = event.target
    
    if (id === 'howMuch') {
      setExpense({
        ...expense,
        [id]: parseInt(value),
      });
      return;
    }

    setExpense({
      ...expense,
      [id]: value,
    });
  }

  const addingExpenseValidation = () => {
    const { howMuch, whereSpent } = expense

    if (numberInputValidation(howMuch)) {
      setWarningMessage("Некорректно введённое число, допустимый диапозон от 1 до 100000");
      return;
    }

    if (stringInputValidation(whereSpent)) {
      setWarningMessage("Некорректно введённые данные");
      return;
    }
    setWarningMessage("");

    expensesSum.current += howMuch;
    const dateToISO = new Date().toISOString()

    const modifiedExpense = {
      ...expense,
      id: currentExpenseList.length,
      date: dateToISO.split('T')[0]
    }

    setCurrentExpenseList([...currentExpenseList, modifiedExpense]);
  }

  const editingExpenseValidation = () => {
    const { howMuch, whereSpent, id } = editExpense

    if (numberInputValidation(howMuch)) {
      setWarningMessage("Некорректно введённое число, допустимый диапозон от 1 до 100000");
      return;
    }

    if (stringInputValidation(whereSpent)) {
      setWarningMessage("Некорректно введённые данные");
      return;
    }

    const diffBetweenOldNewCost = howMuch - currentExpenseList[id].howMuch;
    expensesSum.current += diffBetweenOldNewCost;
    currentExpenseList[id] = editExpense;
    setCurrentExpenseList(currentExpenseList)
    setWarningMessage("")
    setEditingIndex(-1)
  }

  const handleEditingExpense = (expenseId, isDeleting = false) => {
    if (isDeleting) {
      const expenseListAfterDelete = []

      currentExpenseList.forEach((value, index) => {
        if (index < expenseId) {
          expenseListAfterDelete.push(value)
        }

        if (index > expenseId) {
          value.id--
          expenseListAfterDelete.push(value)
        }
      })
      expensesSum.current -= currentExpenseList[expenseId].howMuch
      setCurrentExpenseList(expenseListAfterDelete)
      return;
    }

    const currentEditExpense = currentExpenseList.find((expense) => expense.id === expenseId)
    setEditingIndex(expenseId)
    setEditExpense(currentEditExpense)
  }

  return (
    <section className="expenseAccounting">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm
        warning={warningMessage}
        validation={addingExpenseValidation}
        handleFields={handleExpenseFormFieldChange}
      />
      <DisplayExpenses
        sum={expensesSum.current}
        list={currentExpenseList}
        editExpense={editExpense}
        editingIndex={editingIndex}
        editExpenseHandler={handleEditingExpense}
        fieldChange={handleEditExpenseFieldChange}
        validation={editingExpenseValidation}
      />
    </section>
  )
}

export default ExpenseAccounting;