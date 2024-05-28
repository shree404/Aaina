
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import products from '../../products.json';
import ProductCard from "../ProductCard";

function WomenProductList() {

const women = products.filter(product => product.gendercat === "women")


  return (
    <>
      <Container>
        <div className="WomenFilterRed">
          <Row>
            {women.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default WomenProductList;
