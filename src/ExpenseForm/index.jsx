import Warning from "../Warning";
import "./styles.css";

const ExpenseForm = ({ handleFields, validation, warning }) =>
  <div>
    <div className="expenseForm">
      <div>
        <label htmlFor="whereSpent">Куда было потрачено:</label>
        <input
          type="text"
          className="expenseForm__whereSpent"
          id="whereSpent"
          onChange={handleFields}
          placeholder="Куда было потрачено"
        />
      </div>
      <div>
        <label htmlFor="howMuch">Сколько было потрачено:</label>
        <input
          type="number"
          className="expenseForm__howMuch"
          id="howMuch"
          onChange={handleFields}
          placeholder="Сколько было потрачено"
        />
      </div>
      <button type="button" className="expenseForm__button" onClick={validation}>Добавить</button>
    </div>
    <Warning message={warning} />
  </div>

export default ExpenseForm;
