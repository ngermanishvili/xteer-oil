import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        flexShrink: 0,
        backgroundColor: "rgb(0,0,0)",
        right: "20",
        color: "whitesmoke",
        textAlign: "center",
      }}
    >
      <Row className="p-5">
        <Col lg={20} sm={24} style={{ inlineSize: "100px" }}>
          <StyleSpan>
            Georgia, Kutaisi Avtomshenebeli 88 (Free Industrial Zone), 4600
          </StyleSpan>
          <StyleSpan>©2023 Created by Gento Trading</StyleSpan>
        </Col>
        <Col lg={4} sm={24}>
          <div>
            <StyleSpan>Phone : +995 551 627 551</StyleSpan>
            <span>E-mail info@uglubricants.com</span>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

const StyleSpan = styled.span`
  line-height: 16px;
  margin-right: 11px;
  padding-right: 12px;
  border-right: 1px solid rgba(255, 255, 255, 0.55);
`;
export default Footer;
