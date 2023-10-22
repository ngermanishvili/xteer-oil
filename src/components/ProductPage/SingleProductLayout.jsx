import React, { useState, useEffect } from "react";
import { dataStore } from "../../zustand/store";
import styled from "styled-components";
//compinents
import ImageContent from "./ImageContent";
import SmallDescription from "./SmallDescription";
import MainDescription from "./MainDescription";
import Specifications from "./Specifications";
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
    <>
      <Container>
        <UpperWrapper>
          <div className="imageWrapper">
            <ImageContent
              imageUrl={product?.imageUrl}
              altText={product?.productName}
            />
          </div>
          <div className="smallDescriptionWrapper">
            <SmallDescription data={product} />
          </div>
        </UpperWrapper>
        <MainDescription data={product} />
        <Specifications data={product} />
      </Container>
    </>
  );
};
export default PdfDownloader;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 775px) {
    margin: 0px;
    width: 90%;
  }
`;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 40px;
  .imageWrapper {
    width: 40%;
  }
  .smallDescriptionWrapper {
    margin-left: 30px;
    width: 45%;
  }

  @media (max-width: 875px) {
    flex-direction: column;
    .smallDescriptionWrapper {
      width: 100%;
      margin-left: 0px;
    }
  }
`;
