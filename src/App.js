import React, { useState, useEffect } from 'react';
import './App.css';

function FetchDataOnClick() {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [fetchMultiple, setFetchMultiple] = useState(false);
  const [count, setCount] = useState(1); // Default to 1 fact
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fetchTrigger) {
      setLoading(true);
      setError(null);

      const url = fetchMultiple ? `https://meowfacts.herokuapp.com/?count=${count}` : 'https://meowfacts.herokuapp.com/';
      
      fetch(url)
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
      setFetchMultiple(false); // Reset multiple fetch trigger
    }
  }, [fetchTrigger, fetchMultiple, count]);

  const handleSingleClick = () => {
    setFetchMultiple(false);
    setFetchTrigger(true);
  };

  const handleMultipleClick = () => {
    setFetchMultiple(true);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleDoneClick = () => {
    setFetchTrigger(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meoww Factsss!!</h1>
        <img src='images/cutecat2.gif' alt="cutecat" width="250" height="250" />

        <button className="button" onClick={handleSingleClick}>Click for Meow Fact</button>
        <button className="button" onClick={handleMultipleClick}>Click for Multiple Meow Facts</button>

        {fetchMultiple && (
          <div>
            <input
              type="number"
              value={count}
              onChange={handleCountChange}
              min="1"
              // placeholder="Enter number of facts"
              className="styled-input"
            />
            <button className="button" onClick={handleDoneClick}>Done</button>
          </div>
        )}

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="data">
            {Array.isArray(data.data) ? data.data.map((fact, index) => (
              <p key={index}>{fact}</p>
            )) : (
              <pre>{data.data}</pre>
            )}
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
