
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductCard from "../ProductCard";
import products from '../../products.json';




function WomenLehengaList(){
const lehenga = products.filter(product => product.type === "lehenga")
    return(
        <>
  <Container>
        <div className="WomenFilterRed">
          <Row>
            {lehenga.map((product, index) => (
              <ProductCard product={product} key={index} md={4} />
            ))}
          </Row>
          </div>
      </Container>
        </>
    )
}

export default WomenLehengaList;