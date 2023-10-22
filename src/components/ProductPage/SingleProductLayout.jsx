import React, {useState, useEffect} from "react";
import {Modal, Button, Menu, Dropdown} from "antd";
import {dataStore} from "../../zustand/store";
import styled from "styled-components";
import ImageContent from "./ImageContent";
import SmallDescription from "./SmallDescription";
import MainDescription from "./MainDescription";
import Specifications from "./Specifications";
const PdfDownloader = ({productId}) => {
  const [product, setProduct] = useState(null);

  const data = dataStore((state) => state.data);

  useEffect(() => {
    const singleProductFilter = () => {
      return data.find((item) => item._id === productId);
    };
    setProduct(singleProductFilter());
  }, [productId, data]);

  const pdfUrls = product?.pdfUrls;

  const CustomMenuOverlay = () => (
    <Overlay>
      {pdfUrls?.map((pdf, index) => (
        <OverlayContent key={index}>
          <h2>VISCOSITY GRADE - {pdf.viscosityGrade}</h2>
          <Button onClick={showModal}>View PDS</Button>
          <Button>Download PDS</Button>
        </OverlayContent>
      ))}
      <CloseOverlayButton onClick={hideOverlay}>Close</CloseOverlayButton>
    </Overlay>
  );
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

const OtherProductInfo = styled.div`
  width: 68%;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .imageWrapper {
    width: 60%;
  }
  .smallDescriptionWrapper {
    width: 40%;
  }
  @media (max-width: 600px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
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
