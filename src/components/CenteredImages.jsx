import styled from "styled-components";
import Svg1 from "../assets/svg1.png";
import Svg2 from "../assets/svg2.png";
import Svg3 from "../assets/svg3.png";
import Svg4 from "../assets/svg4.png";

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
  width: 80px;
  height: 80px;
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
  padding: 20px;
  width: 100%;

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
      <ImageContainer>
        <Image src={Svg1} alt="SVG 1" />
        <h2>სამრეწველო დიაპაზონი</h2>
        <Button>პროდუქტის აღწერა</Button>
      </ImageContainer>
      <ImageContainer>
        <Image src={Svg2} alt="SVG 2" />
        <h2>ATF/GEAR OIL</h2>
        <Button>პროდუქტის აღწერა</Button>
      </ImageContainer>
      <ImageContainer>
        <Image src={Svg3} alt="SVG 3" />
        <h2>დიზელი/HEAVY DUTY</h2>
        <Button>პროდუქტის აღწერა</Button>
      </ImageContainer>
      <ImageContainer>
        <Image src={Svg4} alt="SVG 4" />
        <h2>ბენზინი</h2>
        <Button>პროდუქტის აღწერა</Button>
      </ImageContainer>
    </Container>
  );
};

export default CenteredImages;
