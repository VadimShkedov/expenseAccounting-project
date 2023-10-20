import numberInputValidation from "./numberInputValidation";
import stringInputValidation from "./stringInputValidation";

const addExpense = (values, sendWarning) => {
  const { whereSpent, howMuch } = values;

  if (numberInputValidation(howMuch)) {
    sendWarning('Некорректно введённое число, допустимый диапозон от 1 до 100000');
    return;
  }
  
  if (stringInputValidation(whereSpent)) {
    sendWarning('Некорректно введённые данные');
    return;
  }

  sendWarning('');
}

export default addExpense;