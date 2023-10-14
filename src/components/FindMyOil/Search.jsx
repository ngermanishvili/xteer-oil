import React from "react";
import { Input } from "antd";
import styled from "styled-components";
const { Search } = Input;
import { searchStore } from "../../zustand/searchStore";
const StyledSearch = styled(Search)`
  .ant-input {
    border-color: initial;
    box-shadow: none;
    color: black;
  }
`;
const SearchComponent = () => {
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
    <div style={{ marginBottom: "24px" }}>
      <StyledSearch
        placeholder="მოძებნე პროდუქცია"
        size="large"
        value={searchQuery}
        onKeyUp={handleSearch}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchComponent;
