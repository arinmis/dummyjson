import React, { useState } from "react";
import Input from "./input";
import Modal from "./modal";

const UpdateProductBtn = ({ selectedProduct, setProducts }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsModalOn(true);
        }}
        className="btn-primary"
      >
        Update
      </button>
      <Modal
        isOn={isModalOn}
        setIsOn={setIsModalOn}
        content={
          <form className="text-left card-w-resp grid grid-cols-2 gap-1">
            <Input
              label="id"
              type="number"
              value={selectedProduct.id}
              readOnly={true}
            />
            <Input label="title" type="text" value={selectedProduct.title} />
            <Input label="price" type="number" value={selectedProduct.price} />
            <Input label="stock" type="number" value={selectedProduct.stock} />
            <Input label="brand" type="text" value={selectedProduct.brand} />
            <Input
              label="category"
              type="text"
              value={selectedProduct.category}
            />
            <Input
              label="thumbnail"
              type="link"
              value={selectedProduct.thumbnail}
            />
            <div className="col-span-2">
              <Input
                label={"images(comma separated links)"}
                type={"text"}
                value={selectedProduct.images.toString()}
              />
            </div>
            <label className="col-span-2 h-full">
              <span>Description:</span>
              <textarea className="w-full input-style h-24">
                {selectedProduct.description}
              </textarea>
            </label>
            <div className="col-span-2 flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("We received your message.");
                }}
                className="btn-primary mt-3"
              >
                Update
              </button>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default UpdateProductBtn;
