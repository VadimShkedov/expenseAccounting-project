const Expense = ({ element }) => {
  const { expenseId, whereSpent, howMuch, date } = element;

  return (
    <div className="displayExpensesListElement">
      <p className="displayExpensesListElement__expenseName">{expenseId + 1 + ")"} Магазин "{whereSpent}"</p>
      <p>{date}</p>
      <p>{howMuch} р.</p>
    </div>
  )
}

export default Expense;