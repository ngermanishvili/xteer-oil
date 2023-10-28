// @mui material components
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import bgImage from "../../../assets/images/examples/bgbanner2.jpeg";
import styled from "styled-components";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import Places from "./Posts";
import { Divider } from "antd";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 6 }}>
      <Wrapper>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={8}>
            <MKTypography variant="h3" mb={6}>
              Check my latest blogposts <Divider />
            </MKTypography>
            <Grid xs={12} lg={8}>
              <img style={{ borderRadius: "15px" }} src={bgImage} alt="seo" />
            </Grid>
            <MKTypography variant="body2" color="text" mb={2}></MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6 } }}
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
      </Wrapper>
    </MKBox>
  );
}

export default FeaturesOne;

const Wrapper = styled.div`
  padding: 0 50px;
  background-color: #e9e9e9;
  color: #fff;
  border-radius: 15px;
`;
