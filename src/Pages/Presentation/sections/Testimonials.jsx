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
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";
import XteerLogo from "../../../assets/images/examples/xteer-logo.png";
import AminolLogo from "../../../assets/images/examples/aminol.png";
import AzmolLogo from "../../../assets/images/examples/azmol.png";

function Information() {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <MKBox component="section" py={4}>
        <Grid>
          <MKTypography variant="h4" color="info" textGradient mb={2}>
            {t("Catalog")}
          </MKTypography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src="https://aminol.ir/wp-content/uploads/2018/12/970917-AMINOL-CIC-LOGO-no-bg-redline-no-caption.png" />
                  </div>

                  <div className="contentBx">
                    <h2>{t("Hyundai")} </h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <Link to="/find-my-oil">{t("SeeCatalog")}</Link>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={AminolLogo} alt="nike-air-shoe" />
                  </div>

                  <div className="contentBx">
                    <h2>{t("Aminol")}</h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <a href="https://aminol.az/products" target="_blank">
                      {t("SeeWebsite")}
                    </a>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={AzmolLogo} alt="nike-air-shoe" />
                  </div>

                  <div className="contentBx">
                    <h2>{t("Azmol")}</h2>
                    <div className="color">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, impedit.
                      </p>
                    </div>
                    <Link to="/find-my-oil">{t("SeeWebsite")}</Link>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
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
