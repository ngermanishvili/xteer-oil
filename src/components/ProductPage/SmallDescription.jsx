import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import DownloadPds from "./DownloadPds";
import { useTranslation } from "react-i18next";
import MKTypography from "../../components/MKTypography";

const SmallDescription = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <MKTypography variant="body2">
          <MKTypography variant="h4"> {t("ProductName")}</MKTypography>{" "}
          {data?.productName}
        </MKTypography>
        <MKTypography variant="body2">
          <MKTypography variant="h4"> {t("Category")} </MKTypography>
          {data?.category}
        </MKTypography>
        <MKTypography variant="body2">
          <MKTypography variant="h4"> {t("ProductLine")} </MKTypography>
          {data?.productLine}
        </MKTypography>
        <MKTypography variant="body2">{data?.description}</MKTypography>
        <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
          <MKTypography
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 0.375,

              "& .material-icons-round": {
                ml: -0.375,
              },
            }}
            variant="body2"
          >
            {" "}
            {t("PackageSizes")}
          </MKTypography>
          {data?.packageSizes.map((item) => (
            <div key={item}>
              <Button size="middle" type="primary">
                {item}
              </Button>
            </div>
          ))}
        </div>
        <DownloadPds data={data} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0 20px;
  margin-bottom: 30px;
  color: #555;

  @media (max-width: 1160px) {
    margin-bottom: 0px;
  }
  span {
    gap: 20;
    color: black;
    font-weight: 800;
  }
  @media (max-width: 1160px) {
    font-size: 18px;
    text-align: left;
  }
`;

export default SmallDescription;
