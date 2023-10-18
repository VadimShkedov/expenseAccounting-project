const formHandler = (event, sendMessage) => {
  const formData = new FormData(event.target.form)

  const howMuchValue = +formData.get('howMuch');
  let isIncorrect = false;

  if (howMuchValue < 1 || howMuchValue > 100000) {
    isIncorrect = true;
    sendMessage('Некорректно введённая стоимость, допустимый диапозон от 1 до 100000')
    return;
  }

  const whereSpentValue = formData.get('whereSpent');
  const stringArray = whereSpentValue.split(' ');

  stringArray.forEach((value) => {
    if (value === ' ' || !isNaN(+value)) { //если пробел или число
      isIncorrect = true;
      sendMessage('Некорректно введённые данные');
      return;
    }
  });

  if (!isIncorrect) {
    sendMessage('');
  }
}

export default formHandler;