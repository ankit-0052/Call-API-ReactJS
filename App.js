

import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchBar';
import ButtonSearchInput from './components/Button';
import SchoolList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);             // API se sabhi user ko call karne ke liye
  const [autoQuery, setAutoQuery] = useState('');
  const [manualQuery, setManualQuery] = useState('');
  const [manualResult, setManualResult] = useState([]);

  // 🔁 API Call once on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Auto Search
  const autoFiltered = users.filter(user =>
    user.name.toLowerCase().includes(autoQuery.toLowerCase())
  );

  // Button-based Manual Search
  const handleManualSearch = () => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(manualQuery.toLowerCase())
    );
    setManualResult(filtered);
  };

  return (
    <div className="container">
      <h2>Search User</h2>
      <div className="columns">

        <div className="column">
          <h3>Auto Search</h3>
          <SearchInput query={autoQuery} onQueryChange={setAutoQuery} />
          <SchoolList users={autoFiltered} />
        </div>

        <div className="column">
          <h3>Search on Button Click</h3>
          <ButtonSearchInput
            query={manualQuery}
            setQuery={setManualQuery}
            onSearch={handleManualSearch}
          />
          <SchoolList users={manualResult} />
        </div>

      </div>
    </div>
  );
}

export default App;

