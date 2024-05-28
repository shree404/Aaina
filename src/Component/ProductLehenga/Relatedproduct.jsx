import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import products from '../../products.json';
import ProductCard from "../ProductCard"; 

function RelatedProduct() {
const relatedproduct = products.filter(product => product.type === "lehenga")
  return (
    <>
      <div className="NewProduct">
        <Container>
          <div>
            <Row className="justify-content-md-sm-xs-center ">
              <Col md={12} sm={12} xs={12}>
                <h1>Related Product</h1>
              </Col>
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row className="mb-5">
              {relatedproduct.map((product, index) => (
                <ProductCard product={product} key={index} md={3}  />
              ))}
            </Row>
          </div>
          <br /> <br />
        </Container>
      </div>
    </>
  );
}

export default RelatedProduct;
