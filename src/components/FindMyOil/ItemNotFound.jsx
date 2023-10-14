import React from "react";
import { searchStore } from "../../zustand/searchStore";
import { Result } from "antd";

const ItemNotFound = () => {
  const filteredData = searchStore((state) => state.filteredData);
  const searchQuery = searchStore((state) => state.searchQuery);
  const setSearchQuery = searchStore((state) => state.setSearchQuery);

  if (filteredData.length === 0 && searchQuery.length > 0) {
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Result
            status="404"
            title="მოხდა შეცდომა"
            subTitle="აღნიშნული პროდუქცია ვერ მოიძებნა..."
            extra={
              <button
                className="buttonText"
                to="/find-my-oil"
                onClick={() => {
                  setSearchQuery("");
                }}
                type="primary"
              >
                უკან დაბრუნება
              </button>
            }
          />
        </div>
      </React.Fragment>
    );
  }
};

export default ItemNotFound;
