import React from "react";

const PdfViewer = ({ pdfUrl }) => {
  return (
    <iframe
      title="PDF Viewer"
      src={pdfUrl}
      width="100%"
      height="500px" // You can adjust the height as needed
    />
  );
};

export default PdfViewer;
