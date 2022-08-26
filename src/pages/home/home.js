import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return <div>Home</div>;
};

export default Home;
