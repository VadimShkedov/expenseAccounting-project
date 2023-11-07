import { useContext, useState } from "react";
import EditingExpenseContext from "../editingExpense-context";
import "./styles.css"

const EditingExpense = ({ expense }) => {
  const { deleteExpense, validationField, handleFieldChange } = useContext(EditingExpenseContext)
  const { editExpense, setEditExpense } = useState()

  const { expenseId, whereSpent, howMuch, date } = expense;

  return (
    <div className="editingExpense">
      <p className="editingExpense__expenseName">{expenseId + 1 + ")"} <input type="text" defaultValue={whereSpent} onChange={handleFieldChange} /></p>
      <p><input type="date" defaultValue={date} onChange={handleFieldChange} /></p>
      <p><input type="number" defaultValue={howMuch} onChange={handleFieldChange} /></p>
      <div className="editingExpenseButtons">
        <input type="button" className="editingExpenseButtons__applyChanges" onClick={validationField} />
        <input type="button" className="editingExpenseButtons__delete" onClick={() => deleteExpense(expenseId)} />
      </div>
    </div>
  )
}

export default EditingExpense;