import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/product";

const Home = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <p>...loading</p>
  ) : (
    <div className="flex justify-center">

    <div className="grid  xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
      {products.map((product, index) => {
        return index === 0 ? null : (
          <Product
            thumbnail={product.thumbnail}
            price={product.price}
            title={product.title}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Home;
