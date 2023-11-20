import { useState, useRef } from "react";
import ExpenseForm from "../ExpenseForm";
import DisplayExpenses from "../DisplayExpenses";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import dateInputValidation from "../helpers/dateInputValidation";
import "./styles.css";

const ExpenseAccounting = () => {
  const expensesSum = useRef(0);
  const [currentExpenseList, setCurrentExpenseList] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [expense, setExpense] = useState({
    whereSpent: "",
    howMuch: "",
    id: 0
  });
  const [editExpense, setEditExpense] = useState({
    whereSpent: "",
    howMuch: "",
    date: "",
    id: null,
  });

  const handleChangeField = (event) => {
    const { value, id } = event.target;

    if (!isNaN(value)) {
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

  const handleAddField = (event) => {
    const { value, id } = event.target;

    if (!isNaN(value)) {
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

    if (stringInputValidation(whereSpent)) {
      setWarningMessage("Некорректно введённые данные");
      return;
    }

    if (numberInputValidation(howMuch)) {
      setWarningMessage("Некорректно введённое число, допустимый диапозон от 1 до 100000");
      return;
    }

    expensesSum.current += howMuch;
    const dateToISO = new Date().toISOString();

    const modifiedExpense = {
      ...expense,
      date: dateToISO.split('T')[0],
    };

    setExpense({
      whereSpent: "",
      howMuch: "",
      id: expense.id + 1
    });
    setWarningMessage("");
    setCurrentExpenseList([...currentExpenseList, modifiedExpense]);
  }

  const editingExpenseValidation = () => {
    const { howMuch, whereSpent, id, date } = editExpense;

    if (stringInputValidation(whereSpent)) {
      setWarningMessage("Некорректно введённые данные");
      return;
    }

    if (dateInputValidation(date)) {
      setWarningMessage("Некорректно введённая дата");
      return;
    }

    if (numberInputValidation(howMuch)) {
      setWarningMessage("Некорректно введённое число, допустимый диапозон от 1 до 100000");
      return;
    }

    const diffBetweenOldNewCost = howMuch - currentExpenseList[id].howMuch;
    expensesSum.current += diffBetweenOldNewCost;
    currentExpenseList[id] = editExpense;

    setCurrentExpenseList(currentExpenseList);
    setWarningMessage("");
    setEditExpense({
      whereSpent: "",
      howMuch: "",
      date: "",
      id: null,
    });
  }

  const handleDeleteExpense = (expenseId) => {
    expensesSum.current -= currentExpenseList[expenseId].howMuch;
    const expenseListAfterDelete = currentExpenseList.filter((value) => value.id !== expenseId);
  
    setCurrentExpenseList(expenseListAfterDelete);
  }

  const handleEditingExpense = (expenseId) => setEditExpense(currentExpenseList[expenseId]);

  return (
    <section className="expenseAccounting">
      <h1>Учёт моих расходов</h1>
      <ExpenseForm
        expense={expense}
        warning={warningMessage}
        validation={addingExpenseValidation}
        handleFields={handleAddField}
      />
      <DisplayExpenses
        sum={expensesSum.current}
        list={currentExpenseList}
        editingExpense={editExpense}

        handleEditingExpense={handleEditingExpense}
        handleDeletingExpense={handleDeleteExpense}
        handleChangeField={handleChangeField}
        validationField={editingExpenseValidation}
      />
    </section>
  )
}

export default ExpenseAccounting;