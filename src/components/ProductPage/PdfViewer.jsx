import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useMediaQuery } from "react-responsive";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            className="w-full max-w-screen-md mx-auto"
            devicePixelRatio={1.3}
            scale={isMobile ? 0.6 : 1.2}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
