import './productCatelog.css';
import { useState, useEffect } from 'react';

const ProductCatalog = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://localhost/TechDrupalers/web/api/buyer/product-catelog?_format=json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
    }, []);

    const [query, setQuery] = useState("");
    console.log(query);

  return (
    <><div className='product-pagetitle'>
      <h2>Product Catalog</h2>
    </div><input type='text' placeholder='Search here...' className='buyers-products-search' onChange={e => setQuery(e.target.value)}></input>
    <table id='buyers-products-table'>
        <thead>
          <tr>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Scientific Name</td>
            <td>HSN Code</td>
            <td>Category</td>
            <td>Link to Product</td>
            <td colSpan="2">Variations</td>
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
              <td>
                <a href={product.variations_target_id_1}>Add to Cart</a>
              </td>
              <td><a href={product.variations_target_id_2}>Add to Wishlist</a></td>
            </tr>
          ))}
        </tbody>
      </table></>
  );
};

export default ProductCatalog;