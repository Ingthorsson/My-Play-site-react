import React, { useState, useEffect } from "react";

function useGiphy(query) {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`/gifs?query=${query}`);
        const json = await response.json();

        setResults(
          json.data.map((item) => {
            return item.images.preview.mp4;
          })
        )

      } finally {
        setLoading(false);
      }
    }
    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

function Giphy() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const [results, loading] = useGiphy(query);

  return (
    <div className="app">
      <h1>Async React Hooks</h1>

      <form onSubmit={e => {
        e.preventDefault();
        setQuery(search);
      }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit" >Search</button>
      </form>

      <div className="gifs">
        {loading ? <h1>GIMMY GIF'S</h1> :
          results.map((item) => (
            <video key={item} autoPlay loop src={item} />
          ))}
      </div>

    </div>
  );
}

export default Giphy;