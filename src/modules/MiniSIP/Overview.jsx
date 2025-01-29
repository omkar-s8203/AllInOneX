import React, { useState, useEffect } from 'react';
import './Dashboard.css'


export default function Overview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch('./members.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p>Error loading data. Please try again later.</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const { totalShares, sharePrice, members } = data;
  const totalValue = totalShares * sharePrice;

  if (!members || members.length === 0) {
    return <p>No members found.</p>;
  }

  return (
    <div>
      <h3>Overview</h3>
      <div className="row">
        <div className="col shadow p-3 mb-5 bg-body rounded m-3">
          <p>Total Shares</p>
          <p>{totalShares}</p>
        </div>
        <div className="col shadow p-3 mb-5 bg-body rounded m-3">
          <p>Price per Share</p>
          <p>₹{sharePrice}</p>
        </div>
        <div className="col shadow p-3 mb-5 bg-body rounded m-3">
          <p>Total Value</p>
          <p>₹{totalValue}</p>
        </div>
      </div>
      <div>
        <h4>Members and Their Shares</h4>
        <div className="table-responsive">
          <table
            className="table table-striped"
            aria-label="Members Shares Table"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Shares</th>
                <th>Value (₹)</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.shares}</td>
                  <td>₹{member.shares * sharePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
