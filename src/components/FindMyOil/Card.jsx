import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .LinkContent {
    margin-top: 50px;
  }
`;

const cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(
    <Card
      key={i}
      cover={
        <img
          style={{ width: "200px", height: "200px" }}
          alt={`example${i}`}
          src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/02/Hyundai-Xteer-Top-5W40@4x-1-300x300.png"
        />
      }
    >
      <Meta
        title={`Card title ${i + 1}`}
        description="This is the description"
      />
      <div className="LinkContent">
        <Link to="/product" className="bg-primary p-2">
          See Details
        </Link>
      </div>
    </Card>
  );
}

const CardContent = () => <Wrapper>{cards}</Wrapper>;

export default CardContent;
