import React, {useState, useEffect} from "react";
import {Modal, Button, Menu, Dropdown} from "antd";
import {dataStore} from "../../zustand/store";
import styled from "styled-components";
import ImageContent from "./ImageContent";
import Badgecontent from "./Badge";

const PdfDownloader = ({productId}) => {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [shouldRenderDropdown, setShouldRenderDropdown] = useState(false); // Use state to manage rendering

  const data = dataStore((state) => state.data);

  useEffect(() => {
    const singleProductFilter = () => {
      return data.find((item) => item._id === productId);
    };
    setProduct(singleProductFilter());
  }, [productId, data]);

  const pdfUrls = product?.pdfUrls;

  useEffect(() => {
    const handleWindowResize = () => {
      setShouldRenderDropdown(window.innerWidth >= 768);
    };

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Initialize the rendering state
    handleWindowResize();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const customMenu = isDropDownOpen ? (
    <div style={{width: "100%"}}>
      {pdfUrls?.map((pdf, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            alignContent: "center",
            width: "100%",
          }}
          key={index}
        >
          <h2 style={{width: "70%"}}>VISCOSITY GRADE - {pdf.viscosityGrade}</h2>
          <div style={{width: "30%", display: "flex", flexDirection: "column"}}>
            <Button onClick={showModal}>View PDS</Button>
            <Button>Download PDS</Button>
          </div>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {isModalOpen && (
              <iframe
                title="PDF Viewer"
                src={pdf.pdsUrl}
                width="100%"
                height="500px"
              />
            )}
          </Modal>
        </div>
      ))}
    </div>
  ) : (
    <></>
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
            {shouldRenderDropdown ? (
              pdfUrls.map((item, index) => (
                <div className="PdfItem" key={index}>
                  <h2>VISCOSITY GRADE - {item.viscosityGrade}</h2>
                  <div className="buttons">
                    <Button onClick={showModal}>View PDS</Button>
                    <Button>Download PDS</Button>
                  </div>
                  <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    {isModalOpen && (
                      <iframe
                        title="PDF Viewer"
                        src={item.pdsUrl}
                        width="100%"
                        height="500px"
                      />
                    )}
                  </Modal>
                </div>
              ))
            ) : (
              <>
                <Button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  View PDFs
                </Button>
                {customMenu}
              </>
            )}
          </PdfWrapper>
          {/* <OtherProductInfo style={{width: "68%"}}>
            <div>{product ? <Badgecontent product={product} /> : ""}</div>
          </OtherProductInfo> */}
        </>
      ) : (
        <OtherProductInfo style={{width: "68%"}}>
          <div>{product ? <Badgecontent product={product} /> : ""}</div>
        </OtherProductInfo>
      )}
    </Container>
  );
};
export default PdfDownloader;

const OtherProductInfo = styled.div`
  /* Style this as per your design requirements */
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

  @media (min-width: 900px) {
    .PdfItem {
      width: calc(33.333% - 40px);
    }
  }
  @media (max-width: 1060px) {
    justify-content: space-around;
  }
`;
