import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/rating";
import { Link } from "react-router-dom";


function ProductCard({ product }) {
  return (
    <div>
      <Card className="my-3 p-2 rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
       </Link>

        <Card.Body>
          <a href={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text className="py-3" as="div">
              <Rating
                value={product.rating}
                text={product.numReviews}
                color={"gold"}
              />
            </Card.Text>
            <Card.Text as="div">Rs {product.price}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
