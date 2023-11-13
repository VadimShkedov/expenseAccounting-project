import EditingElement from "../EditingExpense";
import ExpenseElement from "../ExpenseElement";
import "./styles.css";

const DisplayExpenses = ({ list, sum, editExpenseHandler, editingExpense, fieldChange, validation }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expenseValue) => {
          const { id } = expenseValue;

          if (editingExpense?.id === id) {
            return (
              <EditingElement
                expense={editingExpense}
                handleEditExpense={editExpenseHandler}
                validationField={validation}
                handleFieldChange={fieldChange}
                key={id}
              />
            )
          }

          return (
            <ExpenseElement
              expense={expenseValue}
              handleEditExpense={editExpenseHandler}
              key={id}
            />
          )
        })
      }
    </div>
  </div>

export default DisplayExpenses;