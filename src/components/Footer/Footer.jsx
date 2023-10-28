import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import { useTranslation } from "react-i18next";

function Footer({ company, links, socials, light }) {
  const { t } = useTranslation();
  const { to, name } = company; // Change href to to

  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link} // Change component to Link
      to={link.to} // Change href to to
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {t(link.name)} {/* Translate the link name */}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link} // Change component to Link
      to={social.to} // Change href to to
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
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
              component={Link} // Change component to Link
              to={to} // Change href to to
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {t(name)} {/* Translate the company name */}
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
