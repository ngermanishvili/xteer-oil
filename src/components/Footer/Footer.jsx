import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "styled-components";
// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import { useTranslation } from "react-i18next";
import Logo2 from "../../assets/images/examples/adobegentologo6.png";

function Footer({ company, links, socials, light }) {
  const { t } = useTranslation();
  const { to, name } = company;

  const year = new Date().getFullYear();

  const renderLinks = links.map((link, index) => (
    <MKTypography
      key={index} // Use index as a unique key
      component={Link}
      to={link.to}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {t(link.name)}
    </MKTypography>
  ));

  const renderSocials = socials.map((social, index) => (
    <MKTypography
      key={index} // Use index as a unique key
      component={Link}
      to={social.to}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Wrapper>
        <ImageWrapper src={Logo2} alt="gento" />
      </Wrapper>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            spacing={3}
            mt={1}
            mb={3}
          >
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            {t("GentoTradingFooter")} &copy; {year} {t("AllRightsReserved")}
            <MKTypography
              component={Link}
              to={to}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {t(name)}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}
// Setting default values for the props of CenteredFooter
Footer.defaultProps = {
  company: { to: "/", name: "" },
  links: [
    { to: "/", name: "Main" },
    {
      to: "/about",
      name: "About us",
    },
    { to: "/contact", name: "Contact" },
    { to: "/find-my-oil", name: "Catalog" },
  ],
  socials: [
    {
      icon: <FacebookIcon fontSize="small" />,
      to: "https://www.facebook.com/lukservice.ge/",
    },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.img`
  position: absolute;
  top: -115px;
  left: 2%;
  width: 200px;

  @media (max-width: 960px) {
    position: static;
    width: 100px;
    position: absolute;
    top: -120px;
    margin-right: 10px;
  }
`;
