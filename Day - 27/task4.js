async function fetchNonExistingUser() {
  try {
    const response = await fetch("https://api.github.com/users/this_user_does_not_exist_12345");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Catch block triggered:", error.message);
  }
}

fetchNonExistingUser();
