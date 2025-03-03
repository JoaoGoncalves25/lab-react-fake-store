import axios from "axios";
import { useState, useEffect } from "react";
import{ Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

  }, [] );
  

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {products && products.map((product) => {
        return (
          <div key={product.id} className="product">
            
            <Link to={`/product/details/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
            </Link>
          </div>
        );
        
      })}
    </div>
  );
}

export default ProductListPage;
