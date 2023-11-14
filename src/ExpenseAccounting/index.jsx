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
    howMuch: "",
  });
  const [editExpense, setEditExpense] = useState({
    whereSpent: "",
    howMuch: "",
    id: -1,
  });

  const handleEditExpenseFieldChange = (event) => {
    const { value, id } = event.target;

    if (id === 'howMuch') {
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
    const { value, id } = event.target;
    
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
    const { howMuch, whereSpent } = expense;

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
    const dateToISO = new Date().toISOString();

    const modifiedExpense = {
      ...expense,
      id: currentExpenseList.length,
      date: dateToISO.split('T')[0],
    };

    setCurrentExpenseList([...currentExpenseList, modifiedExpense]);
  }

  const editingExpenseValidation = () => {
    const { howMuch, whereSpent, id } = editExpense;

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

    setEditExpense(null);
    setCurrentExpenseList(currentExpenseList);
    setWarningMessage("");
  }

  const handleEditingExpense = (expenseId, isDeleting = false) => {
    if (isDeleting) {
      const expenseListAfterDelete = [];

      currentExpenseList.forEach((value, index) => {
        if (index < expenseId) {
          expenseListAfterDelete.push(value);
        }

        if (index > expenseId) {
          value.id--;
          expenseListAfterDelete.push(value);
        }
      })
      expensesSum.current -= currentExpenseList[expenseId].howMuch;
      setCurrentExpenseList(expenseListAfterDelete);
      return;
    }

    setEditExpense(currentExpenseList[expenseId]);
  }

  return (
    <section className="expenseAccounting">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm
        expense={expense}
        warning={warningMessage}
        validation={addingExpenseValidation}
        handleFields={handleExpenseFormFieldChange}
      />
      <DisplayExpenses
        sum={expensesSum.current}
        list={currentExpenseList}
        editingExpense={editExpense}
        editExpenseHandler={handleEditingExpense}
        fieldChange={handleEditExpenseFieldChange}
        validation={editingExpenseValidation}
      />
    </section>
  )
}

export default ExpenseAccounting;