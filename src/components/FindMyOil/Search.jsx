import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { searchStore } from "../../zustand/searchStore";
import { useTranslation } from "react-i18next";
const SearchComponent = () => {
  const { t } = useTranslation();
  const searchQuery = searchStore((state) => state.searchQuery);
  const setSearchQuery = searchStore((state) => state.setSearchQuery);
  const setFilteredData = searchStore((state) => state.setFilteredData);

  const handleSearch = () => {
    setFilteredData();
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length > 0 && value.trim() === "") return;
    setSearchQuery(value);
  };

  return (
    <CustomInputContainer>
      <CustomSearchInput
        type="text"
        placeholder={t("FindDetailedProduct")}
        value={searchQuery}
        onKeyUp={handleSearch}
        onChange={handleChange}
      />
      <SearchIcon />
    </CustomInputContainer>
  );
};

const customBorderColor = "rgb(22, 119, 255)";
const defaultBorderColor = "#ccc";

const CustomInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const CustomSearchInput = styled.input`
  border: 1px solid ${defaultBorderColor};
  box-shadow: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  max-width: 49.6%;
  outline: none;
  font-weight: 300;
  caret-color: ${customBorderColor};
  &::placeholder {
    color: #888;
  }

  &:focus {
    border: 1px solid ${customBorderColor};
  }
  @media (max-width: 1160px) {
    max-width: 100%;
    width: 100%;
  }
`;

const SearchIcon = styled(FcSearch)`
  position: absolute;
  right: 26%;
  @media (max-width: 1160px) {
    right: 1%;
  }
`;

export default SearchComponent;
