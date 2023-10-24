import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";
import ProductCards from "../../../components/ProductCards/ProductCards";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6} md={10} lg={14}>
              <div className="content-slider">
                <MKTypography variant="h3" color="white">
                  Do you love this awesome
                </MKTypography>
                <MKTypography variant="h3" color="white" mb={1}>
                  UI Kit for ReactJS &amp; MUI?
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={10}>
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in HTML. Start a new project or give an old
                  Bootstrap project a new look!
                </MKTypography>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="https://www.creative-tim.com/product/material-kit-react"
                  sx={{ mb: 4 }}
                >
                  See Product
                </MKButton>
              </div>
            </Grid>
            <Grid item xs={6} md={12} lg={14}>
              <ProductCards />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
