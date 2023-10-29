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
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Logo from "../../../assets/images/examples/adobegentologo5.png";
import MKBox from "../../../components/MKBox";

function Profile() {
  return (
    <div
      style={{
        backgroundColor: "#424242",
        height: "150px",
      }}
      bgColor="dark"
      component="section"
      py={{ xs: 6, sm: 12, md: 15 }}
    >
      <Grid container item xs={12} justifyContent="center" mx="auto">
        <MKBox mt={{ xs: -16 }} textAlign="center">
          <LogoWrapper>
            <LogoContainer src={Logo} alt="logo" />
          </LogoWrapper>
        </MKBox>
      </Grid>
    </div>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const LogoContainer = styled.img`
  margin-top: 50px;
  width: 100%;
  height: 100px;
`;

export default Profile;
