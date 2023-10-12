import React, { useEffect } from "react";
import { dataStore } from "../../zustand/store";
import { tabStore } from "../../zustand/fitlerStore";
import { Card, Pagination, Result } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
const { Meta } = Card;
import { searchStore } from "../../zustand/searchStore";

const CardContent = () => {
  const fetchData = dataStore((state) => state.fetchData);
  const currentTab = tabStore((state) => state.currentTab);
  const itemsPerPage = tabStore((state) => state.itemsPerPage);
  const currentPage = tabStore((state) => state.currentPage);
  const setCurrentPage = tabStore((state) => state.setCurrentPage);
  const displayedProducts = tabStore((state) => state.displayedProducts());
  const currentData = tabStore((state) => state.currentData)() || [];
  const filteredData = searchStore((state) => state.filteredData);
  const productsToDisplay = filteredData.length ? filteredData : currentData;
  const setFilteredData = searchStore((state) => state.setFilteredData);

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
  console.log(filteredData);
  const handlePageChange = (page) => {
    smoothScrollToTop();
    setCurrentPage(page);
  };
  if (filteredData.length === 0) {
    return (
      <React.Fragment>
        <Search />
        <Result
          status="404"
          title="მოხდა შეცდომა"
          subTitle="აღნიშნული პროდუქცია ვერ მოიძებნა..."
          extra={
            <Link className="buttonText" to="/find-my-oil" type="primary">
              უკან დაბრუნება
            </Link>
          }
        />
      </React.Fragment>
    );
  }
  return (
    <div>
      <Search />
      <Wrapper>
        {productsToDisplay.map((product) => (
          <Card
            className="cards"
            key={product._id}
            cover={
              <img
                style={{ width: "200px", height: "200px" }}
                alt={product.productName}
                src={product.imageUrl || "default_image_url"}
              />
            }
          >
            <Meta
              title={product.productName}
              description={product.productLine}
            />
            <ul style={{ display: "flex" }}>
              {product.pdfUrls.map((viscosity, index, array) => (
                <li className="li" key={viscosity.viscosityGrade}>
                  {viscosity.viscosityGrade}
                  {index !== array.length - 1 && "/"}
                </li>
              ))}
            </ul>
            <div className="LinkContent">
              <Link
                onClick={handlePageChange}
                className="seeDetails"
                to={`/product/${product._id}`}
              >
                See Details
              </Link>
            </div>
          </Card>
        ))}
      </Wrapper>
      <PaginationContainer>
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={displayedProducts.length}
          pageSize={itemsPerPage}
          showSizeChanger={false}
        />
      </PaginationContainer>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  .cards {
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
    right: 15px;
    padding: 10px;
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
