import React from "react";
import { Image } from "antd";

const ImageContent = ({ imageUrl, altText }) => {
  return (
    <Image
      size={100}
      className="gento-image-container"
      src={imageUrl}
      alt={altText}
      onError={() => console.error("Error loading image")}
    />
  );
};

export default ImageContent;
