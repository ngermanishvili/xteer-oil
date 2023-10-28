/* import React from "react";

const PdfViewer = ({pdfUrl}) => {
  return (
    <iframe
      title="PDF Viewer"
      src={pdfUrl}
      width="100%"
      height="500px"
    ></iframe>
  );
};

export default PdfViewer;
 */

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure the PDF.js worker to load PDFs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={300} />
      </Document>
    </div>
  );
};

export default PdfViewer;
