import './ProductCatelog.css';
import { useState, useEffect } from 'react';

const ProductCatalog = () => {

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost/TechDrupalers/web/api/product_catelogue?_format=json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  
  console.log(query);

  return (
    <><div className='pagetitle'>
      <h2>Product Catalog</h2>
    </div>
      <input type='text' placeholder='Search here...' className='admin-products-search' onChange={e => setQuery(e.target.value)}></input>
      <table id='admins-products-table'>
        <thead>
          <tr>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Scientific Name</td>
            <td>HSN Code</td>
            <td>Category</td>
            <td>Link to Product</td>
          </tr>
        </thead>
        <tbody>
          {products.filter(product => product.field_pro.toLowerCase().includes(query)).map(product => (
            <tr key={product.field_product_id}>
              <td>{product.field_product_id}</td>
              <td>{product.field_pro}</td>
              <td>{product.field_product_scientific_name}</td>
              <td>{product.field_hs}</td>
              <td>{product.field_select_category_1}</td>
              <td>
                <a href={product.view_commerce_product_1}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  );
};

export default ProductCatalog;