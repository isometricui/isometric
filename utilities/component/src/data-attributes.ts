const dataAttributes = (element: string, attributes: Record<string, unknown>) => {
  const customAttributes = Object.assign(
    {},
    ...Object.entries(attributes).map((entry) => {
      return {
        [`data-${element}-${entry[0]}`]: entry[1],
      };
    })
  );
  return { [`data-${element}`]: true, ...customAttributes };
};

export { dataAttributes };
