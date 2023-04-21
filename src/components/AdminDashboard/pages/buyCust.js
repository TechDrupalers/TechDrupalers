import "./buyCust.css";
import React from "react";
import { useState, useEffect } from 'react';

const BuyCust = () => {

  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch('http://localhost/TechDrupalers/web/api/buyer?_format=json')
      .then(response => response.json())
      .then(data => setBuyers(data))
      .catch(error => console.error(error));
  }, []);

  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <><div className="pagetitle">
      <h2>Customers</h2>
    </div><input type='text' placeholder='Search here...' className='search' onChange={e => setQuery(e.target.value)}></input><table id='buyers-table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {buyers.filter(buyer => buyer.name.toLowerCase().includes(query)).map(buyer => (
            <tr key={buyer.uid}>
              <td>{buyer.uid}</td>
              <td>{buyer.name}</td>
              <td>{buyer.mail}</td>
              <td>
                <p>{buyer.field_address_address_line1}, {buyer.field_address_locality} {buyer.field_address_postal_code}, {buyer.field_address_administrative_area}, {buyer.field_address_country_code}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table></>

  );
};

export default BuyCust;