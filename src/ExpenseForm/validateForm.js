import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";

const validateForm = (values) => {
  const { whereSpent, howMuch } = values;
  
  let resultObj = {
    isWarning: true,
    data: null
  }

  if (numberInputValidation(howMuch)) {
    resultObj.data = 'Некорректно введённое число, допустимый диапозон от 1 до 100000';

  } else if (stringInputValidation(whereSpent)) {
    resultObj.data = 'Некорректно введённые данные';

  } else {
    resultObj = {
      isWarning: false,
      data: { whereSpent, howMuch }
    }
  }

  return resultObj;
}

export default validateForm;