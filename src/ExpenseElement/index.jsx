import { useContext } from "react";
import EditingExpenseContext from "../editingExpense-context";
import "./styles.css";

const ExpenseElement = ({ expense }) => {
  const { deleteExpense, editExpense } = useContext(EditingExpenseContext)
  const { expenseId, whereSpent, howMuch, date } = expense;

  return (
    <div className="expenseElement">
      <p className="expenseElement__expenseName">{expenseId + 1 + ")"} {whereSpent}</p>
      <p>{date}</p>
      <p className="editingExpense__howMuch">{howMuch} р.</p>
      <div className="expenseElementButtons">
        <input type="button" className="expenseElementButtons__edit" onClick={() => editExpense(expenseId)} />
        <input type="button" className="expenseElementButtons__delete" onClick={() => deleteExpense(expenseId)}/>          
      </div>
    </div>
  )
}

export default ExpenseElement;