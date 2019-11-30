export default (dataPropName: string) => {
  if (!dataPropName) {
    return "please provide your Data PropName";
  }

  if (dataPropName && typeof dataPropName !== "string") {
    return `dataPropName ${dataPropName} should be string`;
  }
};
