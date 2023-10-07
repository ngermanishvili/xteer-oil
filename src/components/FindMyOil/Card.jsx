import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const { Meta } = Card;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const CardContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/oils");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data. Please try again later.</p>
      ) : (
        data.map((product, index) => (
          <Card
            key={index}
            cover={<img style={{ width: "200px", height: "200px" }} alt={product.productName} src={product.imageUrl || 'default_image_url'} />}
          >
            <Meta
              title={product.productName}
              description={product.description}
            />
            <div className="LinkContent">
              <Link to={index} className="bg-primary p-2">
                See Details
              </Link>
            </div>
          </Card>
        ))
      )}
    </Wrapper>
  );
};

export default CardContent;
