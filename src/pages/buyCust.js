import { useState, useEffect } from 'react';
import React from "react";

const Buyers = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch('http://testdrupal.ddev.site/api/buyers?_format=json')
      .then(response => response.json())
      .then(data => setBuyers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {buyers.map(buyer => (
          <li key={buyer.name}>
            <p>{buyer.name}</p>
            <p>{buyer.email}</p>
            <p>{buyer.field_address}</p>
            <p>{buyer.operations}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buyers;