import Warning from "../Warning";
import "./styles.css";

const ExpenseForm = ({ handleFields, validation, warning }) =>
  <div>
    <form className="expenseForm">
      <div>
        <label htmlFor="whereSpent">Куда было потрачено:</label>
        <input
          type="text"
          className="expenseForm__whereSpent"
          name="whereSpent"
          onChange={handleFields}
          placeholder="Куда было потрачено"
        />
      </div>
      <div>
        <label htmlFor="howMuch">Сколько было потрачено:</label>
        <input
          type="number"
          className="expenseForm__howMuch"
          name="howMuch"
          onChange={handleFields}
          placeholder="Сколько было потрачено"
        />
      </div>
      <button type="button" onClick={validation}>Добавить</button>
    </form>
    <Warning message={warning} />
  </div>

export default ExpenseForm;
