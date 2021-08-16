import React from "react";
import {
  Col,
  Row,
  ListGroup,
  Button,
  Image,
  Container,
  Form,
} from "react-bootstrap";
import Rating from "../components/rating";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsAction } from "../actions/productActions";

function Productscreen({ history, match }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, products, error } = productDetails;

  function addToCartHandler() {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  useEffect(() => {
    dispatch(productDetailsAction(match.params.id));
  }, [dispatch]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <h3>Loading</h3>
      ) : error ? (
        <h4>error</h4>
      ) : (
        <Container>
          <Row>
            <Col md={6}>
              <Container>
                <Image src={products.image} alt={products.name} fluid />
              </Container>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{products.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={products.rating}
                    text={` ${products.numReviews}`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{products.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Rs {products.price}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  {products.countInStock > 0 ? "In Stock" : "Out of stock"}
                </ListGroup.Item>

                {products.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(products.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={() => addToCartHandler()}
                    className="btn-block"
                    type="button"
                    disabled={products.countInStock === 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Productscreen;
