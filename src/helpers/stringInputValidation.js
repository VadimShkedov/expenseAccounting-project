const stringInputValidation = (value) => {
  const stringWithoutSpace = value.trim();
  
  return (!stringWithoutSpace || !isNaN(stringWithoutSpace));
}

export default stringInputValidation;
