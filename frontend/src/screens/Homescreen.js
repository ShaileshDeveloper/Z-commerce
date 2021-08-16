import React from "react";
// import products from "../products";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { productListAction } from "../actions/productActions";

import { useSelector, useDispatch } from "react-redux";

function Homescreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);
  return (
    <div>
      <Header />

      <Container>
        {loading ? (
          <h1>Loading ...</h1>
        ) : error ? (
          <h3>error</h3>
        ) : (
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
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Homescreen;
