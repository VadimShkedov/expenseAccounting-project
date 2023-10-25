const Expense = ({ element, index }) => {
  const { where, cost, date } = element;

  return (
    <div key={index} className="display-expenses-list-element">
      <p className="display-expenses-list-element__expenseName">{++index + ')'} Магазин "{where}"</p>
      <p>{date}</p>
      <p>{cost} р.</p>
    </div>
  )
}

export default Expense;