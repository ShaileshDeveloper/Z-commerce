import React from "react";
// import products from "../products";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Homescreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      console.log(data)
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <ProductCard product={product} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Homescreen;
