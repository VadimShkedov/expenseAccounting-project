const numberInputValidation = (value) => isNaN(+value) || (value < 1 || value > 100000);

export default numberInputValidation;