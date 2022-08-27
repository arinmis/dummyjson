import axios from "axios";
import { useState } from "react";
import Input from "./input";
import Modal from "./modal";

const UpdateProductBtn = ({ selectedProduct, setProducts }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...selectedProduct });

  const productFieldUpdater = (event, field) => {
    return setUpdatedProduct((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(updatedProduct);
    // update backend
    const copyUpdatedProduct = Object.assign({}, updatedProduct);
    delete copyUpdatedProduct.id; // no need to send id to backend
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/${selectedProduct.id}`,
        copyUpdatedProduct
      )
      .then(() => {
        // update frontend
        setProducts((prev) => ({
          ...prev,
          [selectedProduct.id]: { ...updatedProduct },
        }));
      })
      .catch(() => {
        console.log("Oops, something went wront!");
      });
    setIsModalOn(false);
  };

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
              label="title"
              type="text"
              value={updatedProduct.title}
              onChange={(event) => productFieldUpdater(event, "title")}
            />
            <Input
              label="price"
              type="number"
              value={updatedProduct.price}
              onChange={(event) => productFieldUpdater(event, "price")}
            />
            <Input
              label="stock"
              type="number"
              value={updatedProduct.stock}
              onChange={(event) => productFieldUpdater(event, "stock")}
            />
            <Input
              label="rating"
              type="number"
              value={updatedProduct.rating}
              onChange={(event) => productFieldUpdater(event, "rating")}
            />
            <Input
              label="brand"
              type="text"
              value={updatedProduct.brand}
              onChange={(event) => productFieldUpdater(event, "brand")}
            />
            <Input
              label="category"
              type="text"
              value={updatedProduct.category}
              onChange={(event) => productFieldUpdater(event, "category")}
            />
            <Input
              label="thumbnail"
              type="link"
              value={updatedProduct.thumbnail}
              onChange={(event) => productFieldUpdater(event, "thumbnail")}
            />
            <div className="col-span-2">
              <Input
                label={"images(comma separated links)"}
                type={"text"}
                value={updatedProduct.images.toString()}
                onChange={(event) => {
                  const images = event.target.value
                    .replaceAll(" ", "")
                    .split(",");
                  setUpdatedProduct((prev) => ({
                    ...prev,
                    images: images,
                  }));
                }}
              />
            </div>
            <label className="col-span-2 h-full">
              <span>Description:</span>
              <textarea
                id="desc"
                onChange={() => {
                  const description = document.getElementById("desc").value;
                  setUpdatedProduct((prev) => ({
                    ...prev,
                    description: description,
                  }));
                }}
                className="w-full input-style h-24"
              >
                {updatedProduct.description}
              </textarea>
            </label>
            <div className="col-span-2 flex justify-end">
              <button onClick={handleUpdate} className="btn-primary mt-3">
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
