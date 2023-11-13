import "./styles.css"

const EditingExpense = ({ expense, handleEditExpense, validationField, handleFieldChange }) => {
  const { id, whereSpent, howMuch, date } = expense;

  return (
    <form className="editingExpense">
      <input type="text" className="editingExpense__expenseName" id="whereSpent" value={whereSpent} onChange={handleFieldChange} />
      <input type="date" id="date" value={date} onChange={handleFieldChange} />
      <input type="number" id="howMuch" className="editingExpense__howMuch" value={howMuch} onChange={handleFieldChange} />
      <div className="editingExpenseButtons">
        <input type="button" className="editingExpenseButtons__applyChanges" onClick={validationField} />
        <input type="button" className="editingExpenseButtons__delete" onClick={() => handleEditExpense(id, true)} />
      </div>
    </form>
  )
}

export default EditingExpense;