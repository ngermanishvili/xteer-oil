import React from "react";
import styled from "styled-components";

const MainDescription = ({data}) => {
  return (
    <Container>
      <div className="divider" />
      <div className="headerWrapper">
        <h2 style={{alignSelf: "center", color: "black"}}>
          {data?.productName}
        </h2>
        <p style={{alignSelf: "center"}}>{data?.description}</p>
      </div>
      <div>
        <span className="headings">Applications:</span>
        <ul className="listWrapper">
          {data?.applications?.map((item) => (
            <li className="listItems" style={{listStyle: "inside"}}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="headings">Certifications And Application:</span>
        <ul className="listWrapper">
          {data?.certsAndApps?.map((item) => (
            <li className="listItems" style={{listStyle: "inside"}}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="headings">Features And Benefits</span>
        <ul className="listWrapper">
          {data?.featuresAndBenefits?.map((item) => (
            <li className="listItems" style={{listStyle: "inside"}}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  color: #555;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  flex-direction: column;

  .divider {
    margin: 0 auto;
    width: 60%;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .headerWrapper {
    text-align: center;
    font-size: 30px;
    p {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 20px; 
      text-align: left;
      p {
        font-size: 15px;
      }
    }
  }
  .listWrapper {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .headings {
    font-size: 25px;
    color: black;
    @media (max-width: 1160px) {
      font-size: 18px;
    }
  }
`;

export default MainDescription;
