import "./styles.css";

const ExpenseElement = ({ expense }) => {
  const { expenseId, whereSpent, howMuch, date } = expense;

  return (
    <div className="expenseElement">
      <p className="expenseElement__expenseName">{expenseId + 1 + ")"} "{whereSpent}"</p>
      <p>{date}</p>
      <p>{howMuch} р.</p>
    </div>
  )
}

export default ExpenseElement;