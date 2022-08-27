import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
import ImageViewer from "../../components/image_viewer";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const selectedProduct = products[id];

  const roundStarDecimal = (decimal) => {
    return Math.floor(decimal) + (decimal % 1 >= 0.5 ? 0.5 : 0);
  };

  const productInfo = () => {
    return (
      <>
        <div className="flex justify-between mb-2">
          <p>
            <span className="title-lg ">{selectedProduct.title}</span>
            <span className="mx-1">|</span>
            <span className="">{selectedProduct.brand}</span>
          </p>
          <div className="flex items-center">
            <ReactStars
              size="20"
              edit={false}
              isHalf={true}
              value={roundStarDecimal(selectedProduct.rating)}
            />
            <span className="ml-2">{selectedProduct.rating}</span>
          </div>
        </div>
        <p className="mb-5">{selectedProduct.description} </p>
        <p>
          <span className="text-sm">Price: </span>
          <span className="text-xl font-bold">
            {selectedProduct.price}
            <sup>$</sup>
          </span>
        </p>
        <p>
          <span className="text-sm">Stock: </span> {selectedProduct.stock}
        </p>
        <p>
          <span className="text-sm">Discount Percentage: </span>{" "}
          {selectedProduct.discountPercentage}%
        </p>
        <p>
          <span className="text-sm">Category: </span> {selectedProduct.category}
        </p>
      </>
    );
  };

  return (
    <div className="main-padding flex  xl:flex-row flex-col justify-center gap-5">
      <div className="xl:w-1/2 w-full h-fit">
        <ImageViewer images={selectedProduct.images} />
      </div>
      <div className="xl:w-1/2 w-full h-fit">{productInfo()}</div>
    </div>
  );
};

export default ProductDetails;
