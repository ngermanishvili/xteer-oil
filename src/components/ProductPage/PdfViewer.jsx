import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResizeObserver from "resize-observer-polyfill";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  const containerRef = React.useRef();

  useEffect(() => {
    function calculateScale() {
      const containerWidth = containerRef.current.offsetWidth;
      const pageWidth = 580; // Replace with the actual page width of your PDF
      const calculatedScale = containerWidth / pageWidth;
      setScale(calculatedScale);
    }

    const observer = new ResizeObserver(calculateScale);
    observer.observe(containerRef.current);

    /* return () => observer.unobserve(containerRef.current); */
    return () => {
      // Clean up the ResizeObserver when the component is unmounted
      observer.disconnect();
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-container" ref={containerRef}>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            devicePixelRatio={2}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={scale}
            renderMode="canvas"
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
