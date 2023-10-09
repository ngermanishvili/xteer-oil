import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Breadcrumb, Layout, theme} from "antd";
import BadgeContent from "../components/ProductPage/Badge";
import ImageContent from "../components/ProductPage/ImageContent";
import DownloadPdS from "../components/ProductPage/Download";
import CaModal from "../components/ProductPage/CaModal";
import axios from "axios";
import {SyncLoader} from "react-spinners";
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
            {product ? (
              <>
                <div className="gento-img">
                  <ImageContent
                    imageUrl={product.imageUrl}
                    altText={product.productName}
                  />
                </div>
                <DownloadPdS />
                <CaModal pdfUrls={product?.pdfUrls} />{" "}
                <div className="p-5"></div>
                <BadgeContent product={product} />
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
