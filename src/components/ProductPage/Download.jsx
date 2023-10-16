import React, {useState, useEffect} from "react";
import {Modal, Button, Menu, Dropdown} from "antd";
import {dataStore} from "../../zustand/store";
import styled from "styled-components";
import ImageContent from "../ProductPage/ImageContent";
import Badgecontent from "../ProductPage/Badge";
const PdfDownloader = ({productId}) => {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  console.log(product);
  const menu = (
    <Menu>
      {pdfUrls?.map((item, index) => (
        <Menu.Item key={index}>
          <h2>VISCOSITY GRADE - {item.viscosityGrade}</h2>
          <Button onClick={showModal}>View PDS </Button>
          <Button>Download PDS</Button>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Container pdfUrls={pdfUrls}>
      <ImageWrapper>
        <ImageContent
          imageUrl={product?.imageUrl}
          altText={product?.productName}
        />
      </ImageWrapper>

      {pdfUrls && (
        <PdfWrapper>
          {window.innerWidth >= 1000 ? (
            pdfUrls.map((item, index) => (
              <div className="PdfItem" key={index}>
                <h2>VISCOSITY GRADE - {item.viscosityGrade}</h2>
                <div className="buttons">
                  <Button onClick={showModal}>View PDS </Button>
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
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button>View PDFs</Button>
            </Dropdown>
          )}
        </PdfWrapper>
      )}
      <OtherProductInfo>
        <div style={{width: product ? "68%" : "0%"}}>
          {product ? <Badgecontent product={product} /> : ""}
        </div>
      </OtherProductInfo>
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
