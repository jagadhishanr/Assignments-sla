function createAsyncCounter() {
  let count = 0;

  return async function incrementAsync() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    count++; 
    console.log("Counter updated:", count);

    return count;
  };
}

const counter = createAsyncCounter();
counter();
counter();
counter();
