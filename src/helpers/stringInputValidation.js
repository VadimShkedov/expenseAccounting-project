const stringInputValidation = (event, sendMessage) => {
  const { value } = event.target
  const noSpaceString = value.trim()

  if (noSpaceString.length === 0 || !isNaN(+noSpaceString)) {
    sendMessage('Некорректно введённые данные');
  } else {
    sendMessage('')
  }
}

export default stringInputValidation;