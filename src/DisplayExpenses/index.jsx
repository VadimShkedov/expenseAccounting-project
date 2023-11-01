import ExpenseElement from "../ExpenseElement";
import "./styles.css";

const DisplayExpenses = ({ list, sum }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expense) =>
          <ExpenseElement
            key={expense.expenseId}
            expense={expense}
          />
        )}
    </div>
  </div>

export default DisplayExpenses;