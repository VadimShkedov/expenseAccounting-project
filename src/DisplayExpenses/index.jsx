import EditingExpense from "../EditingExpense";
import ExpenseElement from "../ExpenseElement";
import "./styles.css";

const DisplayExpenses = ({ list, sum, handleEditingExpense, handleDeletingExpense, editingExpense, handleChangeField, validationField }) =>
  <div className="displayExpenses">
    <div className="displayExpenses__sumExpense">Итого: {sum} р.</div>
    <div className="displayExpensesList">
      {
        list.map((expense) => {
          const { id } = expense;

          if (editingExpense?.id === id) {
            return (
              <EditingExpense
                expense={editingExpense}
                validationField={validationField}
                handleChangeField={handleChangeField}
                key={id}
              />
            )
          }

          return (
            <ExpenseElement
              expense={expense}
              handleDeletingExpense={handleDeletingExpense}
              handleEditingExpense={handleEditingExpense}
              key={id}
            />
          )
        })
      }
    </div>
  </div>

export default DisplayExpenses;