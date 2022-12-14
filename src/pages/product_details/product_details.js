import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router";
import StarRatings from "react-star-ratings/build/star-ratings";
import ImageViewer from "../../components/image_viewer";
import UpdateProductBtn from "../../components/update_product_btn";

const ProductDetails = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProduct = products[id];


  const handleDelete = () => {
    if (!window.confirm(`Are you sure to delete ${selectedProduct.title}?`))
      return;
    // remove from backend
    axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`);
    // remove on frontend
    // console.log("removed: ", products.splice(id, 1));
    delete products[id];
    setProducts({ ...products });
    navigate("/");
  };

  if (!Object.keys(products).includes(id)) return <p>Product not found!!!</p>;

  const productInfo = (
    <>
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <p>
          <span className="title-lg ">{selectedProduct.title}</span>
          <span className="mx-1">|</span>
          <span className="">{selectedProduct.brand}</span>
        </p>
        <div className="flex items-center">
          {/* TODO: update rating starts when user update */}
          <StarRatings
            rating={selectedProduct.rating}
            starRatedColor="#FF9900"
            starEmptyColor="#6b7280"
            starDimension="1.5rem"
            starSpacing=".1prem"
          />
          <span className="ml-2">{selectedProduct.rating}</span>
        </div>
      </div>
      <p className="mb-5">{selectedProduct.description} </p>
      <p>
        <span className="text-sm">Price: </span>
        <span className="text-xl font-bold">
          <sup>$</sup>
          {selectedProduct.price}
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

  return (
    <div className="main-padding flex  xl:flex-row flex-col justify-center gap-5">
      <div className="xl:w-1/2 w-full h-fit">
        <ImageViewer images={selectedProduct.images} />
      </div>
      <div className="xl:w-1/2 w-full h-fit">
        {productInfo}
        <div className="flex justify-end items-end gap-3 mt-10">
          <button onClick={handleDelete} className="btn-danger">
            Delete
          </button>
          <UpdateProductBtn
            selectedProduct={selectedProduct}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
