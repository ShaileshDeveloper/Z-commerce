import React from "react";
import {
  Col,
  Row,
  ListGroup,
  Card,
  Button,
  Image,
  Container,
} from "react-bootstrap";
import products from "../products";
import Rating from "../components/rating";
import { Link } from "react-router-dom";

function Productscreen({ match }) {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Container>
        <Row>
          <Col md={6}>
            <Container>
              <Image src={product.image} alt={product.name} fluid />
            </Container>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={` ${product.numReviews}`}
                />
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Rs {product.price}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {product.countInStock > 0 ? "In Stock" : "Out of stock"}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type="button" disabled={product.countInStock === 0}>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Productscreen;