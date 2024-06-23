import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../ProductCard";
import products from '../../products.json';

function WomenProductList({ selectedColors, sortBy }) {
  let womenProducts = products.filter(
    (product) =>
      product.gendercat === "women" &&
      (selectedColors.length === 0 || selectedColors.includes(product.color))
  );

  let sortedProducts = [...womenProducts];
  switch (sortBy) {
    case "Price High To Low":
      sortedProducts.sort((a, b) => parseFloat(b.Price.slice(3)) - parseFloat(a.Price.slice(3)));
      break;
    case "Price Low To High":
      sortedProducts.sort((a, b) => parseFloat(a.Price.slice(3)) - parseFloat(b.Price.slice(3)));
      break;
    case "Latest Arrival":
      sortedProducts.sort(
        (a, b) => new Date(b.arrival_date) - new Date(a.arrival_date)
      );
      break;
    default:
      break;
  }

  return (
    <Container>
      <div className="WomenFilterRed">
        <Row>
          {sortedProducts.map((product, index) => (
            <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default WomenProductList;
