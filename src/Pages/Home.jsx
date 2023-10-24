import { Divider, Row } from "antd";
import CenteredImages from "../components/OurProducts/CenteredImages";
import Companies from "../components/Companies/Companies";
// import BasicSlider from "../components/demoSlider/DemoSlider";
// import Parallax from "../components/Parallax/Parallax";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import { useTranslation } from "react-i18next";
// import i18n from "../i18n";
import MkBox from "../components/MKBox";
import MKTypography from "../components/MKTypography";
import Card from "@mui/material/Card";
import Counters from "../Pages/Presentation/sections/Counters";
import Information from "../Pages/Presentation/sections/Information";
import Testimonials from "../Pages/Presentation/sections/Testimonials";
import Download from "../Pages/Presentation/sections/Download";
import bgImage from "../assets/images/examples/bgbanner2.jpeg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCards from "../components/ProductCards/ProductCards";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <MkBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              GENTO TRADING
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              We are a company that is committed to the quality of our products
              and services. &amp; Premium Lubricants Distributor in Georgia
            </MKTypography>
          </Grid>
        </Container>
      </MkBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Testimonials />
        <Download />
      </Card>
    </>
  );
};

export default Home;
