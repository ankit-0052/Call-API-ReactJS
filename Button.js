// src/components/ButtonSearchInput.js

import React from 'react';

const ButtonSearchInput = ({ query, setQuery, onSearch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minWidth: '200px'
          }}
        />
        <button
          onClick={onSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ButtonSearchInput;
