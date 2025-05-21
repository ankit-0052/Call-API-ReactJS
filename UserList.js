// src/components/SchoolList.js

import React from 'react';

const SchoolList = ({ users }) => {
  return (
    <div style={styles.listContainer}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={styles.card}>
            <div style={styles.userHeader}>{user.name}</div>
            <div style={styles.userDetails}>
              <span> ID: <strong>{user.id}</strong></span><br />
              <span> Email: <strong>{user.email}</strong></span><br />
              <span> Address::Street: <strong>{user.address.street}</strong></span><br />
              <span> Address::Suite <strong>{user.address.suite}</strong></span><br />
              <span> Address::City: <strong>{user.address.city}</strong></span><br />
              <span> Address::Zipcode <strong>{user.address.zipcode}</strong></span><br />
              <span> Phone: <strong>{user.phone}</strong></span><br />
              <span> Website: <strong>{user.website}</strong></span><br />
              <span> Company::Name: <strong>{user.company.name}</strong></span><br />
              <span> Company::CatchPhrase: <strong>{user.company.catchPhrase}</strong></span><br />
              <span> Company::bs: <strong>{user.company.bs}</strong></span><br />
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noResult}>No users found</p>
      )}
    </div>
  );
};

const styles = {
  listContainer: {
    maxHeight: '400px',
    overflowY: 'auto',
    paddingRight: '5px',
  },
 card: {
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  padding: '15px',
  marginBottom: '15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  border: '1px solid #e0e0e0', // 👈 add this line for visible border
},
  userHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  userDetails: {
    fontSize: '15px',
    color: '#555',
  },
  noResult: {
    color: '#999',
    fontStyle: 'italic',
    padding: '10px 0',
  },
};

export default SchoolList;




