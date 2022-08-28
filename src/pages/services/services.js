import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/input";
import {
  craeteImageArray,
  isAnyNullExist,
  isImageUrl,
} from "../../helpers/helper";

const Services = ({ setProducts, newProductID }) => {
  const navigate = useNavigate();
  const [newProduct, setnewProduct] = useState({
    id: newProductID,
    title: null,
    description: null,
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    brand: null,
    category: null,
    thumbnail: null,
    images: [],
  });

  const productFieldUpdater = (newValue, field) => {
    return setnewProduct((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  const handleCreate = (event) => {
    event.preventDefault();
    // filter none image link
    newProduct.images = newProduct.images.filter((url) => isImageUrl(url));

    if (isAnyNullExist(newProduct)) {
      alert("All the fields must be filled");
      return;
    }
    console.log(newProduct);
    // update backend
    axios.post(`${process.env.REACT_APP_BASE_URL}/`, newProduct);
    // update frontend
    setProducts((prev) => ({
      ...prev,
      [newProductID]: { ...newProduct },
    }));
    navigate(`/product/${newProductID}`);
  };

  return (
    <div className="flex justify-center main-padding ">
      <form className="text-left card-w-resp grid grid-cols-2 gap-2 ">
        <Input label="id" type="number" value={newProduct.id} readOnly={true} />
        <Input
          label="title"
          type="text"
          value={newProduct.title}
          onChange={(event) => productFieldUpdater(event.target.value, "title")}
        />
        <Input
          label="price"
          type="number"
          value={newProduct.price}
          onChange={(event) =>
            productFieldUpdater(Number(event.target.value), "price")
          }
        />
        <Input
          label="stock"
          type="number"
          value={newProduct.stock}
          onChange={(event) =>
            productFieldUpdater(Number(event.target.value), "stock")
          }
        />
        <Input
          label="rating"
          type="number"
          value={newProduct.rating}
          onChange={(event) =>
            productFieldUpdater(Number(event.target.value), "rating")
          }
        />
        <Input
          label="brand"
          type="text"
          value={newProduct.brand}
          onChange={(event) => productFieldUpdater(event.target.value, "brand")}
        />
        <Input
          label="category"
          type="text"
          value={newProduct.category}
          onChange={(event) =>
            productFieldUpdater(event.target.value, "category")
          }
        />
        <Input
          label="discound percentage"
          type="number"
          value={newProduct.discountPercentage}
          onChange={(event) =>
            productFieldUpdater(
              Number(event.target.value),
              "discountPercentage"
            )
          }
        />

        <div className="col-span-2">
          <Input
            label="thumbnail"
            type="link"
            value={newProduct.thumbnail}
            onChange={(event) =>
              productFieldUpdater(event.target.value, "thumbnail")
            }
          />
        </div>
        <div className="col-span-2">
          <Input
            label={"images(comma separated links)"}
            type={"text"}
            value={
              newProduct.images === null ? "" : newProduct.images.toString()
            }
            onChange={(event) => {
              const images = craeteImageArray(event.target.value);
              setnewProduct((prev) => ({
                ...prev,
                images: images,
              }));
            }}
          />
        </div>
        <label className="col-span-2 h-full">
          <span>description:</span>
          <textarea
            id="desc"
            onChange={() => {
              const description = document.getElementById("desc").value;
              setnewProduct((prev) => ({
                ...prev,
                description: description,
              }));
            }}
            className="w-full input-style h-24"
          >
            {newProduct.description}
          </textarea>
        </label>
        <div className="col-span-2 flex justify-end">
          <button onClick={handleCreate} className="btn-primary mt-3">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Services;
