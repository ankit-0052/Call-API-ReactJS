import React from 'react';

const SearchInput = ({ query, onQueryChange }) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        minWidth: '0', // prevents shrinking issues inside flex container
      }}
    >
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        style={{
          padding: '10px 35px 10px 10px',
          width: '100%',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box', // important for padding + width
        }}
      />
      {query && (
        <span
          onClick={() => onQueryChange('')}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#888',
            userSelect: 'none',
            lineHeight: '1',
          }}
          aria-label="Clear search"
          role="button"
        >
          ×
        </span>
      )}
    </div>
  );
};

export default SearchInput;
