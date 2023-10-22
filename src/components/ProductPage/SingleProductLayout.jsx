import React, { useState, useEffect } from "react";
import { dataStore } from "../../zustand/store";
import styled from "styled-components";
//compinents
import ImageContent from "./ImageContent";
import SingleDescription from "./SingleDescription";
import SingleProductInfo from "./SingleProductInfo";

const PdfDownloader = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const data = dataStore((state) => state.data);

  useEffect(() => {
    const singleProductFilter = () => {
      return data.find((item) => item._id === productId);
    };
    setProduct(singleProductFilter());
  }, [productId, data]);

  return (
    <Container>
      <ImageWrapper>
        <ImageDiv>
          <ImageContent
            imageUrl={product?.imageUrl}
            altText={product?.productName}
          />
        </ImageDiv>
        <SingleDescription data={product} />
      </ImageWrapper>
      <SingleProductInfo />
    </Container>
  );
};
export default PdfDownloader;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /*  @media (min-width: 675px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  } */
`;
const ImageDiv = styled.div`
  max-width: 30%;
`;
const ImageWrapper = styled.div`
  display: flex;
`;
