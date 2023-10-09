import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Breadcrumb, Layout, theme} from "antd";
import BadgeContent from "../components/ProductPage/Badge";
import ImageContent from "../components/ProductPage/ImageContent";
import DownloadPdS from "../components/ProductPage/Download";
import Specifications from "../components/ProductPage/Specification";
import CaModal from "../components/ProductPage/CaModal";
import axios from "axios";

const {Content, Footer} = Layout;

const ProductDetail = () => {
  const {productId} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching product for ID:", productId);
        const response = await axios.get(`http://localhost:8000/oils/`);
        console.log("API response:", response.data);
        const productData = response.data.find(
          (item) => item._id === productId
        );
        console.log("Selected product:", productData);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  console.log(product);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>მთავარი</Breadcrumb.Item>
          <Breadcrumb.Item>პროდუქტები</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading data. Please try again later.</p>
            ) : product ? ( // Check if product is not null
              <div className="gento-img">
                <ImageContent
                  imageUrl={product.imageUrl}
                  altText={product.productName}
                />
              </div>
            ) : (
              <p>Product not found</p>
            )}
            <DownloadPdS />
            <CaModal pdfUrls={product?.pdfUrls} /> <div className="p-5"></div>
            {
              product ? <BadgeContent product={product} /> : null //
            }
            <div className="p-5"></div>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©2023 Created by Gento Trading
      </Footer>
    </Layout>
  );
};

export default ProductDetail;
