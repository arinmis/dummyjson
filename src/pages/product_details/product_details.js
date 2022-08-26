import React from "react";
import { useParams } from "react-router";
import ImageViewer from "../../components/image_viewer";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const selectedProduct = products[id];

  return (
    <div className="main-padding">
      <div className="w-1/2 h-fit">
        <ImageViewer images={selectedProduct.images} />
      </div>
    </div>
  );
};

export default ProductDetails;
