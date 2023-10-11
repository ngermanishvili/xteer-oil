import styled from "styled-components";
import Svg1 from "../../assets/agrinol.png";
import Svg2 from "../../assets/xteerlogo.png";
import Svg3 from "../../assets/azmol.png";
import Svg4 from "../../assets/svg4.png";
import Link from "antd/es/typography/Link";
// Define media queries for different screen sizes
const tablet = "768px"; // Adjust this value as needed
const mobile = "480px"; // Adjust this value as needed

const ImageContainer = styled.div`
  max-width: 100%;
  width: 20%;
  padding: 10px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 10px;
  background-color: #ccc;

  h2 {
    font-size: 1rem;
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #5f5e5e;
  }

  @media (max-width: ${tablet}) {
    width: 70%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Button = styled.button`
  background-color: #00559d;
  font-size: 0.8em;
  margin-top: 10px;
  color: #fff;
  width: 150px;
  padding: 6px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.5%;
  flex-direction: column;
  p {
    font-size: 2rem;
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.88);
  }
  .logowrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 80px;
  }
  @media (max-width: ${tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

const CenteredImages = () => {
  return (
    <Container>
      <p>ჩვენი პროდუქტი</p>
      <div className="logowrapper">
        <ImageContainer>
          <Link to="/find-my-oil">
            <Image src={Svg1} alt="SVG 1" />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/find-my-oil">
            <Image src={Svg2} alt="SVG 1" />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/find-my-oil">
            <Image src={Svg3} alt="SVG 1" />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="/find-my-oil">
            <Image src={Svg1} alt="SVG 1" />
          </Link>
        </ImageContainer>
      </div>
    </Container>
  );
};

export default CenteredImages;
