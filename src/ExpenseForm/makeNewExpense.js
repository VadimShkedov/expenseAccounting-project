import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";

const makeNewExpense = (values) => {
  const { whereSpent, howMuch } = values;
  const currentDate = new Date(Date.now())

  let resultObj = {
    isWarning: true,
    data: { 
      where: whereSpent,
      cost: howMuch,
      date: currentDate.toLocaleDateString("ru-RU")
    },
  }

  if (numberInputValidation(howMuch)) {
    resultObj.data = 'Некорректно введённое число, допустимый диапозон от 1 до 100000';
  } else if (stringInputValidation(whereSpent)) {
    resultObj.data = 'Некорректно введённые данные';
  } else {
    resultObj.isWarning = false;
  }

  return resultObj;
}

export default makeNewExpense;