import React, { useState } from "react";
import Modal from "./modal";

const UpdateProductBtn = ({ selectedProduct, setProducts }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  return (
    <div>
      <button onClick={() => {setIsModalOn(true)}} className="btn-primary">Update</button>
      <Modal isOn={isModalOn} setIsOn={setIsModalOn}  content={
        <p>hello world</p>
      }/>
    </div>
  );
};

export default UpdateProductBtn;
