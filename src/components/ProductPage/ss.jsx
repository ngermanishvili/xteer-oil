import React from "react";
import styled from "styled-components";
import { FcDownload } from "react-icons/fc";
import { BsEye } from "react-icons/bs";

const DownloadPds = ({ data }) => {
  console.log("pdsdata", data);
  return (
    <Container>
      <span>PDF:</span>
      <br />
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
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  span {
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0 10px 10px 0;
  }
  .view-button {
    padding: 10px;
    color: dodgerblue;
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

  /* Media Query for screens less than 768px */
  @media (max-width: 768px) {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    li {
      width: 50%;
      margin: 0 0 15px 0;
    }
  }

  @media (min-width: 1024px) {
    li {
      margin: 0 15px 0 0;
    }
  }
`;

export default DownloadPds;
