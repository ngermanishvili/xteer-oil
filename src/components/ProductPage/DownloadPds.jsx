import React from "react";
import styled from "styled-components";
import { FcDownload } from "react-icons/fc";
import { BsEye } from "react-icons/bs";

const DownloadPds = ({ data }) => {
  return (
    <Container>
      <span>PDF:</span>
      <ul>
        {data?.pdfUrls?.map((pds) => {
          const { viscosityGrade, pdsUrl } = pds;
          return (
            <li key={viscosityGrade}>
              {viscosityGrade}
              <div>
                <button className="download-button">
                  Download <FcDownload />
                </button>
                <button className="view-button">
                  View <BsEye />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  ul {
    display: flex;
  }
  li {
    margin-left: 15px;
  }
  .view-button {
    padding: 10px;
    color: dodgerblue;
    margin-top: 10px;
    background-color: skyblue;
  }
  .download-button {
    background-color: skyblue;
    padding: 10px;
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
