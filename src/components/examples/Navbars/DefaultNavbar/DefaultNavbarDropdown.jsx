import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import MKBox from "../../../MKBox";
import MKTypography from "../../../MKTypography";

function DefaultNavbarDropdown({ name, icon, light, href, route, ...rest }) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <MKBox
      {...rest}
      mx={1}
      p={1}
      display="flex"
      alignItems="baseline"
      color={light ? "white" : "dark"}
      opacity={light ? 1 : 0.6}
      sx={{ cursor: "pointer", userSelect: "none" }}
      {...(route && routeComponent)}
      {...(href && linkComponent)}
    >
      <MKTypography
        variant="body2"
        lineHeight={1}
        color="inherit"
        sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
      ></MKTypography>
      <MKTypography
        variant="button"
        fontWeight="regular"
        textTransform="capitalize"
        color={light ? "white" : "dark"}
        sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
      >
        {name}
      </MKTypography>
    </MKBox>
  );
}

DefaultNavbarDropdown.defaultProps = {
  light: false,
  href: "",
  route: "",
};

DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
};

export default DefaultNavbarDropdown;
