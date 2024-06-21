import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import products from "../../products.json"; // Import your products data
import ProductCard from "../ProductCard";

function WomenProductList({ selectedColors }) {
  const womenProducts = products.filter((product) => {
    return product.gendercat === "women" && (selectedColors.length === 0 || selectedColors.includes(product.color));
  });

  return (
    <Container>
      <div className="WomenFilterRed">
        <Row>
          {womenProducts.map((product, index) => (
            <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default WomenProductList;
