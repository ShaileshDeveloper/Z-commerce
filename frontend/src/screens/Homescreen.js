import React from "react";
import products from "../products";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";




function Homescreen() {
  return (
    <div>
     <Header />
      <Container>
      <Row>
        {products.map((product) => {
          return (
            <>
              <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
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
