const stringInputValidation = (value) => {
  const stringWithoutSpace = value.trim();
  return (stringWithoutSpace.length === 0 || !isNaN(+stringWithoutSpace));
}

export default stringInputValidation;