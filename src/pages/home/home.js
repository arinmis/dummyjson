import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/product";

const Home = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const mockProduct = 3;

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <p>...loading</p>
  ) : (
    <div>
      <Product
        thumbnail={products.products[mockProduct].thumbnail}
        price={products.products[mockProduct].price}
        title={products.products[mockProduct].title}
      />
    </div>
  );
};

export default Home;
