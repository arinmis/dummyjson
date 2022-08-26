import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/product";
import { useNavigate } from "react-router";

const Home = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const greaterProductIndex = 0;

  const greaterProduct = (productInfo) => {
    return (
      <div
        onClick={() => navigate(`product/${greaterProductIndex}`)}
        className="col-span-full h-96 mb-5"
      >
        <div className="card p-2 h-full grid md:grid-cols-2 grid-cols-1 gap-2">
          <img
            src={productInfo.thumbnail}
            className="object-cover h-full w-full rounded-sm"
            alt={`${productInfo.title} foto`}
          />
          <div className="text-left align-middle">
            <div className="font-bold"> {productInfo.title}</div>
            <div>
              Price:
              <span className="text-lg">{productInfo.price}</span>
              <sup>$</sup>
            </div>
            <p>Description: {productInfo.description}</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setIsLoading(true);
    // TODO: handle error
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>...loading</p>
  ) : (
    <div className="flex justify-center main-padding">
      <div className="grid justify-items-center	xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 divide-y">
        {/* the first product */}
        {greaterProduct(products[greaterProductIndex])}
        {products.map((product, index) => {
          return index === greaterProductIndex ? null : (
            <Product
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
