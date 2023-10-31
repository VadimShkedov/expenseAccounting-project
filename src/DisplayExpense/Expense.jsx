const Expense = ({ element }) => {
  const { expenseId, whereSpent, howMuch, date } = element;

  return (
    <div className="displayExpenses-list-element">
      <p className="displayExpenses-list-element__expenseName">{expenseId + 1 + ")"} Магазин "{whereSpent}"</p>
      <p>{date}</p>
      <p>{howMuch} р.</p>
    </div>
  )
}

export default Expense;