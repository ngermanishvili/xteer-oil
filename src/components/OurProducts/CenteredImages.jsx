import React from "react";
import agrinolpng from "../../assets/agrinolpng.png";
import azmolas from "../../assets/azmolas.png";
import xteerlogo from "../../assets/xteerlogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CenteredImages = () => (
  <Wrapper>
    <div className="coll">
      <Link to="">
        <img className="image" src={agrinolpng} alt="agrinolpng" />
      </Link>
    </div>
    <div className="coll">
      <Link to="find-my-oil">
        <img src={xteerlogo} alt="xteer logo" />
      </Link>
    </div>
    <div className="coll">
      <a href="https://azmol.ge/" target="_blank">
        <img className="image" src={azmolas} alt="azmolas" />
      </a>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #323232;
  .coll {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 200px;
  }
  .image {
    border-radius: 10px;
    background-color: white;
  }
`;
export default CenteredImages;
