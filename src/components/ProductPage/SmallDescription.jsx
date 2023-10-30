import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import DownloadPds from "./DownloadPds";

const SmallDescription = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>
        <span>{t("ProductName")}&nbsp; :&nbsp; </span> {data?.productName}
      </h2>
      <h3>
        <span>{t("Category")}&nbsp; :&nbsp; </span>
        {data?.category}
      </h3>
      <h2>
        <span>{t("ProductLine")}&nbsp; :&nbsp; </span>
        {data?.productLine}
      </h2>
      <p>{data?.description}</p>
      <FlexContainer>
        <span style={{ minWidth: "170px" }}>{t("PackageSizes")}&nbsp; :</span>
        <PackageSizesContainer>
          {data?.packageSizes.map((item) => (
            <div key={item}>
              <Button size="middle" type="primary">
                {item}
              </Button>
            </div>
          ))}
        </PackageSizesContainer>
      </FlexContainer>
      <DownloadPds data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin: 0 auto;
  margin-bottom: 30px;
  color: #555;

  @media (max-width: 1160px) {
    margin-bottom: 0px;
  }

  span {
    color: black;
    font-weight: 700;
  }

  @media (max-width: 1160px) {
    font-size: 18px;
    text-align: left;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const PackageSizesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 15px;
`;

export default SmallDescription;
