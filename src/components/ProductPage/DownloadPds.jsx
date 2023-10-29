import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { FcDownload } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import PdfViewer from "./PdfViewer";

const DownloadPds = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openPdf = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    showModal();
  };

  return (
    <Container>
      {data?.pdfUrls[0] ? <span>PDF:</span> : ""}
      <br />
      <ul style={{ display: "flex", gap: "20px" }}>
        {data?.pdfUrls?.map((pds) => {
          const { viscosityGrade, pdsUrl } = pds;
          return (
            <li key={viscosityGrade}>
              <div className="buttonWrapper">
                <p>{viscosityGrade}</p>
                <button className="download-button">
                  <span style={{ color: "#3d3c3c" }}>Download</span>{" "}
                  <FcDownload />
                </button>
                <button onClick={() => openPdf(pdsUrl)} className="view-button">
                  <span style={{ color: "#3d3c3c" }}>View</span> <BsEye />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {selectedPdfUrl && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
          title="დეტალური ინფორმაცია"
          okButtonProps={{
            style: {
              /* display: "none", მგონი ზედმეტია ქენსელიც და ოქეიც თუ აღარ გვენდომება ოქეი ამოშალე კომენტარი ლომო */
              color: "rgb(31,31,31)",
              border: "1px solid rgb(217, 217, 217)",
            },
          }}
        >
          <PdfViewerContainer>
            <PdfViewer pdfUrl={selectedPdfUrl} />
          </PdfViewerContainer>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  list-style-type: none;
  overflow-x: auto;
  gap: 10px;
  .buttonWrapper {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 1542px) {
    overflow-x: auto;
  }
  li {
    margin-left: 15px;
    min-height: 200px;
  }
  .view-button,
  .download-button {
    width: 100%;
    padding: 10px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s, box-shadow 0.3s;
    margin-bottom: 10px;
    &:hover {
      background-color: skyblue;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const PdfViewerContainer = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
export default DownloadPds;
