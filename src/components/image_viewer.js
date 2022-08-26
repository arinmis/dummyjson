import { useState } from "react";

const ImageViewer = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState(0);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 flex flex-col gap-3">
        {images.map((src, i) => (
          <img
            src={src}
            onMouseEnter={() => {
              setHoveredImage(i);
            }}
            className={
              (hoveredImage === i ? "border-2 rounded-sm" : "") +
              " w-full h-12 img-style object-cover hover:cursor-pointer"
            }
            alt={`product foto-${i}`}
          />
        ))}
      </div>
      <div className="card col-span-11 ml-3 flex items-center">
        <img
          className="w-full  h-72 img-style object-contain hover:cursor-pointer"
          src={images[hoveredImage]}
          alt={`product foto-${hoveredImage}`}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
