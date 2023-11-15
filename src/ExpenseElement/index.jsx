import "./styles.css";

const Expense = ({ expense, handleEditingExpense, handleDeletingExpense }) => {
  const { id, whereSpent, howMuch, date } = expense;

  return (
    <div className="expense">
      <p className="expense__expenseName">{id + 1 + ")"} {whereSpent}</p>
      <div className="expenseInfo">
        <p>{date}</p>
        <p className="expenseInfo__howMuch">{howMuch} р.</p>
        <div className="expenseInfoButtons">
          <button className="expenseInfoButtons__edit" onClick={() => handleEditingExpense(id)}></button>
          <button className="expenseInfoButtons__delete" onClick={() => handleDeletingExpense(id)}></button>
        </div>
      </div>
    </div>
  )
}

export default Expense;