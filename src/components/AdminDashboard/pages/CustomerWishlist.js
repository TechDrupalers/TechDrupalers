import React from "react";
import './CustomerWishlist.css'
import { useEffect,useState } from "react";

const CustomerWishlist = () => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('http://localhost/TechDrupalers/web/api/wishlist?_format=json')
      .then(response => response.json())
      .then(data => setWishlist(data))
      .catch(error => console.error(error));
  }, []);

  const [query, setQuery] = useState("");
  console.log(query);

    return (
      <><div className="pagetitle">
        <h2>Customer Wishlist</h2>
      </div><input type='text' placeholder='Search here...' className='wishlist-search' onChange={e => setQuery(e.target.value)}></input><table id="wishlist-table">
          <thead>
            <tr>
              <td>Owner</td>
              <td>Product ID</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {wishlist.filter(wishlist => wishlist.uid_1.toLowerCase().includes(query)).map(item => <tr key={item.field_product_id}>
              <td>{item.uid_1}</td>
              <td>{item.field_product_id}</td>
              <td>{item.field_pro}</td>
              <td>{item.quantity}</td>
              <td><a href={item.remove_button}>remove</a></td>
            </tr>
            )}
          </tbody>
        </table></>
      
    );
};

export default CustomerWishlist;