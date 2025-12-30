import { useEffect, useState } from "react";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]); // runs whenever `query` changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
