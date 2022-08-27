import React from "react";
import { useNavigate } from "react-router";

const Product = ({ thumbnail, title, price, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`product/${id}`)}
      className="card card-onhover p-2 w-72 h-96 flex flex-col justify-center divide-y"
    >
      <div className="h-5/6">
        <img
          src={thumbnail}
          className="object-cover h-full w-full rounded-sm"
          alt={`${title} foto`}
        />
      </div>
      <div className="text-left  grid mt-2">
        <div>
          <span className="text-lg">{price}</span> <sup>$</sup>
        </div>
        <div className="font-bold"> {title}</div>
      </div>
    </div>
  );
};

export default Product;
