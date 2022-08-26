import React from "react";

const Product = ({ thumbnail, title, price }) => {
  return (
    <div className="card p-2  max-w-sm w-full h-72 flex flex-col justify-center divide-y">
      <img src={thumbnail} className="h-3/4" alt={`${title} foto`} />
      <div className="text-left  grid gap-2 mt-2">
        <div>
          <span className="text-lg">{price}</span> <sup>$</sup>
        </div>
        <div className="font-bold"> {title}</div>
      </div>
    </div>
  );
};

export default Product;
