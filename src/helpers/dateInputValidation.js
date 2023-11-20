const dateInputValidation = (stringDate) => {
  const dateInRegexp = new RegExp("^((19|20)[0-9]{2})-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$");
  const isDate = dateInRegexp.test(stringDate);

  const timeInMilliseconds = new Date(stringDate).getTime();
  const dateBottomLine = new Date("2000-01-01").getTime();

  return (!isDate || (timeInMilliseconds > Date.now() && dateBottomLine < timeInMilliseconds));
}

export default dateInputValidation;