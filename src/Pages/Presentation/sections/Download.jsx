// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import bgImage from "../../../assets/images/examples/bgbanner2.jpeg";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 10 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" my={1}>
              Read More About Us
            </MKTypography>
            <Grid xs={12} lg={14}>
              <img style={{ borderRadius: "15px" }} src={bgImage} alt="seo" />
            </Grid>
            <MKTypography variant="body2" color="text" mb={2}></MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={4}>
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="2rem"
                  height="2rem"
                  variant="gradient"
                  bgColor="warning"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                ></MKBox>
                <MKTypography variant="body2" pl={2}>
                  When we lose family over time. What else could rust the heart
                  more over time? Blackgold.
                  <MKTypography
                    mt={4}
                    component="a"
                    href="#"
                    variant="body2"
                    color="info"
                    fontWeight="regular"
                    sx={{
                      width: "max-content",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    More about us
                  </MKTypography>
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
