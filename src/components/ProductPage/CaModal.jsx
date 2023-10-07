import React, { useState } from "react";
import { Button, Modal } from "antd";
import PdfViewer from "../Pdf/PdfViewer";

const CaModal = ({ pdfUrls }) => {
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
      <Button
        type="primary"
        onClick={() => openPdf(pdfUrls[0]?.pdsUrl)} // You can pass the appropriate PDF URL here
        style={{ color: "#fff", backgroundColor: "red" }}
      >
        დეტალური ინფორმაცია
      </Button>
      <Modal
        title="დეტალური ინფორმაცია"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedPdfUrl && <PdfViewer pdfUrl={selectedPdfUrl} />}
      </Modal>
    </>
  );
};

export default CaModal;
