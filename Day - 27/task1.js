fetch("https://api.github.com/users/jagadhishanr")
  .then(response => response.json())
  .then(data => {
    console.log("GitHub Profile Data:", data);
  })
  .catch(error => {
    console.error("Error fetching GitHub profile:", error);
  });
