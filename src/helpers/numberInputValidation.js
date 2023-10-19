const numberInputValidation = (event, sendMessage) => {
  const { value } = event.target

  if (value < 1 || value > 100000) {
    sendMessage('Некорректно введённая стоимость, допустимый диапозон от 1 до 100000')
  } else {
    sendMessage('')
  }
}

export default numberInputValidation;