import React, {useEffect} from "react";
import {dataStore} from "../../zustand/store";
import {tabStore} from "../../zustand/fitlerStore";
import {Card, Pagination} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
const {Meta} = Card;
import {searchStore} from "../../zustand/searchStore";
import ItemNotFound from "./ItemNotFound";
import {useLocation} from "react-router-dom";
import {SyncLoader} from "react-spinners";
import BasicSlider from "../demoSlider/DemoSlider";

const CardContent = () => {
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
  console.log(productsToDisplay);
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
  return (
    <>
      <div>
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SyncLoader size={18} color="dodgerblue" />
          </div>
        ) : (
          <React.Fragment>
            <Search />
            <ItemNotFound />
            <Wrapper>
              {productsToDisplay.map((product) => (
                <Card
                  className="cards"
                  key={product._id}
                  bodyStyle={{width: "100%"}}
                >
                  <div style={{width: "100%", display: "flex"}}>
                    <div style={{width: "45%"}}>
                      <img
                        style={{width: "200px", height: "200px"}}
                        alt={product.productName}
                        src={product.imageUrl || "default_image_url"}
                      />
                    </div>
                    <div style={{width: "55%", textAlign: "center"}}>
                      <h1 style={{marginBottom: "22%", fontSize: "20px"}}>
                        {product.productName}
                      </h1>
                      <Meta description={product.productLine} />
                      <ul
                        style={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          width: "100%",
                          flexWrap: "wrap",
                        }}
                      >
                        {product.pdfUrls.map((viscosity, index, array) => (
                          <li className="li" key={viscosity.viscosityGrade}>
                            {viscosity.viscosityGrade}
                            {index !== array.length - 1 && "/"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{width: "100%"}}>
                    <Link
                      style={{
                        marginBottom: "10px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                        background: "#42C1E3",
                        color: "#fff",
                        width: "92%",
                        marginTop: "20px",
                      }}
                      onClick={handlePageChange}
                      className="seeDetails"
                      to={`/product/${product._id}`}
                    >
                      დეტალური ინფორმაცია
                    </Link>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
