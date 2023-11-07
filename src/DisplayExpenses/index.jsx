import EditingElement from "../EditingExpense";
import ExpenseElement from "../ExpenseElement";
import "./styles.css";

const DisplayExpenses = ({ list, sum, editingElementId }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expense) => {
          const { expenseId } = expense

          if (editingElementId === expenseId) {
            return (
              <EditingElement
                key={expenseId}
                expense={expense}
              />
            )
          }

          return (
            <ExpenseElement
              key={expenseId}
              expense={expense}
            />
          )
        })
      }
    </div>
  </div>

export default DisplayExpenses;