function task(callback) {
  setTimeout(callback, 3000);
}

task(() => {
  console.log("Task Completed");
});
