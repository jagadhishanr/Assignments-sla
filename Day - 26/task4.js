// Simulated async data fetch
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1500);
  });
}
async function loadData() {
  console.log("Fetching data...");
  
  const result = await fetchData();
  console.log(result);
}

loadData();
