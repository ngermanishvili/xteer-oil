import React from "react";
import { Row, Col } from "antd";

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        width: "90%",
        height: "50px",
        background: "transparent",
        display: "flex",
        alignItems: "right",
        right: "20",
      }}
    >
      <Row className="p-5">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: "16px",
              paddingRight: 12,
              marginRight: 11,
              borderRight: "1px solid rgba(255, 255, 255, 0.55)",
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
