/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

import styled from "styled-components";
// Images
import bgImage from "../../../assets/images/examples/wp7902092-oil-gas-wallpapers.jpg";
import Companies from "../../../components/Companies/Companies";

function ContactMui() {
  return (
    <MKBox>
      <Wrapper>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={4}
            sx={{ overflow: "hidden" }}
          >
            <div container spacing={2}>
              <Grid
                item
                xs={12}
                lg={14}
                xl={16}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="white"
                      opacity={0.8}
                      mb={3}
                    >
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <i
                          className="fab fa-twitter"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <i
                          className="fab fa-dribbble"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Companies />
              <Grid item xs={12} lg={12}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23829.941272485168!2d44.8703534!3d41.7044908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d9d3efa1247%3A0x9763e8a33b82cc9!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY4YOhIOGDluGDpuGDleGDmOGDoSDhg57hg5rhg5Dhg5bhg5A!5e0!3m2!1ska!2sge!4v1697555942744!5m2!1ska!2sge"
                        width="100%"
                        height="300px"
                        style={{ borderRadius: "10px" }}
                      ></iframe>
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}></Grid>
                      <Grid item xs={12} pr={1} mb={6}></Grid>
                      <Grid item xs={12} pr={1} mb={6}></Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </div>
          </MKBox>
        </Grid>
      </Wrapper>
    </MKBox>
  );
}

export default ContactMui;

const Wrapper = styled.div`
  width: 94%;
  height: auto;
  margin: 0 auto;
`;
