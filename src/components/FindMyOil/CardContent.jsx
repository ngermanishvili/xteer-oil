import React, { useEffect } from "react";
import { dataStore } from "../../zustand/store";
import { tabStore } from "../../zustand/fitlerStore";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
const { Meta } = Card;
import { searchStore } from "../../zustand/searchStore";
import ItemNotFound from "./ItemNotFound";
import { useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const CardContent = () => {
  // if u want to see fetched items u need to use this hook and pass it to the component and hoook name is fetchData and it is in store.js and i cant see the items becouse i dont have access to the database so if u want to see the items u need to pass it to the component and use it foe example give me a code
  const { t } = useTranslation();
  const fetchData = dataStore((state) => state.fetchData);
  const loading = dataStore((state) => state.loading);
  const currentTab = tabStore((state) => state.currentTab);
  const itemsPerPage = tabStore((state) => state.itemsPerPage);
  const currentPage = tabStore((state) => state.currentPage);
  const setCurrentPage = tabStore((state) => state.setCurrentPage);
  const setTab = tabStore((state) => state.setTab);
  const displayedProducts = tabStore((state) => state.displayedProducts());
  const currentData = tabStore((state) => state.currentData)() || [];
  const filteredData = searchStore((state) => state.filteredData);
  const searchQuery = searchStore((state) => state.searchQuery);
  const setFilteredData = searchStore((state) => state.setFilteredData);
  const currentFilteredData = searchStore((state) =>
    state.currentFilteredData()
  );

  const productsSize =
    searchQuery.length >= 1 ? filteredData.length : displayedProducts.length;
  const productsToDisplay =
    searchQuery.length >= 1 ? currentFilteredData : currentData;

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
    setFilteredData();
    setTab("all");
  }, [location]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setFilteredData();
  }, [currentTab]);
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePageChange = (page) => {
    smoothScrollToTop();
    setCurrentPage(page);
  };

  const handleDetailsLinkClick = (Event, productId) => {
    // Open in a new tab when CTRL is pressed
    const linkTarget = Event.keyDown === 17 ? "_blank" : "_self";
    return (
      <DetailsLink
        className="seeDetails"
        to={`/product/${productId}`}
        target={linkTarget}
      >
        {t("seeDetails")}
      </DetailsLink>
    );
  };

  return (
    <>
      <div>
        {loading ? (
          <LoaderContainer>
            <SyncLoader size={18} color="dodgerblue" />
          </LoaderContainer>
        ) : (
          <React.Fragment>
            <Search />
            <ItemNotFound />
            <Wrapper>
              {productsToDisplay.map((product) => (
                <Card
                  className="cards"
                  key={product._id}
                  bodyStyle={{ width: "100%" }}
                >
                  <div style={{ width: "100%", display: "flex" }}>
                    <ProductImage>
                      <img
                        alt={product.productName}
                        src={product.imageUrl || "default_image_url"}
                      />
                    </ProductImage>
                    <ProductDetails>
                      <ProductTitle>{product.productName}</ProductTitle>
                      <Meta description={product.productLine} />
                      <ViscosityList>
                        {product.pdfUrls.map((viscosity, index, array) => (
                          <ViscosityItem key={viscosity.viscosityGrade}>
                            {viscosity.viscosityGrade}
                            {index !== array.length - 1 && "/"}
                          </ViscosityItem>
                        ))}
                      </ViscosityList>
                    </ProductDetails>
                  </div>
                  <div style={{ width: "100%" }}>
                    {handleDetailsLinkClick(Event, product._id)}
                  </div>
                </Card>
              ))}
            </Wrapper>
            <PaginationContainer>
              <Pagination
                key={currentPage}
                current={currentPage}
                onChange={handlePageChange}
                total={productsSize}
                pageSize={itemsPerPage}
                showSizeChanger={false}
              />
            </PaginationContainer>
          </React.Fragment>
        )}
      </div>
    </>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 45%;
  @media (max-width: 1275px) {
    width: 60%;
  }
`;

const ProductDetails = styled.div`
  width: 55%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1275px) {
    width: 40%;
  }
`;

const ProductTitle = styled.h1`
  margin-bottom: 22%;
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 17px;
  }
`;

const ViscosityList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const ViscosityItem = styled.li`
  margin-top: 4px;
`;

const DetailsLink = styled(Link)`
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background: #4281d6;
  color: #fff;
  width: 92%;
  margin-top: 20px;
  transition: background 0.5s, color 0.5s, transform 0.5s;
  transition: background 0.5s, color 0.5s, transform 0.5s;
  &:hover {
    background: #186ede;
    color: whitesmoke;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
  .cards {
    display: flex;
    align-items: center;
    height: 410px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    transform-origin: center bottom;
  }

  .cards:hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .seeDetails {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    padding: 10px 20px;
    font-size: 1rem;
  }
  .li {
    margin-top: 4px;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default CardContent;
