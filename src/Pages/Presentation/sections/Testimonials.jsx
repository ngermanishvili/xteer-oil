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
import Divider from "@mui/material/Divider";
// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKAvatar from "../../../components/MKAvatar";

// Material Kit 2 React examples
import DefaultReviewCard from "../../../components/examples/Cards/ReviewCards/DefaultReviewCard";
import Companies from "../../../components/Companies/Companies";
import gentoImg from "../../../assets/images/examples/agrinol.png";
import gentoImg2 from "../../../assets/images/examples/azmol.png";
import gentoImg3 from "../../../assets/images/examples/xteerlogo.png";
import styled from "styled-components";
import { Button } from "antd";
import ProductCards from "../../../components/ProductCards/ProductCards";

function Information() {
  return (
    <Wrapper>
      <MKBox component="section" py={4}>
        <Grid>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            პროდუქცია
          </MKTypography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="https://aminol.ir/wp-content/uploads/2018/12/970917-AMINOL-CIC-LOGO-no-bg-redline-no-caption.png"
                      alt="nike-air-shoe"
                    />
                  </div>

                  <div className="contentBx">
                    <h2>ჰიუნდაი იქსტიერი</h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <a href="#">დაათვალიერე</a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="https://aminol.ir/wp-content/uploads/2018/12/970917-AMINOL-CIC-LOGO-no-bg-redline-no-caption.png"
                      alt="nike-air-shoe"
                    />
                  </div>

                  <div className="contentBx">
                    <h2>ამინოლი</h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <a href="#">დაათვალიერე</a>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/02/logo-seo.png"
                      alt="nike-air-shoe"
                    />
                  </div>

                  <div className="contentBx">
                    <h2>ჰიუნდაი იქსტიერი</h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <a href="#">დაათვალიერე</a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* <MKTypography variant="h2">GENTO</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            პარტნიორი კომპანიები
          </MKTypography>

          <MKTypography textGradient color="secondary" variant="body1" mb={1}>
            პროდუქცია
          </MKTypography> */}

          <Divider sx={{ my: 10 }} />
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={4} lg={10}></Grid>
            <Grid item xs={6} md={4} lg={2}></Grid>
            <Grid item xs={6} md={4} lg={2}></Grid>
            <Grid item xs={6} md={4} lg={2}></Grid>
          </Grid>
        </Grid>
        <PartnerCompanies>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            პარტნიორი კომპანიები
          </MKTypography>
          <Companies /> */}
        </PartnerCompanies>
      </MKBox>
    </Wrapper>
  );
}

export default Information;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const MyCustomCard = styled.div`
  .xteer-logo {
    width: 50%;
    height: auto;
  }
  .buttonstyled {
    margin-top: 10px;
    width: 70%;
    background-color: #42dddd;
    border: none;
  }
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;
  width: 360px;
  height: 400px;
  background-color: black;
`;

// const MyCustomCard2 = styled.div`
//   .xteer-logo {
//     width: 50%;
//     height: auto;
//   }
//   width: 100%;
//   padding: 10px;
//   width: 400px;
//   height: 300px;
//   background-color: black;
// `;
// const MyCustomCard3 = styled.div`
//   .xteer-logo {
//     width: 50%;
//     height: auto;
//   }
//   width: 100%;
//   padding: 10px;
//   width: 400px;
//   height: 300px;
//   background-color: black;
// `;

const PartnerCompanies = styled.div`
  width: 100%;
  max-width: 800px;
`;
