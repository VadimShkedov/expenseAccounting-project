import "./styles.css";

const ExpenseElement = ({ expense, editExpense }) => {
  const { id, whereSpent, howMuch, date } = expense;

  return (
    <div className="expenseElement">
      <p className="expenseElement__expenseName">{id + 1 + ")"} {whereSpent}</p>
      <div className="expenseElementInfo">
        <p>{date}</p>
        <p className="expenseElementInfo__howMuch">{howMuch} р.</p>
        <div className="expenseElementInfoButtons">
          <input type="button" className="expenseElementInfoButtons__edit" onClick={() => editExpense(id)} />
          <input type="button" className="expenseElementInfoButtons__delete" onClick={() => editExpense(id, true)}/>          
        </div>
      </div>
    </div>
  )
}

export default ExpenseElement;