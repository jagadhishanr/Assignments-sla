const numbers = [10, 20, 30, 40];
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("Total:", total);
