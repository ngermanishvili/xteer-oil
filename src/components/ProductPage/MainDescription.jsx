import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MainDescription = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="divider" />
      <div className="headerWrapper">
        <h2 style={{ alignSelf: "center", color: "black" }}>
          {data?.productName}
        </h2>
        <p style={{ alignSelf: "center" }}>{data?.description}</p>
      </div>
      <div>
        <span className="headings">{t("Applications")}</span>
        <ul className="listWrapper">
          {data?.applications?.map((item) => (
            <li
              key={item}
              className="listItems"
              style={{ listStyle: "inside" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="headings">{t("CertsAndApps")}</span>
        <ul className="listWrapper">
          {data?.certsAndApps?.map((item) => (
            <li
              key={item}
              className="listItems"
              style={{ listStyle: "inside" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="headings">{t("FeaturesAndBenefits")}</span>
        <ul className="listWrapper">
          {data?.featuresAndBenefits?.map((item) => (
            <li
              key={item}
              className="listItems"
              style={{ listStyle: "inside" }}
            >
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
    @media (max-width: 1160px) {
      margin-top: 30px;
      background-color: dodgerblue;
    }
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
