import { useState, useEffect } from 'react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://testdrupal.ddev.site/api/admin_product_catalogue?_format=json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.field_product_id}>
            <h3>{product.field_pro}</h3>
            <p>{product.field_product_scientific_name}</p>
            <p>{product.field_hs}</p>
            <p>{product.field_select_category}</p>
            <p>{product.field_select_category_1}</p>
            <p>{product.view_commerce_product_1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;