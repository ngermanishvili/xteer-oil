import React, {useState, useEffect} from "react";
import {Modal, Button, Menu, Dropdown} from "antd";
import {dataStore} from "../../zustand/store";
import styled from "styled-components";
import ImageContent from "./ImageContent";
import Badgecontent from "./Badge";
import SpecificationsTable from "./SpecificationsTable";

const PdfDownloader = ({productId}) => {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [shouldRenderDropdown, setShouldRenderDropdown] = useState(true); // Use state to manage rendering
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State to control overlay visibility

  const data = dataStore((state) => state.data);

  useEffect(() => {
    const singleProductFilter = () => {
      return data.find((item) => item._id === productId);
    };
    setProduct(singleProductFilter());
  }, [productId, data]);

  const pdfUrls = product?.pdfUrls;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };
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
    <Container>
      <ImageWrapper>
        <ImageContent
          imageUrl={product?.imageUrl}
          altText={product?.productName}
        />
      </ImageWrapper>
      {pdfUrls?.length > 0 ? (
        <>
          <PdfWrapper>
            <h1>{product?.productName}</h1>
            {!shouldRenderDropdown ? (
              pdfUrls.map((item, index) => (
                <div className="PdfItem" key={index}>
                  <h2>VISCOSITY GRADE - {item.viscosityGrade}</h2>
                  <div className="buttons">
                    <Button onClick={showModal}>View PDS</Button>
                    <Button>Download PDS</Button>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h2>{product?.category}</h2>
                <Button onClick={() => setIsOverlayVisible(true)}>
                  View PDFs
                </Button>
              </>
            )}
          </PdfWrapper>
          <OtherProductInfo>
            <SpecificationsTable product={product} />
          </OtherProductInfo>
        </>
      ) : (
        <OtherProductInfo>
          <SpecificationsTable product={product} />
        </OtherProductInfo>
      )}
      {isOverlayVisible && <CustomMenuOverlay />}
    </Container>
  );
};
export default PdfDownloader;

const OtherProductInfo = styled.div`
  width: 68%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (min-width: 1000px) {
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;
const ImageWrapper = styled.div`
  max-width: 31%;
  @media (max-width: 600px) {
    max-width: 50%;
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
  @media (min-width: 600px) {
    .PdfItem {
      width: calc(50% - 40px);
      margin: 10px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 900px) {
    .PdfItem {
      width: calc(33.333% - 40px);
    }
  }
  @media (max-width: 1060px) {
    justify-content: space-around;
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
