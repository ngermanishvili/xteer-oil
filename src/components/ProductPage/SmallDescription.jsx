import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import MKTypography from "../../components/MKTypography";
import { Divider } from "antd";

const SmallDescription = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <MKTypography variant="body2">
          <MKTypography variant="p">
            {" "}
            {t("ProductName")} &nbsp;:&nbsp;&nbsp;&nbsp;
          </MKTypography>
          {data?.productName}
        </MKTypography>
        <Divider />

        <MKTypography variant="body2">
          <MKTypography variant="p" color="info">
            {t("Category")}&nbsp; :&nbsp;&nbsp;&nbsp;{" "}
          </MKTypography>
          {data?.category}
        </MKTypography>
        <Divider />

        <MKTypography variant="body2">
          <MKTypography variant="p">
            {t("ProductLine")}&nbsp;:&nbsp;&nbsp;&nbsp;
          </MKTypography>
          {data?.productLine}
        </MKTypography>
        <Divider />

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
