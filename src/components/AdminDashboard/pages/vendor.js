import React from "react";
import "./vendor.css";
import { useState, useEffect } from 'react';

const Vendors = () => {

  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('http://localhost/TechDrupalers/web/api/vendors?_format=json')
      .then(response => response.json())
      .then(data => setVendors(data))
      .catch(error => console.error(error));
  }, []);

  const [query, setQuery] = useState("");
  console.log(query);


  return (
    <><div className='pagetitle'>
        <h2>Vendors</h2>
      </div>
      <input type='text' placeholder='Search here...' className='vendor-search' onChange={e => setQuery(e.target.value)}></input><table id='vendors-table'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Company Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {vendors.filter(vendor => vendor.name.toLowerCase().includes(query)).map(vendor => (
            <tr key={vendor.uid}>
              <td>{vendor.uid}</td>
              <td>{vendor.name}</td>
              <td>{vendor.field_company_name}</td>
              <td>{vendor.mail}</td>
            </tr>
          ))}
        </tbody>
      </table></>
  );
};

export default Vendors;