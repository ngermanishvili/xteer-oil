import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

import styled from "styled-components";
// Images
import bgImage from "../../../assets/images/examples/wp7902092-oil-gas-wallpapers.jpg";
import Companies from "../../../components/Companies/Companies";
import ReactPlayer from "react-player";

function ContactMui() {
  return (
    <Wrapper>
      <MKBox>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={4}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
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
                    <MKTypography
                      variant="body2"
                      color="white"
                      opacity={0.8}
                      mb={3}
                    ></MKTypography>
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
                      ></MKTypography>
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
                      ></MKTypography>
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
                        აქ უნდა იყოს კომპანიის შესახებ ინფორმაცია{" "}
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
              <Grid item xs={12} lg={12}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}></MKBox>
                  <MKBox pt={0.5} pb={3} px={2}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <div style={{}}></div>
                        <div className="video-content">
                          <h2
                            style={{
                              padding: "15px",
                              fontSize: "24px",
                              font: "bold",
                            }}
                          >
                            ვიდეოს აღწერა შეგვიძლია დავიტანოთ აქ
                          </h2>
                          <div className="player-wrapper">
                            <ReactPlayer
                              className="react-player"
                              url="https://oilproducts.s3.amazonaws.com/yt5s.io-UG+Lubricants-(1080p).mp4"
                              width="100%"
                              height="100%"
                              controls
                            />
                          </div>
                          <div
                            style={{ textAlign: "center", marginTop: "10px" }}
                          ></div>
                        </div>
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        აქ უნდა იყოს კომპანიის შესახებ ინფორმაცია
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}></Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </MKBox>
    </Wrapper>
  );
}

export default ContactMui;

const Wrapper = styled.div`
  width: 94%;
  height: auto;
  margin: 0 auto;
`;
