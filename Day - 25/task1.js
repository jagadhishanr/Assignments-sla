try {
  // This variable doesn't exist — will cause ReferenceError
  console.log(nonExistentVar);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("ReferenceError caught:", error.message);
  } else {
    console.error("Some other error occurred:", error);
  }
}
