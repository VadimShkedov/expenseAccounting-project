import "./styles.css"

const EditingExpense = ({ expense, validationField, handleFieldChange }) => {
  const { whereSpent, howMuch, date } = expense;

  return (
    <form className="editingExpense">
      <input type="text" className="editingExpense__expenseName" id="whereSpent" value={whereSpent} onChange={handleFieldChange} />
      <input type="date" id="date" value={date} onChange={handleFieldChange} />
      <input type="number" id="howMuch" className="editingExpense__howMuch" value={howMuch} onChange={handleFieldChange} />
      <input type="button" className="editingExpenseButtons__applyChanges" onClick={validationField} />
    </form>
  )
}

export default EditingExpense;