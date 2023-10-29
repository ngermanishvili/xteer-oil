import React, { useState } from "react";
import { Divider, Modal } from "antd";
import styled from "styled-components";
import { FcDownload } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import PdfViewer from "./PdfViewer";
import MKTypography from "../MKTypography";

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
    <>
      <Divider />
      <MKTypography color="info" variant="h6">
        პროდუქტის PDS ფაილი
      </MKTypography>
      <Container>
        <br />
        <ul style={{ display: "flex" }}>
          {data?.pdfUrls?.map((pds) => {
            const { viscosityGrade, pdsUrl } = pds;
            return (
              <li key={viscosityGrade}>
                <div className="buttonWrapper">
                  <p>{viscosityGrade}</p>
                </div>

                <div className="button-flex">
                  <a
                    className="download-button"
                    href={pdsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#3d3c3c",
                        textTransform: "uppercase",
                      }}
                    >
                      Download
                    </span>

                    <FcDownload />
                  </a>
                  <button
                    onClick={() => openPdf(pdsUrl)}
                    className="view-button"
                  >
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#3d3c3c",
                        textTransform: "uppercase",
                      }}
                    >
                      View
                    </span>{" "}
                    <BsEye />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <Modal
          title="დეტალური ინფორმაცია"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedPdfUrl && <PdfViewer pdfUrl={selectedPdfUrl} />}
        </Modal>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: "center";
  list-style-type: none;
  overflow-x: auto;
  gap: 10px;
  .buttonWrapper {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .button-flex {
    display: flex;
    width: 100%;
    min-width: 400px;
    gap: 10px;
  }
  @media (max-width: 768px) {
    .button-flex {
      flex-direction: column;
      min-width: 150px;
    }
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Subtle box shadow */
    transition: background-color 0.3s, box-shadow 0.3s; /* Add smooth transitions */
    margin-bottom: 10px;
    &:hover {
      background-color: skyblue; /* Change background color to white on hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly more noticeable shadow on hover */
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

export default DownloadPds;
