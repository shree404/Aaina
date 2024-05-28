import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from '../../products.json';
import ProductCard from "../ProductCard";


function NewProduct() {

  const NewProduct = products.filter(product => product.status === "New Arrival")
  return (
    <>
      <div className="NewProduct">
        <Container>
          <div>
            <Row className="justify-content-md-sm-xs-center">
              <Col md={12} sm={12} xs={12}>
                <h1>New Products</h1>
              </Col>
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row>
              {NewProduct.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NewProduct;
