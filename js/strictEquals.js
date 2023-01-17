const strictEquals = (valueA, valueB) => {
  if (isNaN(valueA) && isNaN(valueB)) {
    return `${valueA} and ${valueB} -> ${false}`;
  }
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return `${valueA} and ${valueB} -> ${true}`;
  }
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return `${valueA} and ${valueB} -> ${true}`;
  }
  return `${valueA} and ${valueB} -> ${Object.is(valueA, valueB)} `;
};

console.log(`${strictEquals(1, 1)}: should be true`);
console.log(`${strictEquals(NaN, NaN)}: should be false`);
console.log(`${strictEquals(0, -0)}: should be true`);
console.log(`${strictEquals(-0, 0)}: should be true`);
console.log(`${strictEquals(1, "1")}: should be false`);
console.log(`${strictEquals(true, false)}: should be false`);
console.log(`${strictEquals(false, false)}: should be true`);
console.log(`${strictEquals("Water", "oil")}: should be false`);

export default strictEquals;
