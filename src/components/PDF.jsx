import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf"

export default function PDF(props) {

  let divRef = useRef(null)

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      setWidth(divRef.current.clientWidth)
    }
  });

  window.addEventListener("resize", () => {
    if (mounted) {
      setWidth(divRef.current.clientWidth)
    }
  })

  function changePage(direction) {
    if (direction == "next") {
      return () => {
        setPageNumber(pageNumber + 1)
      }
    } else if (direction == "prev") {
      return () => {
        setPageNumber(pageNumber - 1)
      }
    }
  }

  function renderPDFDoc() {
    if (mounted) {
      return (<Document
                file={props.fileURL}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{workerSrc: "pdf.worker.js"}}
                renderMode="canvas"
              >
                <Page pageNumber={pageNumber} width={width}/>
              </Document>
            )
    } else {
      return null;
    }
  }

  return (
    <div ref={divRef} className="w-100 mb-4">
        {renderPDFDoc()}
        <div className="pdf-controls">
          {pageNumber !== 1 && <a className="custom-primary-btn" onClick={changePage("prev")}> Prev </a>}
          <p className="m-0 mx-3">Page {pageNumber} of {numPages}</p>
          {pageNumber !== numPages &&  <a className="custom-primary-btn" onClick={changePage("next")}> Next </a>}
        </div>
      
    </div>
  );
}
