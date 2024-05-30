
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from '../../products.json';
import ProductCard from "../ProductCard";

function BestSeller() { 
  const bestsell =  products.filter(product => product.status == "Best Sell")
  return (
    <>
      <div className="NewProduct">
        <Container>
          <div>
            <Row className="justify-content-md-sm-xs-center">
              <Col md={12} sm={12} xs={12}>
                <h1>Best Seller</h1>
              </Col>
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row>
              {bestsell.map((product, index) => (
             <ProductCard product={product} key={index}md={6} lg={3}/>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BestSeller;
