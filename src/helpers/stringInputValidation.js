const stringInputValidation = (value) => {
  const stringWithoutSpace = value.trim();
  return (!stringWithoutSpace.trim() || !isNaN(+stringWithoutSpace));
}

export default stringInputValidation;