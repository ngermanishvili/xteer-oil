/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Kit 2 React base styles
import colors from "../../assets/theme/base/colors";
import linearGradient from "../../assets/theme/functions/linearGradient";

import breakpoints from "../../assets/theme/base/breakpoints";
import typography from "../../assets/theme/base/typography";
import boxShadows from "../../assets/theme/base/boxShadows";
import borders from "../../assets/theme/base/borders";
import globals from "../../assets/theme/base/globals";

// Material Kit 2 React helper functions
import boxShadow from "../../assets/theme/functions/boxShadow";
import pxToRem from "../../assets/theme/functions/pxToRem";
import rgba from "../../assets/theme/functions/rgba";

// Material Kit 2 React components base styles for @mui material components


export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    linearGradient,
    boxShadow,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },


  },
});
