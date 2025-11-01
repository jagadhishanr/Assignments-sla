const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedConcat = array1.concat(array2);
console.log("Combined using concat():", combinedConcat);
const combinedSpread = [...array1, ...array2];
console.log("Combined using spread syntax:", combinedSpread);
