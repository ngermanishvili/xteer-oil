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
import bgImage from "../assets/images/examples/wp7902092-oil-gas-wallpapers.jpg";
import Places from "./Presentation/sections/Posts";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <MkBox
        minHeight="70vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.2)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKTypography
          variant="h1"
          color="white"
          mt={12}
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
        ></MKTypography>
        <div className="overlay"></div>
      </MkBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 4 },
          mt: -10,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Testimonials />

        <Divider orientation="left">
          <MKTypography variant="h4" color="alert" textGradient mb={-10}>
            პარტნიორი კომპანიები
          </MKTypography>
        </Divider>
        <Companies />
        {/* <Download /> */}
        <Places />
      </Card>
    </>
  );
};

export default Home;
