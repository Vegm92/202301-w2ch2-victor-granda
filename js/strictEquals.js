const strictEquals = (valueA, valueB) => {
  if (isNaN(valueA) && isNaN(valueB)) {
    return console.log(`${valueA} and ${valueB} -> ${false}`);
  }
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return console.log(`${valueA} and ${valueB} -> ${true}`);
  }
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return console.log(`${valueA} and ${valueB} -> ${true}`);
  }
  return console.log(
    `${valueA} and ${valueB} -> ${Object.is(valueA, valueB)} `
  );
};

export default strictEquals;
