import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure the PDF.js worker to load PDFs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={300} renderTextLayer={false} />
      </Document>
    </div>
  );
};

export default PdfViewer;
