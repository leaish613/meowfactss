
import React, { useState, useEffect } from 'react';
import './App.css';

function FetchDataOnClick() {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fetchTrigger) {
      setLoading(true);
      setError(null);

      fetch('https://meowfacts.herokuapp.com/')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log("Fetched data:", data); // Log data for debugging
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.error("Fetch error:", error); // Log error for debugging
        });

      setFetchTrigger(false); // Reset fetch trigger
    }
  }, [fetchTrigger]);

  const handleClick = () => {
    setFetchTrigger(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meoww Factsss!!</h1>
        <img src='images/cutecat2.gif' width="250" height="250" ></img>

        <button class="button" onClick={handleClick}>Click for Meow Fact</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}{data && (
        <div className="data">
          <pre>{data.data}</pre>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      )}
        
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FetchDataOnClick />
    </div>
  );
}

export default App;
