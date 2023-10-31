import Expense from "./Expense";
import "./styles.css";

const DisplayExpenses = ({ list, sum }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expense) =>
          <Expense
            key={expense.expenseId}
            element={expense}
          />
        )}
    </div>
  </div>

export default DisplayExpenses;