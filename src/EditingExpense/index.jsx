import "./styles.css"

const EditingExpense = ({ expense, validationField, handleChangeField }) => {
  const { whereSpent, howMuch, date } = expense;

  return (
    <div className="editingExpense">
      <input type="text" className="editingExpense__expenseName" id="whereSpent" value={whereSpent} onChange={handleChangeField} />
      <input type="date" id="date" value={date} onChange={handleChangeField} />
      <input type="number" id="howMuch" className="editingExpense__howMuch" value={howMuch} onChange={handleChangeField} />
      <button className="editingExpense__applyChanges" onClick={validationField}></button>
    </div>
  )
}

export default EditingExpense;