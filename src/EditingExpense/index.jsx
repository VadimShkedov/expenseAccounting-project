import { useContext } from "react";
import EditingExpenseContext from "../editingExpense-context";
import "./styles.css"

const EditingExpense = ({ expense }) => {
  const { deleteExpense, validationField, handleFieldChange } = useContext(EditingExpenseContext)
  const { expenseId, whereSpent, howMuch, date } = expense;

  return (
    <form className="editingExpense">
      <input type="text" className="editingExpense__expenseName" id="whereSpent" defaultValue={whereSpent} onChange={handleFieldChange} />
      <input type="date" id="date" defaultValue={date} onChange={handleFieldChange} />
      <input type="number" id="howMuch" className="editingExpense__howMuch" defaultValue={howMuch} onChange={handleFieldChange} />
      <div className="editingExpenseButtons">
        <input type="button" className="editingExpenseButtons__applyChanges" onClick={validationField} />
        <input type="button" className="editingExpenseButtons__delete" onClick={() => deleteExpense(expenseId)} />
      </div>
    </form>
  )
}

export default EditingExpense;