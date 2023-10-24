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
    <Bundler>
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
      </Container>
      <SpecificationsWrapper>
        <Specifications data={product} />
      </SpecificationsWrapper>
    </Bundler>
  );
};
export default PdfDownloader;
const Bundler = styled.div`
  padding: 0px 50px;
  @media (max-width: 775px) {
    padding: 0px 0px;
  }
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 775px) {
    margin: 0px 15px;
    width: 90%;
  }
`;

const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1160px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .imageWrapper {
    width: 40%;
    @media (max-width: 768px) {
      width: 60%;
    }
  }
  .smallDescriptionWrapper {
    width: 70%;
    display: flex;
    @media (max-width: 1160px) {
      width: 100%;
    }
  }
`;
const PdfWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: normal;
  justify-content: space-around;
  align-items: center;

  .PdfItem {
    max-width: 300px;
    min-width: 185px;
    min-height: 150px;
    max-height: 300px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const OverlayContent = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CloseOverlayButton = styled.button`
  background: #fff;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
`;
const SpecificationsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
