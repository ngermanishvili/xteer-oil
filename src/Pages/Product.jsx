import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";
import SingleProductLayout from "../components/ProductPage/SingleProductLayout";
import { dataStore } from "../zustand/store";
import { SyncLoader } from "react-spinners";
const { Content } = Layout;

const ProductDetail = () => {
  const { productId } = useParams();
  const data = dataStore((state) => state.data);
  const [product, setProduct] = useState(null);
  const singleProductFilter = () => {
    const singleProduct = data.find((item) => item._id === productId);
    setProduct(singleProduct);
  };
  const fetchData = dataStore((state) => state.fetchData);

  useEffect(() => {
    singleProductFilter();
  }, [productId, data]);

  useEffect(() => {
    fetchData();
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{ margin: "16px 0" }}
          itemRender={(route, params, routes, paths) => {
            const isLastItem = routes.indexOf(route) === routes.length - 1;
            return isLastItem ? (
              <span>{route.breadcrumbName}</span>
            ) : (
              <a href={route.path}>{route.breadcrumbName}</a>
            );
          }}
        />
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
            }}
          >
            {product ? (
              <>
                <>
                  <SingleProductLayout productId={product._id} />
                </>
                <div className="p-5"></div>
              </>
            ) : (
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
            )}

            <div className="p-5"></div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default ProductDetail;
