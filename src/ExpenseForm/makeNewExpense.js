import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";

const makeNewExpense = (values) => {
  const { whereSpent, howMuch } = values;

  let resultObj = {
    isWarning: false,
    data: { 
      where: whereSpent,
      cost: howMuch,
    },
  }

  if (numberInputValidation(howMuch)) {
    resultObj.data = 'Некорректно введённое число, допустимый диапозон от 1 до 100000';
    resultObj.isWarning = true;
  }

  if (stringInputValidation(whereSpent)) {
    resultObj.data = 'Некорректно введённые данные';
    resultObj.isWarning = true;
  }

  return resultObj;
}

export default makeNewExpense;