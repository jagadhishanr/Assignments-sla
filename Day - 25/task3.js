function checkPositiveNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative!");
  }
  return "Valid number: " + num;
}

try {
  console.log(checkPositiveNumber(10));
  console.log(checkPositiveNumber(-5));
} catch (error) {
  console.error("Error caught:", error.message);
}
