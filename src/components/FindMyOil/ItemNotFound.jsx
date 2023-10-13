import React from "react";
import {searchStore} from "../../zustand/searchStore";
import {Result} from "antd";
import {Link} from "react-router-dom";

const ItemNotFound = () => {
  const filteredData = searchStore((state) => state.filteredData);
  const searchQuery = searchStore((state) => state.searchQuery);

  if (filteredData.length === 0 && searchQuery.length > 0) {
    return (
      <React.Fragment>
        <div style={{display: "flex", justifyContent: "center"}}>
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
        </div>
      </React.Fragment>
    );
  }
};

export default ItemNotFound;
