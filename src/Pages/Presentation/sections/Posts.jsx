import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import {useEffect} from "react";
import TransparentBlogCard from "../../../components/examples/Cards/BlogCards/TransparentBlogCard";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {dataStore} from "../../../zustand/store";
import {Navigation, Autoplay, Pagination} from "swiper/modules";
import {Divider} from "antd";
import MKTypography from "../../../components/MKTypography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Places() {
  const { t } = useTranslation();
  const fetchData = dataStore((state) => state.fetchData);
  const data = dataStore((state) => state.data);

  useEffect(() => {
    const fetchDataAndLogData = async () => {
      await fetchData();
    };

    fetchDataAndLogData();
  }, []);

  const maxItems = Math.min(40, data.length); // Set to a maximum of 40 items
  const groupedData = [];

  for (let i = 0; i < maxItems; i += 4) {
    const group = data.slice(i, i + 4);
    groupedData.push(group);
  }

  // Function to truncate the description
  const truncateDescription = (description) => {
    if (description.length <= 30) {
      return description;
    }
    return description.slice(0, 48) + "…";
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "…";
  };

  return (
    <>
      <Wrapper>
        <MKBox component="section" py={2}>
          {" "}
          <Divider orientation="center">
            <MKTypography variant="h4" color="info" textGradient mb={2}>
              {t("Production")}
            </MKTypography>
          </Divider>
          <BtnWrapper>
            <Link className="styledLink" to="/find-my-oil">
              {t("FindDetailedProduct")}
            </Link>
          </BtnWrapper>
          <Grid container spacing={3}>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {groupedData.map((group, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    backgroundColor: "transparent",
                    padding: "10px 50px ",
                  }}
                >
                  <Grid container spacing={14}>
                    {group.map((item) => (
                      <Grid key={item._id} item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                          image={item.imageUrl}
                          title={truncateText(item.productName, 30)}
                          description={truncateDescription(item.description)}
                          action={{
                            type: "internal",
                            route: `/product/${item._id}`,
                            color: "info",
                            cursor: "pointer",
                            label: t("ViewProduct"),
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </MKBox>
      </Wrapper>
    </>
  );
}

export default Places;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .styledLink {
    border-radius: 15px;
    max-width: 1200px;
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #257fd4;
    color: #fff;
    display: flex; /* Add display flex */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    text-decoration: none; /* Ensure text-decoration is removed for Link */
  }
`;

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 0 20px;
`;
