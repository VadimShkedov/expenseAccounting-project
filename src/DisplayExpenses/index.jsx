import EditingElement from "../EditingExpense";
import ExpenseElement from "../ExpenseElement";
import "./styles.css";

const DisplayExpenses = ({ list, sum, editExpense, editingIndex, editExpenseHandler, fieldChange, validation }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expenseValue) => {
          const { id } = expenseValue
          if (id === editingIndex) {
            return (
              <EditingElement
                editExpense={editExpenseHandler}
                validationField={validation}
                handleFieldChange={fieldChange}
                key={id}
                expense={editExpense}
              />
            )
          }

          return (
            <ExpenseElement
              editExpense={editExpenseHandler}
              key={id}
              expense={expenseValue}
            />
          )
        })
      }
    </div>
  </div>

export default DisplayExpenses;