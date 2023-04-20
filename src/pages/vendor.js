import { useState, useEffect } from 'react';
import React from "react";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('http://testdrupal.ddev.site/api/vendor?_format=json')
      .then(response => response.json())
      .then(data => setVendors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Vendors</h2>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.uuid[0].value}>
            <p>{vendor.name[0].value}</p>
            <p>{vendor.field_address[0].administrative_area}, {vendor.field_address[0].locality}, {vendor.field_address[0].address_line1}, {vendor.field_address[0].postal_code}</p>
            <p>{vendor.field_company_name[0].value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendors;