const process = (object: Record<string, unknown>) => {
  return `.class
  ${Object.keys(object).map((key) => {
    return `${key}: ${object[key]}`;
  })}`;
};

export { process };
