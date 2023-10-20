const stringInputValidation = (value) => {
  const noSpaceString = value.trim();
  return (noSpaceString.length === 0 || !isNaN(+noSpaceString));
}

export default stringInputValidation;