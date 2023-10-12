import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components'; 
const { Search } = Input;

const StyledSearch = styled(Search)` 
  .ant-input {
    border-color: initial;
    box-shadow: none; 
  }
`;
const BlueButton = styled(Button)` 
  background-color: #1890ff; 
  border-color: #1890ff; 
  color: #fff;
`;

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <StyledSearch
        placeholder="მოძებნე პროდუქცია"
        enterButton={
          <BlueButton 
            type="primary"
            onClick={handleSearch}
          >
            ძებნა
          </BlueButton>
        }
        size="large"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
