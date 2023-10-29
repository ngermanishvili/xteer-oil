import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  max-width: 650px;
  position: absolute;
  top: 40%;
  left: 60px;
  background: white;
  margin: 50px auto;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .heading-content {
    width: 100%;
    color: #727272;
    text-transform: uppercase;
    padding: 20px;
    border-bottom: 2px solid #efefef;
    font-size: 12px;

    svg.heart {
      height: 24px;
      width: 24px;
      float: right;
      margin-top: -3px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        fill: red;
      }
    }

    svg.arrow {
      float: left;
      height: 15px;
      width: 15px;
      margin-right: 10px;
    }
  }

  .photo {
    padding: 30px;
    width: 45%;
    text-align: center;
    float: left;

    img {
      max-height: 240px;
    }
  }

  .description {
    padding: 30px;
    float: left;
    width: 55%;
    border-left: 2px solid #efefef;

    h1 {
      color: #515151;
      font-weight: 300;
      padding-top: 15px;
      margin: 0;
      font-size: 30px;
      font-weight: 300;
    }

    h2 {
      color: #515151;
      margin: 0;
      text-transform: uppercase;
      font-weight: 500;
    }

    h4 {
      margin: 0;
      color: #727272;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
      color: #727272;
      padding: 20px 0;
      margin: 0;
    }

    button {
      outline: 0;
      border: 0;
      background: none;
      border: 1px solid #d9d9d9;
      padding: 8px 0px;
      margin-bottom: 30px;
      color: #515151;
      text-transform: uppercase;
      width: 100%;
      font-family: inherit;
      margin-right: 5px;
      transition: all 0.3s ease;
      font-weight: 500;

      &:hover {
        border: 1px solid #aedaa6;
        color: #aedaa6;
        cursor: pointer;
      }
    }
  }
`;

function ProductCards() {
  return (
    <Card>
      <div className="heading-content">
  
      </div>
      <div className="photo">
        <img
          src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/02/Hyundai-Xteer-Gasoline-Ultra-Protection-5W30@4x-1.png"
          alt="Product"
        />
      </div>
      <div className="description">
        <h2>Hydraulic oil </h2>
        <h4>5w30</h4>
        <p>
          Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
          planter with a blue & red ribbom and butterfly pick.
        </p>
      </div>
    </Card>
  );
}

export default ProductCards;
